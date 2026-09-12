import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MUNOP — Pet Food Platform",
  description:
    "Robótica, software y producto. Pet Food Platform en etapa de prototipo y validación comercial.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}
         <Analytics />
      </body>
    </html>
  );
}
