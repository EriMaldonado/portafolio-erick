"use client";

import * as React from "react";
import { Languages } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";

export default function LanguageToggle() {
  const { language, setLanguage } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="relative p-2 rounded-lg bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          aria-label="Toggle language"
        >
          <Languages className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={`cursor-pointer ${
            language === "en" ? "bg-gray-100 dark:bg-gray-700" : ""
          }`}
        >
          🇺🇸 English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("es")}
          className={`hover:bg-gray-200 dark:hover:bg-[#15326F] hover:text-black dark:hover:text-white transition-all duration-200 ease-in-out ${
            language === "es" ? "bg-gray-100 dark:bg-gray-700" : ""
          }`}
        >
          🇪🇸 Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
