import type { Metadata } from "next";
import { Raleway, Open_Sans } from "next/font/google";
import { ChangeThemeProvider } from "@/store/context";
import { UIProvider } from "@/store/context/ui/UIContext";
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

export const metadata: Metadata = {
  title: "JC | Front End Developer | Freelancer",
  description:
    "Hola ! Soy Joan, disfruto desarrollar sitios web implementando tecnologías eficientes y modernas. Una de mis mayores motivaciones es aprender.",
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
