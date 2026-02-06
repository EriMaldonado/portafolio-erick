"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import { LanguageProvider } from "@/lib/i18n";

interface MainProviderProps {
  children: ReactNode;
}

export default function MainProvider({ children }: MainProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange={false}
    >
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
