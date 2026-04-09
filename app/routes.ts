import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("projects", "routes/projects.tsx"),
	route("services", "routes/services.tsx"),
	route("about", "routes/about.tsx"),
	route("solutions", "routes/solutions.tsx"),
	route("case-studies", "routes/case-studies.tsx"),
	route("certification", "routes/certification.tsx"),
	route("about/our-vision", "routes/about-our-vision.tsx"),
	route("case-studies/proven-scale", "routes/case-studies-proven-scale.tsx"),
	route("contact/strategy-brief", "routes/contact-strategy-brief.tsx"),
] satisfies RouteConfig;
