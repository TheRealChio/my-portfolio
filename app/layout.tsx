// seo
import type { Metadata } from "next";

// fonts
import { JetBrains_Mono } from "next/font/google";

// styles
import "./globals.css";

// components
import Header from "@/components/header";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Daniel Berneisch",
  description:
    "Welcome to my personal website. I'm a frontend developer base in Munich.",
  icons: {
    icon: "/assets/images/favicon.ico",
  },
  openGraph: {
    images: "/assets/images/new-profile-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <div className="mt-32 xl:mt-0">{children}</div>
      </body>
    </html>
  );
}
