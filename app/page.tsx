import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import PublicationsSection from "@/components/PublicationsSection";
import CertificationsSection from "@/components/CertificationsSection";
import LeadershipSection from "@/components/LeadershipSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0d12] text-[#f8fafc]">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Hero with authentic engineering typography & real portrait */}
        <Hero />

        {/* Narrative & 3 Engineering Pillars */}
        <AboutSection />

        {/* Featured Projects: Horizontal Pinned Hanging Rail (5 Flagship Projects) */}
        <FeaturedProjects />

        {/* Experience: Horizontal Pinned Hanging Rail (Milestones) */}
        <ExperienceSection />

        {/* Education: Vertical Hanging Milestone Spine with Campus Asset */}
        <EducationSection />

        {/* Technical Competencies Matrix */}
        <SkillsSection />

        {/* Major Achievements & Competition Wins */}
        <AchievementsSection />

        {/* Scholarly Publications */}
        <PublicationsSection />

        {/* Continuous Learning & Professional Certifications */}
        <CertificationsSection />

        {/* Leadership & Activities */}
        <LeadershipSection />

        {/* Direct Contact & Collaboration */}
        <ContactSection />
      </main>

      {/* Engineering Colophon & Footer */}
      <Footer />
    </div>
  );
}
