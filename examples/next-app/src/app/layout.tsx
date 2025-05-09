import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CrossUI Kit - Next.js Demo",
  description: "Cross-platform UI components demo in Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
