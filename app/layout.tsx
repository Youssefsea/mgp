import type { Metadata } from "next";
import {
  Cairo,
  DM_Sans,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Mohamed Gamal | Cloud & DevOps Engineer",
  description:
    "Cloud & DevOps Engineer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cairo.variable} ${dmSans.variable} ${spaceGrotesk.variable}`}
      >
        {children}
      </body>
    </html>
  );
}