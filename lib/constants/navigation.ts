export const NAV_ITEMS = [
  { id: "home", href: "#home", path: "#hero" },
  { id: "skills", href: "#skills", path: "#skills" },
  { id: "projects", href: "#projects", path: "#projects" },
  { id: "contact", href: "#contact", path: "#contact" },
] as const;

export type NavItemId = (typeof NAV_ITEMS)[number]["id"];
