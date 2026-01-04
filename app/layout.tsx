import type { Metadata } from "next";
import "./globals.css";
import BackgroundParticles from "@/components/particles/BackgroundParticles";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Personal portfolio home page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-foreground relative">
        <div
          aria-hidden
          className="w-full min-h-screen absolute top-0 left-0 z-0"
        >
          <BackgroundParticles />
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}

