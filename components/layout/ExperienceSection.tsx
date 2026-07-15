import { experienceData } from "@/data/experience";
import { motion, AnimatePresence } from "framer-motion";
import ShinyText from "@/components/ShinyText";

export function ExperienceSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="space-y-8 max-w-5xl mx-auto py-4"
    >
      <div className="space-y-1">
        <span className="text-[11px] font-bold text-primary uppercase tracking-wider">
          Timeline
        </span>
        <h2 className="text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] font-black uppercase tracking-tighter leading-none font-heading block">
          <ShinyText
            text="WORK HISTORY"
            color="#a855f7"
            shineColor="#ffffff"
          />
        </h2>
        <p className="text-sm text-muted-foreground mt-2">
          My career journey, key achievements, and roles over the years.
        </p>
      </div>

      <div className="flex flex-col gap-6 relative">
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            className="border border-white/[0.06] bg-[#121214] rounded-[20px] p-6 relative flex flex-col gap-4"
          >
            <div className="flex flex-wrap justify-between items-start gap-2">
              <div>
                <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                <span className="text-xs text-muted-foreground font-semibold">
                  {exp.company} • {exp.type}
                </span>
              </div>
              <span className="text-[10px] text-muted-foreground whitespace-nowrap bg-[#1c1c1e] border border-white/5 px-2.5 py-1 rounded-md font-semibold">
                {exp.startDate} - {exp.endDate}
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {exp.description}
            </p>
            {exp.achievements && exp.achievements.length > 0 && (
              <div className="space-y-1.5">
                <h4 className="text-[11px] font-bold text-white uppercase tracking-wider">
                  Key Achievements
                </h4>
                <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {exp.techUsed.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-[#1c1c1e] border border-white/5 px-2.5 py-0.5 text-[9px] font-semibold text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
