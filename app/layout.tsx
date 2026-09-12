import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MUNOP — Robotics, Embedded Systems & Software",
  description:
    "MUNOP desarrolla productos que conectan robótica, sistemas embebidos y software con aplicaciones del mundo real.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
