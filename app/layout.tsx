import type { Metadata } from "next";
import "./globals.css";
import { GalaxiBackground, DynamicBody } from "@/app/components/shared";
import { MainProvider } from "@/providers";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <DynamicBody>
          <MainProvider>
            <div className="fixed inset-0 -z-10">
              <GalaxiBackground />
            </div>
            {children}
          </MainProvider>
        </DynamicBody>
      </body>
    </html>
  );
}
