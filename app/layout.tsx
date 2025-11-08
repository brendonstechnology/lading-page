import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Upcode - Tecnologia de Ponta",
  description: "Desenvolvemos soluções inovadoras com foco em performance otimizada, segurança avançada e design intuitivo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" 
          rel="stylesheet" 
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=optional" 
          rel="stylesheet" 
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
