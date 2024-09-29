import type { Metadata } from "next";
import { Poppins, Marck_Script } from "next/font/google";
import "./globals.css";

const poppinsMedium = Poppins({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-poppins-medium",
});

const poppinsExtraLight = Poppins({
  weight: "200",
  subsets: ["latin"],
  variable: "--font-poppins-extra-light",
});

const marckScript = Marck_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marck-script",
});

export const metadata: Metadata = {
  title: "TalentFlow",
  description:
    "TalentFlow connects students and alumni with real insights into career paths, company experiences, and key skills needed to land top roles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsMedium.variable} ${poppinsExtraLight.variable} ${marckScript.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

