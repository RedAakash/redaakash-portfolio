import "./globals.css";
import { Inter, Caveat } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Define a CSS variable for global usage
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"], // Include weights as needed
  variable: "--font-caveat", // Define a CSS variable for selective usage
});

export const metadata = {
  title: 'RedAakash | Expert DevOps Engineer | Freelancer & OnEggy Technologies Founder',
  description: 'Providing expert DevOps solutions, freelance services, and cloud consulting. RedAakash is a trusted DevOps Engineer and founder of OnEggy Technologies.',
  keywords: 'DevOps services, freelance DevOps engineer, RedAakash, cloud consulting, OnEggy Technologies, CI/CD pipelines, infrastructure automation, DevOps solutions',
  author: 'RedAakash',
  url: 'https://www.redaakash.com', // Your website URL
  image: '/og-image.png', // Replace with the path to your Open Graph image
  type: 'website', // Open Graph type
  themeColor: '#0f172a', // Primary theme color
  twitterUsername: '@redaakash', // Your Twitter handle
  siteName: 'RedAakash Portfolio', // The name of your site for Open Graph
  language: 'en-US', // Language for SEO
  robots: 'index, follow', // Robots meta tag for SEO
  canonical: 'https://www.redaakash.com', // Canonical URL to avoid duplicates
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${inter.variable} ${caveat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
