import { Suspense, lazy } from "react";
import type { Route } from "./+types/home";

import { RoutePageLoader } from "@/components/common/route-page-loader";
import { buildSeoMeta } from "@/lib/seo";

const ArchitecturalHomePage = lazy(() =>
  import("@/pages/architectural-home").then((module) => ({
    default: module.ArchitecturalHomePage,
  }))
);

export const links: Route.LinksFunction = () => [
  { rel: "preload", as: "image", href: "/roof.png" },
  { rel: "preload", as: "image", href: "/counter-poster.jpg" },
];

export function meta({}: Route.MetaArgs) {
  return buildSeoMeta({
    title: "RASA | The Architectural Standard",
    description:
      "RASA delivers the architectural blueprint for hospitality excellence through systems-level operational design.",
    path: "/",
    image: "/counter-poster.jpg",
  });
}

export default function Home() {
  return (
    <Suspense fallback={<RoutePageLoader label="Loading home" />}>
      <ArchitecturalHomePage />
    </Suspense>
  );
}
