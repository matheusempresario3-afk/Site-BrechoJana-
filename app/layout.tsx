import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jana Viana Brechó | Moda e Achados em Monte Mor",
  description:
    "Moda feminina, masculina e infantil, acessórios, livros e roupas para pets em Monte Mor. Conheça as novidades da Jana Viana Brechó.",
  keywords: [
    "Jana Viana Brechó",
    "brechó em Monte Mor",
    "roupas em Monte Mor",
    "moda feminina Monte Mor",
    "moda masculina Monte Mor",
    "roupas infantis Monte Mor",
    "acessórios Monte Mor",
    "livros em Monte Mor",
    "roupas para pets Monte Mor",
    "moda acessível em Monte Mor",
    "peças novas e seminovas Monte Mor"
  ],
  openGraph: {
    title: "Jana Viana Brechó | Moda e Achados em Monte Mor",
    description:
      "Moda para toda a família, acessórios, livros e roupas para pets em Monte Mor.",
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
