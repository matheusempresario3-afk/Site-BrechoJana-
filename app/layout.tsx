import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jana Viana Brechó | Brechó em Monte Mor",
  description:
    "Brechó em Monte Mor com moda feminina, masculina, infantil, plus size, calçados e acessórios novos e seminovos no Centro.",
  keywords: [
    "Jana Viana Brechó",
    "brechó em Monte Mor",
    "roupas femininas Monte Mor",
    "roupas masculinas Monte Mor",
    "moda plus size Monte Mor",
    "roupas infantis Monte Mor",
    "calçados Monte Mor",
    "brechó feminino Monte Mor"
  ],
  openGraph: {
    title: "Jana Viana Brechó | Moda acessível em Monte Mor",
    description:
      "Moda bonita, acessível e confiável para toda a família na Avenida Jânio Quadros, 771, em Monte Mor.",
    type: "website",
    locale: "pt_BR"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>{children}</body>
    </html>
  );
}
