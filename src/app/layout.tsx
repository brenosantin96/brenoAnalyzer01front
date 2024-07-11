import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { IncidentsProvider } from '../contexts/IncidentContext'
import { AuthProvider } from '../contexts/Auth/AuthProvider'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Analyzer",
  description: "Repsol file analyzer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <IncidentsProvider>
          <body className={inter.className}>{children}</body>
        </IncidentsProvider>
      </AuthProvider>
    </html>
  );
}
