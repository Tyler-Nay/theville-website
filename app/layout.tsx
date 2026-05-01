import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "The Ville Athletics | Las Vegas Youth Sports",
  description:
    "The Ville Athletics is a Las Vegas-based youth sports organization offering basketball, soccer, cross country, and flag football programs for grades K–12.",
  keywords: [
    "Las Vegas youth sports",
    "basketball Las Vegas kids",
    "soccer Las Vegas youth",
    "flag football Las Vegas",
    "cross country Las Vegas youth",
    "youth athletics Las Vegas",
    "The Ville Athletics",
  ],
  openGraph: {
    title: "The Ville Athletics",
    description:
      "Community-driven youth sports programs in Las Vegas for basketball, soccer, cross country, and flag football.",
    url: "https://thevillelv.com",
    siteName: "The Ville Athletics",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "The Ville Athletics",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}