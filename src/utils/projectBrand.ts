export const PROJECT_BRAND_LOGOS = {
  design: {
    src: "/images/logos/HUB_ARCHITECT_HOUSE_white.png",
    alt: "HUB Architects",
  },
  implementation: {
    src: "/images/logos/HUB_BUILDS_white.png",
    alt: "HUB Builds",
  },
} as const;

export function getProjectBrandLogo(type?: string | null) {
  return type === "design"
    ? PROJECT_BRAND_LOGOS.design
    : PROJECT_BRAND_LOGOS.implementation;
}
