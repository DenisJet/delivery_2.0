import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Separator } from "@/components/ui/separator";
import Providers from "./providers/Providers";

const inter = Inter({ subsets: ["latin"] });

// TODO: recheck metadata
export const metadata: Metadata = {
  title: "Доставка Сатка",
  description: "Доставка из любого магазина",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <Header />
          <Separator className="mt-1 mb-3" />
          <main className="max-w-7xl mx-auto px-2">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
