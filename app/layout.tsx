import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const cinzel = Cinzel({ subsets: ["latin"], variable: '--font-cinzel', weight: ['400', '600', '700'] });

export const metadata: Metadata = {
  title: "Vadakkumpuram Vishnumaya Kuttichathan Temple | Divine Blessings",
  description: "Experience divine power and protection at Vadakkumpuram Vishnumaya Kuttichathan Temple. Book poojas, get darshan info, and receive blessings.",
  keywords: "Vadakkumpuram Temple, Vishnumaya, Kuttichathan, Kerala Temple, Pooja Booking, Divine Blessings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Malayalam:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${cinzel.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
