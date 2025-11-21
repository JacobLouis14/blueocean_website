import type { Metadata } from "next";
import { Rakkas, Montserrat, Odor_Mean_Chey } from "next/font/google";
import "./globals.css";

const rakkas = Rakkas({
  weight: ["400"],
  variable: "--font-rakkas",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const odorMeanChey = Odor_Mean_Chey({
  weight: ["400"],
  variable: "--font-odor-mean-chey",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlueOcean Beverages",
  description: "description goes here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rakkas.variable} ${odorMeanChey.variable} ${montserrat.variable} antialiased font-montserrat bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
