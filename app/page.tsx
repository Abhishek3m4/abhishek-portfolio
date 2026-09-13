import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";
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

      {/* Main Content Flow */}
      <main className="flex-1 w-full">
        {/* 1. Cinematic Scroll-Driven 3D Hero Sequence */}
        <Hero />

        {/* 2. Featured Projects: Horizontal Pinned Hanging Rail (5 Flagship Systems) */}
        <FeaturedProjects />

        {/* 3. Engineering Experience: Horizontal Pinned Hanging Rail (Milestones) */}
        <ExperienceSection />

        {/* 4. Engineering Background, Portrait & Technical Pillars */}
        <AboutSection />

        {/* 6. Education: Vertical Hanging Milestone Spine */}
        <EducationSection />

        {/* 7. Technical Competencies Matrix */}
        <SkillsSection />

        {/* 8. Major Achievements & SIH 2025 Win */}
        <AchievementsSection />

        {/* 9. Scholarly Publications */}
        <PublicationsSection />

        {/* 10. Continuous Learning & Professional Certifications */}
        <CertificationsSection />

        {/* 11. Leadership & Space Club Activities */}
        <LeadershipSection />

        {/* 12. Direct Contact & Collaboration */}
        <ContactSection />
      </main>

      {/* Engineering Colophon & Footer */}
      <Footer />
    </div>
  );
}
