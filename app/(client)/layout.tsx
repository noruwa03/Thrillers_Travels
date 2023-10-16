import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thrillers Travels Frontend Engineer Assessment",
  description:
    "UI Challenge on MimaBooking for thrillers travels frontend engineer assessment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-WorkSans">{children}</body>
    </html>
  );
}
