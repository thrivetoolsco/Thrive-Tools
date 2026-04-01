import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { Router } from "wouter";

export async function render(url: string, Component: React.ComponentType) {
  const helmetContext: Record<string, unknown> = {};

  const useServerLocation = () => [url, () => {}] as const;

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <Router hook={useServerLocation as Parameters<typeof Router>[0]["hook"]}>
        <Component />
      </Router>
    </HelmetProvider>
  );

  const { helmet } = helmetContext as { helmet: Record<string, { toString(): string }> };
  return { html, helmet };
}
