import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#06090e",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Abhishek Ahirrao | Embedded Systems & Electronics",
  description:
    "Electronics & Telecommunication Engineering student focused on Embedded Systems, Embedded C, real-time systems, FPGA/RTL, communication, control and hardware–software integration.",
  keywords: [
    "Abhishek Ahirrao",
    "Embedded Systems",
    "Electronics Engineering",
    "ENTC",
    "ESP32",
    "FPGA",
    "Verilog HDL",
    "Real-Time Systems",
    "V2V Autonomous Vehicle Control",
    "Edge Computing",
    "MATLAB Simulink",
    "Hardware-Software Integration",
  ],
  authors: [{ name: "Abhishek Ahirrao" }],
  creator: "Abhishek Ahirrao",
  metadataBase: new URL("https://abhishekahirrao.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhishekahirrao.dev",
    title: "Abhishek Ahirrao | Embedded Systems & Electronics",
    description:
      "Electronics & Telecommunication Engineering student focused on Embedded Systems, Embedded C, real-time systems, FPGA/RTL, communication, control and hardware–software integration.",
    siteName: "Abhishek Ahirrao Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Ahirrao | Embedded Systems & Electronics",
    description:
      "Electronics & Telecommunication Engineering student focused on Embedded Systems, Embedded C, real-time systems, FPGA/RTL, communication, control and hardware–software integration.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#06090e] text-[#e6edf3] font-sans antialiased selection:bg-cyan-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
