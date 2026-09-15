import type { Metadata } from "next";
import { Raleway, Open_Sans } from "next/font/google";
import { ChangeThemeProvider } from "@/store/context";
import { UIProvider } from "@/store/context/ui/UIContext";
import { getSiteUrlObjectOrThrow } from "@/shared/config/site-url";
import "./globals.scss";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-raleway",
});
const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-open-sans",
});

const siteUrl = getSiteUrlObjectOrThrow();
const ogImage = "/images/portfolio/case-studies/movemybike-cover-1200x675.webp";
const defaultTitle = "JC | Front End Developer | Freelancer";
const defaultDescription =
  "Hola ! Soy Joan, disfruto desarrollar sitios web implementando tecnologías eficientes y modernas. Una de mis mayores motivaciones es aprender.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: defaultTitle,
  description: defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "/",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 675,
        alt: "Joan Cochachi - WordPress & PHP Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${raleway.variable} ${open_sans.variable}`}>
        <UIProvider>
          <ChangeThemeProvider>{children}</ChangeThemeProvider>
        </UIProvider>
      </body>
    </html>
  );
}
