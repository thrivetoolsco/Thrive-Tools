import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import type { ComponentType } from "react";
import { legacyRedirects, knownPublicPaths } from "../shared/site-routes";

function injectSSR(
  template: string,
  ssrHtml: string,
  helmet: Record<string, { toString(): string }>
): string {
  const helmetHead = [
    helmet?.title?.toString() ?? "",
    helmet?.meta?.toString() ?? "",
    helmet?.link?.toString() ?? "",
    helmet?.script?.toString() ?? "",
  ].join("\n  ");

  let page = template;
  page = page.replace(/<title[^>]*>[^<]*<\/title>/g, "");
  page = page.replace(/<meta\s+name="description"[^>]*>/gi, "");
  page = page.replace(/<meta\s+property="og:[^"]*"[^>]*>/gi, "");
  page = page.replace(/<meta\s+name="twitter:[^"]*"[^>]*>/gi, "");
  page = page.replace(/<link\s+rel="canonical"[^>]*>/gi, "");
  page = page.replace("</head>", `  ${helmetHead}\n  </head>`);
  page = page.replace('<div id="root"></div>', `<div id="root">${ssrHtml}</div>`);
  return page;
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  const ssrEntryPath = path.resolve(__dirname, "entry-server.cjs");
  const indexHtmlPath = path.resolve(distPath, "index.html");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(
    express.static(distPath, {
      setHeaders(res, filePath) {
        if (/\.(js|css|woff2?|webp|jpg|jpeg|png|svg|ico|gif)$/.test(filePath)) {
          if (/assets\//.test(filePath)) {
            res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
          } else {
            res.setHeader("Cache-Control", "public, max-age=86400");
          }
        } else if (filePath.endsWith(".html")) {
          res.setHeader("Cache-Control", "no-cache");
        }
      },
    })
  );

  const ssrAvailable = fs.existsSync(ssrEntryPath) && fs.existsSync(indexHtmlPath);

  if (!ssrAvailable) {
    console.warn("[SSR] entry-server.cjs not found — serving SPA shell for all routes");
    app.use("/{*path}", (req, res) => {
      const urlPath = req.originalUrl.split("?")[0].replace(/\/$/, "") || "/";
      const redirectTarget = legacyRedirects[urlPath];
      if (redirectTarget) {
        return res.redirect(301, redirectTarget);
      }
      const status = knownPublicPaths.has(urlPath) ? 200 : 404;
      res.status(status).sendFile(indexHtmlPath);
    });
    return;
  }

  const template = fs.readFileSync(indexHtmlPath, "utf-8");

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const ssrModule = require(ssrEntryPath) as {
    render: (url: string, Component: ComponentType) => Promise<{
      html: string;
      helmet: Record<string, { toString(): string }>;
    }>;
    SSR_ROUTE_COMPONENTS: Record<string, ComponentType>;
  };

  app.use("/{*path}", async (req, res) => {
    const urlPath = req.originalUrl.split("?")[0].replace(/\/$/, "") || "/";

    const redirectTarget = legacyRedirects[urlPath];
    if (redirectTarget) {
      return res.redirect(301, redirectTarget);
    }

    const Component = ssrModule.SSR_ROUTE_COMPONENTS[urlPath];

    if (Component) {
      try {
        const { html: ssrHtml, helmet } = await ssrModule.render(urlPath, Component);
        const page = injectSSR(template, ssrHtml, helmet);
        return res.status(200).set({ "Content-Type": "text/html" }).end(page);
      } catch (err) {
        console.error(`[SSR] Failed for ${urlPath}:`, err);
      }
    }

    const status = knownPublicPaths.has(urlPath) ? 200 : 404;
    res.status(status).sendFile(indexHtmlPath);
  });
}
