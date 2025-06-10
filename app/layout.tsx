import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navv from "./Components/Navv";
import Footer from "./Components/Footer";
import PrelineScript from "./Preline/PrelineScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Word Assembly",
  description:
    "Word Assembly is a dynamic church with a vision of raising leader that are spiritually and socially relevant by thoroughly equipping and inspiring the believer to influence their generation and impact the Kingdom of God. Word Assembly's core values include: Availability, Benevolence, Integrity, Diligence, and Excellence. It is a place to be!",

  // icons: {
  //   icon: "/assets/favicon.ico", // Path to your favicon
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <Navv />
        <div className="flex-grow">{children}</div>
        <Footer />
        <PrelineScript />
      </body>
    </html>
  );
}
