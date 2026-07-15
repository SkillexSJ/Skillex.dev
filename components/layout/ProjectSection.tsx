import { motion, AnimatePresence } from "framer-motion";
import { Modal, ModalBody, ModalContent, useModal } from "../ui/animated-modal";
import { ProjectDetailsModalContent } from "../shared/ProjectDetailsModalContent";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import ShinyText from "@/components/ShinyText";

function ProjectCardWrapper({
  project,
}: {
  project: (typeof projectsData)[0];
}) {
  const { setOpen } = useModal();
  return (
    <div
      onClick={() => setOpen(true)}
      className="group relative flex flex-col justify-between border border-border/40 bg-card rounded-[24px] overflow-hidden cursor-pointer h-[320px] transition-all duration-500 hover:border-primary/45 hover:-translate-y-1.5 shadow-md hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
    >
      {/* Background Image: Shown clearly by default, dims and blurs slightly on hover */}
      {project.image && (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 450px"
            className="object-cover object-top transition-all duration-700 group-hover:scale-105 group-hover:blur-[2px] group-hover:brightness-[0.25]"
          />
          {/* Subtle gradient overlay to make title readable, darkens on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-all duration-500 group-hover:from-black/95 group-hover:via-black/85 group-hover:to-black/50" />
        </div>
      )}

      {/* Card Content Overlay */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-between text-left">
        {/* Top: Category Badge */}
        <div>
          {project.category && (
            <span className="inline-block text-[9px] font-extrabold tracking-wider uppercase bg-primary/20 backdrop-blur-sm text-primary px-2.5 py-0.5 rounded-full border border-primary/30">
              {project.category === "fullstack"
                ? "Full Stack"
                : project.category}
            </span>
          )}
        </div>

        {/* Bottom: Title & Details (revealed via grid height transition on hover) */}
        <div className="space-y-1.5">
          <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors font-heading tracking-wide leading-snug">
            {project.title}
          </h3>

          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
            <div className="overflow-hidden space-y-3">
              <p className="text-xs text-zinc-300 leading-relaxed line-clamp-2 mt-1">
                {project.description}
              </p>

              {/* Tech Stack: Limited to max 5 items */}
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-[9px] font-semibold text-zinc-400 uppercase tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Link */}
              <div className="flex items-center gap-1.5 text-[10px] text-primary font-bold uppercase tracking-wider pt-1">
                <span>Click to view details</span>
                <span className="text-primary group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
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
          Projects
        </span>
        <h2 className="text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] font-black uppercase tracking-tighter leading-none font-heading block">
          <ShinyText
            text="ALL PROJECTS"
            color="#a855f7"
            shineColor="#ffffff"
          />
        </h2>
        <p className="text-sm text-muted-foreground mt-2">
          A detailed collection of projects I have built and worked on.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {projectsData.map((project) => (
          <Modal key={project.id}>
            <ProjectCardWrapper project={project} />
            <ModalBody className="md:max-w-[700px] w-full max-h-[85vh] overflow-y-auto bg-card border-border text-foreground">
              <ModalContent>
                <ProjectDetailsModalContent project={project} />
              </ModalContent>
            </ModalBody>
          </Modal>
        ))}
      </div>
    </motion.div>
  );
}
