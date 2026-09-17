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

const siteTitle =
  "E&TC Embedded Engineer | SIH'25 National Hackathon Winner | Autonomous Systems & AI/ML | Unplugged Hardware Hackathon Winner'26 | Innovator & Builder";

const fullTitle = `Abhishek Ahirrao | ${siteTitle}`;

const siteDescription =
  "I’m an E&TC engineer focused on embedded systems, autonomous technology, and AI/ML. A SIH’25 National Hackathon Winner and Unplugged Hardware Hackathon Winner’26, I build practical engineering solutions through hands-on projects, research, and experimentation. My work spans embedded systems, VLSI, FPGA, intelligent vehicles, and real-world problem solving—turning ideas into functional technology.";

export const metadata: Metadata = {
  title: fullTitle,
  description: siteDescription,
  keywords: [
    "Abhishek Ahirrao",
    "E&TC Embedded Engineer",
    "SIH'25 National Hackathon Winner",
    "Smart India Hackathon Winner 2025",
    "Unplugged Hardware Hackathon Winner'26",
    "Autonomous Systems & AI/ML",
    "Innovator & Builder",
    "Embedded Systems",
    "Electronics Engineering",
    "ENTC",
    "VLSI",
    "FPGA",
    "ESP32",
    "Verilog HDL",
    "Real-Time Systems",
    "Intelligent Vehicles",
    "TwinX Digital Twin",
    "MATLAB Simulink",
    "Hardware-Software Integration",
  ],
  authors: [{ name: "Abhishek Ahirrao" }],
  creator: "Abhishek Ahirrao",
  metadataBase: new URL("https://abhishekahirrao.tech"),
  alternates: {
    canonical: "https://abhishekahirrao.tech",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhishekahirrao.tech",
    title: fullTitle,
    description: siteDescription,
    siteName: "Abhishek Ahirrao Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description: siteDescription,
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
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://abhishekahirrao.tech/#person",
      name: "Abhishek Ahirrao",
      url: "https://abhishekahirrao.tech",
      jobTitle:
        "E&TC Embedded Engineer | SIH'25 National Hackathon Winner | Autonomous Systems & AI/ML | Unplugged Hardware Hackathon Winner'26 | Innovator & Builder",
      description: siteDescription,
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
        "Autonomous Systems",
        "AI/ML",
        "VLSI",
        "FPGA",
        "FreeRTOS",
        "ESP32",
        "Verilog HDL",
        "Artix-7 FPGA",
        "MATLAB",
        "Simulink",
        "Intelligent Vehicles",
        "V2V Communication",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://abhishekahirrao.tech/#website",
      url: "https://abhishekahirrao.tech",
      name: fullTitle,
      description: siteDescription,
      publisher: {
        "@id": "https://abhishekahirrao.tech/#person",
      },
    },
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
