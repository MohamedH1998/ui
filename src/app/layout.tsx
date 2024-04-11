import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ui.momito.co.uk"),
  title: "Freelance Web Developer in London, UK | Momito",
  icons: "/logo.svg",
  description:
    "Freelance Web Developer in London, UK solving complex business problems with clean, scalable solutions - delivered as a modern and customisable website.",
  keywords: [
    "freelance developer london",
    "freelance developer camden",
    "jamstack developer london",
    "momito",
  ],
  openGraph: {
    title: "Freelance Web Developer in London, UK | Momito",

    description:
      "Freelance Web Developer in London, UK solving complex business problems with clean, scalable solutions - delivered as a modern and customisable website.",
    url: "https://www.momito.co.uk",
    siteName: "Momito | Freelance Developer",
    locale: "en_UK",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
