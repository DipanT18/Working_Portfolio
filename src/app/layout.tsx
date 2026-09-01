import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dipan Timalsina — Designer & Developer",
  description: "Independent designer and developer building identities and digital experiences with intent.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased bg-background">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
