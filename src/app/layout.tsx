import type { Metadata } from "next";
import { Outfit } from "next/font/google"
import Navigation from "./components/Navigation";
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Trailo - Ride Planning App",
  description: "Experience the future of ride-planning with Trailo. Live location tracking of friends, in-ride chat, and seamless friend management.",
  keywords: "ride sharing, location tracking, flutter app, transportation, friends, chat",
  openGraph: {
    title: "Trailo - Modern Ride Planning App",
    description: "Experience the future of ride-sharing with Trailo",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased font-outfit`}
      >
        <AuthProvider>
          <Navigation />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
