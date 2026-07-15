import { skillsData } from "@/data/skills";
import { TechIcon } from "../shared/TechIcon";
import { motion, AnimatePresence } from "framer-motion";
import ShinyText from "@/components/ShinyText";

export function SkillsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="space-y-8 max-w-5xl mx-auto py-4"
    >
      <div className="space-y-1 text-left">
        <span className="text-[11px] font-bold text-primary uppercase tracking-wider">
          Skills
        </span>
        <h2 className="text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] font-black uppercase tracking-tighter leading-none font-heading block">
          <ShinyText
            text="MY TECH STACK"
            color="#a855f7"
            shineColor="#ffffff"
          />
        </h2>
        <p className="text-sm text-muted-foreground mt-2">
          My expertise and comfort levels with different tools, languages, and frameworks.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {skillsData.map((category) => (
          <div
            key={category.category}
            className="border border-border/50 bg-card rounded-[20px] p-6 flex flex-col gap-4 text-left"
          >
            <div>
              <h3 className="text-lg font-bold text-foreground font-heading tracking-wide">
                {category.category}
              </h3>
              <p className="text-xs text-muted-foreground leading-snug mt-1">
                {category.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center rounded-lg border border-border bg-muted/40 px-2.5 py-1 text-[11px] font-semibold text-foreground/90 hover:bg-muted/70 hover:border-border transition-all cursor-default"
                >
                  <TechIcon
                    name={skill.name}
                    className="size-3.5 mr-1.5 shrink-0"
                  />
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
