import { ThemeProvider } from "@/components/theme-provider";
import { AppProvider } from "@/providers/app-provider";
import fs from "fs";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import path from "path";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" }
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ayetec.vercel.app"),
  title: {
    default: "AyE | Desarrollo Web Profesional",
    template: "%s | AyE",
  },
  description: "Diseño web profesional, desarrollo de sitios web y aplicaciones personalizadas para tu negocio. Soluciones digitales a medida.",
  keywords: ["diseño web", "desarrollo web", "aplicaciones web", "sitios web", "marketing digital", "SEO", "diseño responsive"],
  authors: [{
    name: "Angel Maldonado", url: "https://www.linkedin.com/in/angelmaldonadojz/",
  }, {
    name: "Erika Granados", url: "https://www.linkedin.com/in/erika-granados-grifaldo/",
  }],
  creator: "AyE",
  publisher: "AyE",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://ayetec.vercel.app",
    siteName: "AyE",
    title: "AyE | Desarrollo Web Profesional",
    description: "Diseño web profesional, desarrollo de sitios web y aplicaciones personalizadas para tu negocio. Soluciones digitales a medida.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AyE - Desarrollo Web Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AyE | Desarrollo Web Profesional",
    description: "Diseño web profesional, desarrollo de sitios web y aplicaciones personalizadas para tu negocio.",
    creator: "@amaldonado07", // Placeholder - replace with your Twitter handle
    images: ["/twitter-image.jpg"], // Placeholder - replace with your actual Twitter image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
    yahoo: "your-yahoo-verification",
  },
  alternates: {
    canonical: "https://ayetec.vercel.app",
    languages: {
      "es-ES": "https://ayetec.vercel.app/es",
    },
  },
  category: "technology",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  manifest: "/manifest.json", // Placeholder - create a web app manifest
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
  applicationName: "AyE",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const templatesData = fs.readFileSync(path.join(process.cwd(), 'data', 'templates.json'), 'utf8')
  const templatesJSON = JSON.parse(templatesData) as Template[]
  const projectsData = fs.readFileSync(path.join(process.cwd(), 'data', 'projects.json'), 'utf8')
  const projectsJSON = JSON.parse(projectsData) as Project[]

  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <AppProvider templates={templatesJSON} projects={projectsJSON}>
            {children}
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
