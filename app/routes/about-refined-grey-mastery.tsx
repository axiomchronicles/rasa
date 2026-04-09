import { AboutRefinedGreyMasteryPage } from "@/pages/about-refined-grey-mastery";

export function meta() {
  return [
    { title: "About | RASA Refined Grey Mastery" },
    {
      name: "description",
      content:
        "Engineering operational mastery through standardized systems, measurable quality, and scalable architecture.",
    },
  ];
}

export default function AboutRefinedGreyMasteryRoute() {
  return <AboutRefinedGreyMasteryPage />;
}
