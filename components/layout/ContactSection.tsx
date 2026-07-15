import { profileData, socialsData } from "@/data/socials";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ShinyText from "@/components/ShinyText";

export function ContactSection() {
  const emailAddress =
    socialsData.find((s) => s.name === "Email")?.username ??
    "sajidtech71.sk@gmail.com";
  const emailUrl =
    socialsData.find((s) => s.name === "Email")?.url ??
    "sajidtech71.sk@gmail.com";
  // const githubUrl =
  //   socialsData.find((s) => s.name === "GitHub")?.url ?? "https://github.com";
  // const linkedinUrl =
  //   socialsData.find((s) => s.name === "LinkedIn")?.url ??
  //   "https://linkedin.com";

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
          Contact
        </span>
        <h2 className="text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] font-black uppercase tracking-tighter leading-none font-heading block">
          <ShinyText text="GET IN TOUCH" color="#a855f7" shineColor="#ffffff" />
        </h2>
        <p className="text-sm text-muted-foreground mt-2">
          Feel free to reach out for work, collaborations, or just a quick chat.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1 border border-white/6 bg-[#121214] rounded-[20px] p-6 flex flex-col justify-between min-h-[220px]">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
                Email
              </h3>
              <Link
                href={emailUrl}
                className="text-xs text-muted-foreground hover:text-white transition-colors"
              >
                {emailAddress}
              </Link>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
                Location
              </h3>
              <p className="text-xs text-muted-foreground">
                {profileData.location}
              </p>
            </div>
          </div>
          {/* <div className="flex gap-4 pt-4 border-t border-white/5">
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-white transition-colors font-semibold"
            >
              GitHub
            </Link>
            <Link
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-white transition-colors font-semibold"
            >
              LinkedIn
            </Link>
          </div> */}
        </div>

        <div className="md:col-span-2 border border-white/[0.06] bg-[#121214] rounded-[20px] p-6">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider font-heading">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-[#1c1c1e] border border-white/5 rounded-xl px-3 py-2 text-xs text-white placeholder-muted-foreground/50 focus:outline-none focus:border-white/10"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider font-heading">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-[#1c1c1e] border border-white/5 rounded-xl px-3 py-2 text-xs text-white placeholder-muted-foreground/50 focus:outline-none focus:border-white/10"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider font-heading">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Hi there..."
                className="w-full bg-[#1c1c1e] border border-white/5 rounded-xl px-3 py-2 text-xs text-white placeholder-muted-foreground/50 focus:outline-none focus:border-white/10 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black font-semibold text-xs py-2.5 rounded-xl hover:bg-neutral-200 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
