import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio Personal de Arturo Legaspi",
  description: "Descubre el portfolio de Arturo Legaspi, Tech Lead con más de 10 años de experiencia en arquitectura de software y gestión de equipos.",
  openGraph: {
    type: "website",
    url: "https://legasint.com",
    title: "Portfolio Personal de Arturo Legaspi",
    description: "Descubre el portfolio de Arturo Legaspi, Tech Lead con más de 10 años de experiencia en arquitectura de software y gestión de equipos.",
    images: [
      {
        url: "/og-image-min.png",
        width: 1200,
        height: 630,
        alt: "Portfolio de Arturo Legaspi",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#0a0a0a] text-gray-200`}
      >
        {children}
      </body>
    </html>
  );
}
