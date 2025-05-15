import { Public_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Built to Rank | Modern Web Design & SEO Strategy",
  description:
    "Built to Rank creates lightning-fast, responsive websites that elevate your online presence. From strategy to launch, we help brands grow through bold design and smart performance.",
  keywords: [
    "web design",
    "responsive websites",
    "SEO strategy",
    "digital branding",
    "fast websites",
    "Built to Rank",
  ],
  authors: [{ name: "Built to Rank" }],
  creator: "Built to Rank",
  openGraph: {
    title: "Built to Rank",
    description:
      "Modern web design and SEO strategies built to grow your business online.",
    url: "https://yourdomain.com",
    siteName: "Built to Rank",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Built to Rank - Web Design & SEO",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
