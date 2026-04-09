import { Suspense, lazy } from "react";
import type { Route } from "./+types/contact-strategy-brief";

import { RoutePageLoader } from "@/components/common/route-page-loader";
import { buildSeoMeta } from "@/lib/seo";

const ContactStrategyBriefPage = lazy(() =>
  import("@/pages/contact-strategy-brief").then((module) => ({
    default: module.ContactStrategyBriefPage,
  }))
);

export function meta({}: Route.MetaArgs) {
  return buildSeoMeta({
    title: "Contact | RASA Strategy Brief",
    description:
      "Initiate a strategic inquiry with RASA consultants to architect scalable hospitality operations.",
    path: "/contact/strategy-brief",
    image: "/logo.png",
  });
}

export default function ContactStrategyBriefRoute() {
  return (
    <Suspense fallback={<RoutePageLoader label="Loading contact" />}>
      <ContactStrategyBriefPage />
    </Suspense>
  );
}
