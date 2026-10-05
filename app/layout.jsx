import { Oswald, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AosProvider from "@/components/AosProvider";
import { site } from "@/lib/site";

const display = Oswald({ subsets: ["latin"], variable: "--font-display", weight: ["400", "500", "600", "700"], display: "swap" });
const body = Lato({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "700"],
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} - The Breath of Life`, template: `%s | ${site.name}` },
  description: site.description,
  icons: {
    icon: "/images/logo.jpg",
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  openGraph: {
    title: `${site.name} - The Breath of Life`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [{ url: "/images/logo.jpg", width: 800, height: 800, alt: "Pritha Health Care Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} - The Breath of Life`,
    description: site.description,
    images: ["/images/logo.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <AosProvider />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
