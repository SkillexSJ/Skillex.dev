"use client";

import { educationData, type Certificate } from "@/data/education";
import { motion } from "framer-motion";
import ShinyText from "@/components/ShinyText";
import {
  GraduationCap,
  Calendar,
  ExternalLink,
  Award,
  BookOpen,
  Loader2,
} from "lucide-react";
import { useState } from "react";

function CertificateCard({ cert }: { cert: Certificate }) {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="group relative border border-white/[0.06] bg-[#161618] rounded-2xl overflow-hidden transition-all duration-300 hover:border-purple-500/20 hover:shadow-[0_0_24px_-6px_rgba(168,85,247,0.12)]">
      {/* Certificate Image Preview */}
      {cert.imageUrl && !imgError && (
        <div className="relative w-full aspect-[16/10] bg-[#0e0e10] overflow-hidden border-b border-white/[0.04]">
          {!imgLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="size-5 text-muted-foreground/40 animate-spin" />
            </div>
          )}
          <img
            src={cert.imageUrl}
            alt={cert.title}
            className={`w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-[1.03] ${
              imgLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#161618] via-transparent to-transparent opacity-60" />
        </div>
      )}

      {/* Fallback icon when no image */}
      {(!cert.imageUrl || imgError) && (
        <div className="w-full aspect-[16/7] bg-gradient-to-br from-purple-500/[0.06] to-cyan-500/[0.04] flex items-center justify-center border-b border-white/[0.04]">
          <Award className="size-10 text-purple-500/30" />
        </div>
      )}

      {/* Card Body */}
      <div className="p-4 flex flex-col gap-2">
        <h4 className="text-sm font-bold text-white leading-tight line-clamp-2">
          {cert.title}
        </h4>
        <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
          <span className="font-semibold">{cert.issuer}</span>
          <span className="text-white/10">·</span>
          <span>{cert.date}</span>
        </div>

        {/* Actions */}
        {cert.credentialUrl && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-1.5 text-[11px] font-semibold text-purple-400/80 hover:text-purple-300 transition-colors"
          >
            <ExternalLink className="size-3" />
            View Credential
          </a>
        )}
      </div>
    </div>
  );
}

export function EducationSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="space-y-8 max-w-5xl mx-auto py-4"
    >
      {/* Header */}
      <div className="space-y-1">
        <span className="text-[11px] font-bold text-primary uppercase tracking-wider">
          Academics
        </span>
        <h2 className="text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] font-black uppercase tracking-tighter leading-none font-heading block">
          <ShinyText
            text="EDUCATION"
            color="#a855f7"
            shineColor="#ffffff"
          />
        </h2>
        <p className="text-sm text-muted-foreground mt-2">
          My academic background, courses, and earned certifications.
        </p>
      </div>

      {/* Education Cards */}
      <div className="flex flex-col gap-6">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
            className="border border-white/[0.06] bg-[#121214] rounded-[20px] p-6 relative flex flex-col gap-4"
          >
            {/* Status indicator dot */}
            {edu.status === "in-progress" && (
              <div className="absolute top-6 right-6">
                <span className="relative flex size-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full size-2.5 bg-emerald-500" />
                </span>
              </div>
            )}

            <div className="flex flex-wrap justify-between items-start gap-2 pr-8">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex items-center justify-center size-9 rounded-xl bg-purple-500/[0.08] border border-purple-500/10 shrink-0">
                  <GraduationCap className="size-4.5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {edu.degree}
                  </h3>
                  <span className="text-xs text-muted-foreground font-semibold">
                    {edu.institution}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <span className="inline-flex items-center gap-1.5 text-[10px] text-muted-foreground bg-[#1c1c1e] border border-white/5 px-2.5 py-1 rounded-md font-semibold">
                <Calendar className="size-3" />
                {edu.startDate} – {edu.endDate}
              </span>
              {edu.status === "in-progress" && (
                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1 rounded-md bg-emerald-500/[0.08] border border-emerald-500/15 text-emerald-400">
                  <BookOpen className="size-3" />
                  In Progress
                </span>
              )}
              {edu.status === "completed" && (
                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1 rounded-md bg-blue-500/[0.08] border border-blue-500/15 text-blue-400">
                  Completed
                </span>
              )}
            </div>

            {edu.description && (
              <p className="text-xs text-muted-foreground leading-relaxed">
                {edu.description}
              </p>
            )}

            {/* Certificates attached to this education */}
            {edu.certificates && edu.certificates.length > 0 && (
              <div className="mt-2 space-y-3">
                <h4 className="text-[11px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="size-3 text-purple-400" />
                  Certificates
                </h4>
                <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
                  {edu.certificates.map((cert) => (
                    <CertificateCard key={cert.id} cert={cert} />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
