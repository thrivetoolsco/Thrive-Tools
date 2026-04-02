import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { Router } from "wouter";
import { SSR_ROUTE_COMPONENTS } from "./ssr-routes";

export { SSR_ROUTE_COMPONENTS };

export async function render(url: string, Component?: React.ComponentType) {
  const ComponentToRender = Component ?? SSR_ROUTE_COMPONENTS[url];
  if (!ComponentToRender) {
    throw new Error(`No SSR component found for URL: ${url}`);
  }

  const helmetContext: Record<string, unknown> = {};
  const useServerLocation = () => [url, () => {}] as const;

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <Router hook={useServerLocation as Parameters<typeof Router>[0]["hook"]}>
        <ComponentToRender />
      </Router>
    </HelmetProvider>
  );

  const { helmet } = helmetContext as { helmet: Record<string, { toString(): string }> };
  return { html, helmet };
}
