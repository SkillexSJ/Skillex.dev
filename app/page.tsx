"use client";

import PillNav from "@/components/pill-nav";
import MagicBento from "@/components/MagicBento";
import { profileData, socialsData } from "@/data/socials";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TechIcon } from "@/components/shared/TechIcon";
import Dock from "@/components/Dock";
import { ProjectsSection } from "@/components/layout/ProjectSection";
import { ContactSection } from "@/components/layout/ContactSection";
import { SkillsSection } from "@/components/layout/SkillSection";
import { ExperienceSection } from "@/components/layout/ExperienceSection";
import { EducationSection } from "@/components/layout/EducationSection";
import { Signature } from "@/components/ui/signature";
import { StaggeredMenu } from "@/components/StaggeredMenu";

const NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "projects" | "skills" | "experience" | "education" | "contact"
  >("overview");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent, item: any) => {
    e.preventDefault();
    const cleanTab = item.href.replace("#", "") as any;
    setActiveTab(cleanTab);
  };

  const dockItems = socialsData.map((social) => ({
    icon: <TechIcon name={social.name} className="size-5.5" />,
    label: social.name,
    onClick: () => {
      if (social.url.startsWith("mailto:")) {
        window.location.href = social.url;
      } else {
        window.open(social.url, "_blank", "noopener,noreferrer");
      }
    },
  }));

  const staggeredItems = NAV_ITEMS.map((item) => ({
    label: item.label,
    ariaLabel: item.label,
    link: item.href,
  }));

  const staggeredSocials = socialsData.map((social) => ({
    label: social.name,
    link: social.url,
  }));

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Desktop Navigation */}
      <div className="hidden md:flex sticky top-0 w-full justify-center pt-6 pb-3 px-4 z-50">
        <PillNav
          logo="/vercel.svg"
          logoAlt={profileData.name}
          items={NAV_ITEMS}
          activeHref={`#${activeTab}`}
          baseColor="var(--card)"
          pillColor="var(--background)"
          pillTextColor="var(--muted-foreground)"
          hoveredPillTextColor="var(--foreground)"
          onClick={handleNavClick}
        />
      </div>

      {/* Mobile Navigation */}
      <div className="block md:hidden fixed top-0 left-0 right-0 z-50 pointer-events-none h-20">
        <StaggeredMenu
          isFixed={true}
          logoUrl="/vercel.svg"
          items={staggeredItems}
          socialItems={staggeredSocials}
          accentColor="#a855f7"
          colors={["#171717", "#a855f7", "#c084fc"]}
          onMenuOpen={() => setIsMenuOpen(true)}
          onMenuClose={() => setIsMenuOpen(false)}
          onItemClick={(e, item) => {
            e.preventDefault();
            const cleanTab = item.link.replace("#", "") as any;
            setActiveTab(cleanTab);
          }}
        />
      </div>

      <main className="flex-1 px-4 py-8 pb-24 sm:px-6 mt-16 md:mt-8">
        <div className="mx-auto max-w-[1400px]">
          <AnimatePresence mode="wait">
            {activeTab === "overview" && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
              >
                <MagicBento
                  textAutoHide={true}
                  enableStars={false}
                  enableBorderGlow={true}
                  enableTilt={false}
                  enableMagnetism={false}
                  clickEffect={false}
                  onProjectsClick={() => setActiveTab("projects")}
                  onExperienceClick={() => setActiveTab("experience")}
                  onSkillsClick={() => setActiveTab("skills")}
                  onContactClick={() => setActiveTab("contact")}
                />
              </motion.div>
            )}

            {activeTab === "projects" && <ProjectsSection key="projects" />}

            {activeTab === "skills" && <SkillsSection key="skills" />}

            {activeTab === "experience" && (
              <ExperienceSection key="experience" />
            )}

            {activeTab === "education" && (
              <EducationSection key="education" />
            )}

            {activeTab === "contact" && <ContactSection key="contact" />}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer with Signature */}
      <footer className="w-full py-16 pb-32 px-4">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center justify-center gap-6">
          <Signature
            text="Sajid"
            color="#a855f7"
            fontSize={120}
            duration={2}
            delay={0.2}
            inView={true}
            once={true}
            className="w-full max-w-[600px]"
          />
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs text-muted-foreground font-sans">
              Built with{" "}
              <span className="text-primary font-semibold">Next.js</span> ·
              Designed & Developed by{" "}
              <span className="text-foreground font-semibold">
                {profileData.name}
              </span>
            </p>
            <p className="text-[10px] text-muted-foreground/50 font-sans">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating social links Dock at the bottom */}
      <div
        className={`fixed bottom-6 left-0 right-0 z-60 flex justify-center pointer-events-none h-20 transition-all duration-300 ${
          isMenuOpen
            ? "opacity-0 pointer-events-none translate-y-4"
            : "opacity-100"
        }`}
      >
        <div className="relative w-full max-w-lg h-full pointer-events-auto flex items-center justify-center">
          <Dock items={dockItems} />
        </div>
      </div>
    </div>
  );
}
