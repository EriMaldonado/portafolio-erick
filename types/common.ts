export type Language = "en" | "es";
export type Theme = "light" | "dark" | "system";

export interface DocumentUrls {
  es: string;
  en: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavigationItem {
  id: string;
  href: string;
}
