import type { Metadata } from "next";
import "@/commons/styles/globals.css";
import { inter, outfitSans } from "@/commons/styles/fonts";
import { ThemeProvider } from "@/components/theme/provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://meutrampo.dev.br'),
  title: {
    default: 'Meu Trampo',
    template: '%s | Meu Trampo'
  },
  description: 'Desenvolvimento de sites, landing pages e sistemas web sob medida. Elevamos o nível do seu negócio com tecnologia e identidade visual profissional.',
  keywords: ['desenvolvimento de sites', 'landing page', 'sistemas web', 'identidade visual', 'sistemas por assinatura', 'São Paulo', 'Zona Leste', 'Penha', 'Brasil'],
  authors: [{ name: 'Meu Trampo' }],
  creator: 'Meu Trampo',
  publisher: 'Meu Trampo',

  // Configurações de Redes Sociais (Open Graph)
  openGraph: {
    title: 'Meu Trampo',
    description: 'Deixe o trabalho manual para trás e acelere seu trampo com tecnologia.',
    url: 'https://meutrampo.dev.br',
    siteName: 'Meu Trampo',
    locale: 'pt_BR',
    type: 'website',
  },

  // Configuração para o Twitter (X)
  twitter: {
    card: 'summary_large_image',
    title: 'Meu Trampo',
    description: 'Desenvolvimento de sistemas e sites sob medida para pequenos negócios.',
  },

  // Instrução específica do seu gerador (image_6fdc11.png)
  appleWebApp: {
    title: 'Meu Trampo',
    statusBarStyle: 'default',
    capable: true,
  },
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
  },

  // Robots
  robots: {
    index: true,
    follow: true,
  },

  // Localização para SEO regional (São Paulo)
  other: {
    'geo.region': 'BR-SP',
    'geo.placename': 'São Paulo',
    'geo.position': '-23.5505;-46.6333',
    'ICBM': '-23.5505, -46.6333',
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${outfitSans.variable} ${inter.variable} antialiased`}
      >
        <head>
          <link rel="manifest" href="/manifest.json" />
        </head>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
