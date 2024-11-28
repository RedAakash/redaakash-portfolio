"use client"

import "./globals.css";
import { Inter, Caveat } from "next/font/google";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Define a CSS variable for global usage
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"], // Include weights as needed
  variable: "--font-caveat", // Define a CSS variable for selective usage
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <Head>
        <title>RedAakash | DevOps Engineer Freelancer</title>
        <meta name="description" content="Expert DevOps services by RedAakash, founder of OnEggy Technologies." />
        <meta name="keywords" content="DevOps services, DevOps freelancer, RedAakash, OnEggy Technologies" />
        <meta name="author" content="RedAakash" />
        <meta property="og:title" content="RedAakash | DevOps Engineer Freelancer" />
        <meta property="og:description" content="Expert DevOps services by RedAakash, founder of OnEggy Technologies." />
        <meta property="og:url" content="https://www.redaakash.com/" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RedAakash | DevOps Engineer Freelancer" />
        <meta name="twitter:description" content="Expert DevOps services by RedAakash, founder of OnEggy Technologies." />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>
      <body
        className={`${inter.variable} ${caveat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
