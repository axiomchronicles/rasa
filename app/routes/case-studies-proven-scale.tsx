import { Suspense, lazy } from "react";
import type { Route } from "./+types/case-studies-proven-scale";

import { RoutePageLoader } from "@/components/common/route-page-loader";
import { buildSeoMeta } from "@/lib/seo";

const CaseStudiesProvenScalePage = lazy(() =>
  import("@/pages/case-studies-proven-scale").then((module) => ({
    default: module.CaseStudiesProvenScalePage,
  }))
);

export function meta({}: Route.MetaArgs) {
  return buildSeoMeta({
    title: "Case Studies | RASA Proven Scale",
    description:
      "Client transformations that quantify operational gains and establish no-variance execution systems.",
    path: "/case-studies/proven-scale",
    image: "/tables.png",
  });
}

export default function CaseStudiesProvenScaleRoute() {
  return (
    <Suspense fallback={<RoutePageLoader label="Loading case studies" />}>
      <CaseStudiesProvenScalePage />
    </Suspense>
  );
}
