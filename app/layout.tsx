import type { Metadata, Viewport } from "next";
import { Oswald, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fontDisplay = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const fontBody = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const fontTech = JetBrains_Mono({
  variable: "--font-tech",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0d12",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Abhishek Ahirrao | Embedded Systems & Electronics Engineer",
  description:
    "Electronics & Telecommunication Engineering student specializing in Embedded Systems, Real-Time Firmware, RTL/FPGA Acceleration, and Autonomous Control Systems.",
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
    "TwinX Digital Twin",
    "MATLAB Simulink",
    "Hardware-Software Integration",
  ],
  authors: [{ name: "Abhishek Ahirrao" }],
  creator: "Abhishek Ahirrao",
  metadataBase: new URL("https://abhishekahirrao.vercel.app"),
  alternates: {
    canonical: "https://abhishekahirrao.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhishekahirrao.vercel.app",
    title: "Abhishek Ahirrao | Embedded Systems & Electronics Engineer",
    description:
      "Electronics & Telecommunication Engineering student specializing in Embedded Systems, Real-Time Firmware, RTL/FPGA Acceleration, and Autonomous Control Systems.",
    siteName: "Abhishek Ahirrao Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Ahirrao | Embedded Systems & Electronics Engineer",
    description:
      "Electronics & Telecommunication Engineering student specializing in Embedded Systems, Real-Time Firmware, RTL/FPGA Acceleration, and Autonomous Control Systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abhishek Ahirrao",
  url: "https://abhishekahirrao.vercel.app",
  jobTitle: "Electronics & Telecommunication Engineering Student",
  description:
    "Electronics & Telecommunication Engineering student at K.K. Wagh Institute of Engineering Education & Research, focusing on Embedded Systems, Real-Time Firmware, and FPGA Digital Logic.",
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "K.K. Wagh Institute of Engineering Education & Research, Nashik",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nashik",
    addressRegion: "Maharashtra",
    addressCountry: "India",
  },
  sameAs: [
    "https://github.com/Abhishek3m4",
    "https://www.linkedin.com/in/abhishek-ahirrao334",
  ],
  knowsAbout: [
    "Embedded Systems",
    "FreeRTOS",
    "ESP32",
    "Verilog HDL",
    "Artix-7 FPGA",
    "MATLAB",
    "Simulink",
    "Autonomous Vehicles",
    "V2V Communication",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontTech.variable} h-full antialiased dark scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0d12] text-[#f2f4f7] font-sans antialiased selection:bg-cyan-950 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
