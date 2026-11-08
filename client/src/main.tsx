import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { startMonthCopy } from "./lib/month-copy";
import "./index.css";

const stopMonthCopy = startMonthCopy();
if (import.meta.hot) import.meta.hot.dispose(stopMonthCopy);

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
