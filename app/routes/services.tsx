import { Suspense, lazy } from "react";
import { useLoaderData } from "react-router";
import type { Route } from "./+types/services";

import { RoutePageLoader } from "@/components/common/route-page-loader";
import { buildSeoMeta } from "@/lib/seo";

const ContactStrategyBriefPage = lazy(() =>
  import("@/pages/contact-strategy-brief").then((module) => ({
    default: module.ContactStrategyBriefPage,
  }))
);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function resolvePublicContactEmail() {
  const candidates = [
    process.env.CONTACT_PUBLIC_EMAIL,
    process.env.CONTACT_BRIEF_TO,
    process.env.SMTP_USER,
  ];

  for (const candidate of candidates) {
    const normalized = candidate?.trim();
    if (normalized && emailPattern.test(normalized)) {
      return normalized;
    }
  }

  return "";
}

export async function loader() {
  return {
    contactEmail: resolvePublicContactEmail(),
  };
}

export function meta({}: Route.MetaArgs) {
  return buildSeoMeta({
    title: "Services | RASA Strategy Brief",
    description:
      "Explore RASA consulting services and start your strategic inquiry to scale hospitality operations.",
    path: "/services",
    image: "/logo.png",
  });
}

export default function ServicesRoute() {
  const { contactEmail } = useLoaderData<typeof loader>();

  return (
    <Suspense fallback={<RoutePageLoader label="Loading services" />}>
      <ContactStrategyBriefPage contactEmail={contactEmail} />
    </Suspense>
  );
}
