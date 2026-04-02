import { type Express } from "express";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import fs from "fs";
import path from "path";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

const BLOG_ROUTE_MAP: Record<string, string> = {
  "/product-reviews/im8-vs-ag1": "/src/pages/reviews/Im8VsAg1.tsx",
  "/product-reviews/im8-health-review": "/src/pages/reviews/Im8HealthReview.tsx",
  "/product-reviews/vielight-neuro-review": "/src/pages/reviews/VielightNeuroReview.tsx",
  "/product-reviews/hyperion-herbs": "/src/pages/reviews/HyperionHerbs.tsx",
  "/product-reviews/joovv-review": "/src/pages/reviews/JoovvReview.tsx",
  "/product-reviews/rhonda-patrick-multivitamin": "/src/pages/reviews/RhondaPatrickMultivitamin.tsx",
  "/blog/rhonda-patrick-multivitamin": "/src/pages/reviews/RhondaPatrickMultivitamin.tsx",
  "/product-reviews/biohacking-supplements-2026": "/src/pages/reviews/BiohackingSupplements2026.tsx",
  "/blog/biohacking-supplements-2026": "/src/pages/reviews/BiohackingSupplements2026.tsx",
  "/product-reviews/biohacking-beginners-guide": "/src/pages/reviews/BiohackingBeginnersGuide.tsx",
  "/blog/biohacking-beginners-guide": "/src/pages/reviews/BiohackingBeginnersGuide.tsx",
  "/product-reviews/breathwork-beginners-guide": "/src/pages/reviews/BreathworkBeginnersGuide.tsx",
  "/product-reviews/somatic-reset-guide": "/src/pages/reviews/SomaticResetGuide.tsx",
  "/blog/somatic-reset-guide": "/src/pages/reviews/SomaticResetGuide.tsx",
  "/product-reviews/creatine-dosage-for-brain": "/src/pages/reviews/CreatineDosageForBrain.tsx",
  "/blog/creatine-dosage-for-brain": "/src/pages/reviews/CreatineDosageForBrain.tsx",
  "/product-reviews/mouth-breathing-mouth-taping": "/src/pages/reviews/MouthBreathingGuide.tsx",
  "/blog/mouth-breathing-mouth-taping": "/src/pages/reviews/MouthBreathingGuide.tsx",
  "/product-reviews/mct-oil-benefits-c8-vs-c10-powder-vs-oil": "/src/pages/reviews/MctOilGuide.tsx",
  "/blog/mct-oil-benefits-c8-vs-c10-powder-vs-oil": "/src/pages/reviews/MctOilGuide.tsx",
  "/product-reviews/tonic-herbs-guide": "/src/pages/reviews/TonicHerbsGuide.tsx",
  "/blog/tonic-herbs-guide": "/src/pages/reviews/TonicHerbsGuide.tsx",
  "/product-reviews/earthrunners-review": "/src/pages/reviews/EarthRunnersReview.tsx",
  "/blog/earthrunners-review": "/src/pages/reviews/EarthRunnersReview.tsx",
  "/product-reviews/energybits-spirulina-chlorella-review": "/src/pages/reviews/EnergyBitsReview.tsx",
  "/blog/energybits-spirulina-chlorella-review": "/src/pages/reviews/EnergyBitsReview.tsx",
  "/product-reviews/bacillus-subtilis-bacillus-coagulans-probiotic-guide": "/src/pages/reviews/JustThriveProbiotic.tsx",
  "/blog/bacillus-subtilis-bacillus-coagulans-probiotic-guide": "/src/pages/reviews/JustThriveProbiotic.tsx",
  "/product-reviews/reishi-schisandra-daily-tonic-herbs": "/src/pages/reviews/ReishiSchisandraGuide.tsx",
  "/blog/reishi-schisandra-daily-tonic-herbs": "/src/pages/reviews/ReishiSchisandraGuide.tsx",
  "/product-reviews/magnesium-deficiency-supplement-guide": "/src/pages/reviews/MagnesiumGuide.tsx",
  "/blog/magnesium-deficiency-supplement-guide": "/src/pages/reviews/MagnesiumGuide.tsx",
  "/product-reviews/pumpkin-seed-oil-supplement-stack-benefits": "/src/pages/reviews/PumpkinSeedOilGuide.tsx",
  "/blog/pumpkin-seed-oil-supplement-stack-benefits": "/src/pages/reviews/PumpkinSeedOilGuide.tsx",
  "/product-reviews/omega-3-complete-guide-epa-dha-fish-oil-vs-algae": "/src/pages/reviews/Omega3Guide.tsx",
  "/blog/omega-3-complete-guide-epa-dha-fish-oil-vs-algae": "/src/pages/reviews/Omega3Guide.tsx",
  "/blog/cordyceps-cs4-vs-wild-cordyceps-sinensis": "/src/pages/reviews/CordycepsGuide.tsx",
  "/blog/red-light-therapy-science-benefits-devices": "/src/pages/reviews/RedLightTherapyGuide.tsx",
  "/blog/ketamine-brain-science-nmda-receptors-neuron-regrowth": "/src/pages/reviews/KetamineGuide.tsx",
  "/blog/muse-headband-review-eeg-neurofeedback": "/src/pages/reviews/MuseHeadbandReview.tsx",
  "/blog/hydrogen-water-benefits-science-review": "/src/pages/reviews/HydrogenWaterGuide.tsx",
  "/blog/ceremonial-cacao-benefits-science-review": "/src/pages/reviews/CeremonialCacaoGuide.tsx",
};

async function ssrRenderBlogPost(
  vite: Awaited<ReturnType<typeof createViteServer>>,
  template: string,
  urlPath: string,
  componentModulePath: string
): Promise<string> {
  const { render } = await vite.ssrLoadModule("/src/entry-server.tsx") as {
    render: (url: string, Component: React.ComponentType) => Promise<{
      html: string;
      helmet: Record<string, { toString(): string }>;
    }>;
  };

  const componentModule = await vite.ssrLoadModule(componentModulePath) as {
    default: React.ComponentType;
  };

  const { html: ssrHtml, helmet } = await render(urlPath, componentModule.default);

  const helmetHead = [
    helmet?.title?.toString() ?? "",
    helmet?.meta?.toString() ?? "",
    helmet?.link?.toString() ?? "",
    helmet?.script?.toString() ?? "",
  ].join("\n  ");

  let page = template;

  // Strip all default SEO tags from the template — helmet will provide correct ones
  page = page.replace(/<title[^>]*>[^<]*<\/title>/g, "");
  page = page.replace(/<meta\s+name="description"[^>]*>/gi, "");
  page = page.replace(/<meta\s+property="og:[^"]*"[^>]*>/gi, "");
  page = page.replace(/<meta\s+name="twitter:[^"]*"[^>]*>/gi, "");
  page = page.replace(/<link\s+rel="canonical"[^>]*>/gi, "");

  page = page.replace("</head>", `  ${helmetHead}\n  </head>`);
  page = page.replace('<div id="root"></div>', `<div id="root">${ssrHtml}</div>`);

  return page;
}

export async function setupVite(server: Server, app: Express) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server, path: "/vite-hmr" },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use("/{*path}", async (req, res, next) => {
    const url = req.originalUrl;
    const urlPath = url.split("?")[0];

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      template = await vite.transformIndexHtml(url, template);

      const componentModulePath = BLOG_ROUTE_MAP[urlPath];
      if (componentModulePath) {
        try {
          const page = await ssrRenderBlogPost(vite, template, urlPath, componentModulePath);
          return res.status(200).set({ "Content-Type": "text/html" }).end(page);
        } catch (ssrErr) {
          console.error(`[SSR] Failed to render ${urlPath}, falling back to SPA:`, ssrErr);
        }
      }

      res.status(200).set({ "Content-Type": "text/html" }).end(template);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}
