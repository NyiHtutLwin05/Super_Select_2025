import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Super Select Glass & Aluminum",
  description:
    "Premium glass and aluminum solutions for your needs.Transform your spaces with state-of-the-art glass and aluminum solutions designed to elevate aesthetics, enhance durability, and deliver unmatched craftsmanship.",
  openGraph: {
    title: "Super Select Glass & Aluminum",
    description:
      "Transform your spaces with state-of-the-art glass and aluminum solutions designed to elevate aesthetics, enhance durability, and deliver unmatched craftsmanship.",
    images: [
      {
        url: "My life (2).jpg",
        width: 1200,
        height: 630,
        alt: "Super Select Glass & Aluminum Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
    siteName: "Super Select Glass & Aluminum",
  },
  twitter: {
    card: "summary_large_image",
    title: "Super Select Glass & Aluminum",
    description: "Premium glass and aluminum solutions for your needs",
    images: ["My life (2).jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
