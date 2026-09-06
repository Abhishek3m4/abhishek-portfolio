import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import OtherProjects from "@/components/OtherProjects";
import ExperienceSection from "@/components/ExperienceSection";
import AchievementsSection from "@/components/AchievementsSection";
import PublicationsSection from "@/components/PublicationsSection";
import CertificationsSection from "@/components/CertificationsSection";
import LeadershipSection from "@/components/LeadershipSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#06090e] text-[#e6edf3]">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Hero with interactive hardware-to-system data flow */}
        <Hero />

        {/* Identity, Background & Academic Credentials */}
        <AboutSection />

        {/* Primary Technical Identity (Organized into 6 discrete categories) */}
        <SkillsSection />

        {/* Featured Projects (Prominent V2V Autonomous Control, FPGA Engine, Smart Home) */}
        <FeaturedProjects />

        {/* Other Technical Projects (TwinX, GaganiX, Water Rocket Parametric Optimization) */}
        <OtherProjects />

        {/* Practical Experience & Internships (Bharat Space Education & Team Antariiksh) */}
        <ExperienceSection />

        {/* Honors & Major Hackathon Wins (SIH 2025 National Winner & Unplugged 1st Prize) */}
        <AchievementsSection />

        {/* Scholarly Publications (IJETED & ICITSC 2025) */}
        <PublicationsSection />

        {/* Continuous Learning & Certifications (Completed vs Ongoing) */}
        <CertificationsSection />

        {/* Leadership & Activities (Team Antariiksh, T&P, Techfest) */}
        <LeadershipSection />

        {/* Direct Communication Channels */}
        <ContactSection />
      </main>

      {/* Engineering Footer */}
      <Footer />
    </div>
  );
}
