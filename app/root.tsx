import {
  isRouteErrorResponse,
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
} from "react-router";

import { FloatingWhatsApp } from "@/components/common/floating-whatsapp";
import { RouteOrchestrator } from "@/components/common/route-orchestrator";
import { SITE_NAME, organizationJsonLd, toJsonLd, websiteJsonLd } from "@/lib/seo";
import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
  { rel: "dns-prefetch", href: "https://fonts.gstatic.com" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@200..800&display=swap",
  },
  { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
  { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
  { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  { rel: "manifest", href: "/site.webmanifest" },
];

export function meta() {
  return [
    { name: "application-name", content: SITE_NAME },
    { name: "apple-mobile-web-app-title", content: SITE_NAME },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "format-detection", content: "telephone=no" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "en_US" },
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f9f9f9" />
        <meta name="msapplication-TileColor" content="#f9f9f9" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: toJsonLd(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: toJsonLd(websiteJsonLd) }}
        />
      </head>
      <body className="bg-surface text-on-surface">
        {children}
        <FloatingWhatsApp />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <RouteOrchestrator />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
