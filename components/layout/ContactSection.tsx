"use client";

import { profileData, socialsData } from "@/data/socials";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ShinyText from "@/components/ShinyText";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactSection() {
  const emailAddress =
    socialsData.find((s) => s.name === "Email")?.username ??
    "sajidtech71.sk@gmail.com";
  const emailUrl =
    socialsData.find((s) => s.name === "Email")?.url ??
    "mailto:sajidtech71.sk@gmail.com";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "warning";
    message: string;
  } | null>(null);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setStatus(null);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Check if configuration is set up
    if (
      !serviceId ||
      !templateId ||
      !publicKey ||
      serviceId === "your_service_id" ||
      templateId === "your_template_id" ||
      publicKey === "your_public_key"
    ) {
      setStatus({
        type: "warning",
        message:
          "EmailJS is not fully configured yet. Please configure NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in your .env.local file.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Sajid Khan",
        },
        publicKey
      );

      if (result.status === 200) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again or email me directly at " + emailAddress,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
        {/* Contact Info Card */}
        <div className="md:col-span-1 border border-white/6 bg-[#121214] rounded-[20px] p-6 flex flex-col justify-between min-h-[220px]">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-heading flex items-center gap-2">
                <Mail className="size-4 text-purple-400" />
                Email
              </h3>
              <a
                href={emailUrl}
                className="text-xs text-muted-foreground hover:text-purple-400 transition-colors block break-all font-mono"
              >
                {emailAddress}
              </a>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-heading flex items-center gap-2">
                <MapPin className="size-4 text-purple-400" />
                Location
              </h3>
              <p className="text-xs text-muted-foreground">
                {profileData.location}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="md:col-span-2 border border-white/[0.06] bg-[#121214] rounded-[20px] p-6 flex flex-col justify-between">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider font-heading">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full bg-[#1c1c1e] border ${
                    errors.name ? "border-red-500/50" : "border-white/5"
                  } rounded-xl px-3 py-2.5 text-xs text-white placeholder-muted-foreground/30 focus:outline-none focus:border-purple-500/50 transition-colors`}
                />
                {errors.name && (
                  <span className="text-[10px] text-red-400 block mt-0.5 pl-1">
                    {errors.name}
                  </span>
                )}
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider font-heading">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`w-full bg-[#1c1c1e] border ${
                    errors.email ? "border-red-500/50" : "border-white/5"
                  } rounded-xl px-3 py-2.5 text-xs text-white placeholder-muted-foreground/30 focus:outline-none focus:border-purple-500/50 transition-colors`}
                />
                {errors.email && (
                  <span className="text-[10px] text-red-400 block mt-0.5 pl-1">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider font-heading">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Hi there, I'd love to connect..."
                className={`w-full bg-[#1c1c1e] border ${
                  errors.message ? "border-red-500/50" : "border-white/5"
                } rounded-xl px-3 py-2.5 text-xs text-white placeholder-muted-foreground/30 focus:outline-none focus:border-purple-500/50 transition-colors resize-none`}
              />
              {errors.message && (
                <span className="text-[10px] text-red-400 block mt-0.5 pl-1">
                  {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-black font-semibold text-xs py-3 rounded-xl hover:bg-neutral-200 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="size-3.5 animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="size-3.5" />
                  Send Message
                </>
              )}
            </button>
          </form>

          {/* Status Message Panel */}
          <AnimatePresence>
            {status && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className={`mt-4 p-4 rounded-xl border flex gap-3 text-xs ${
                  status.type === "success"
                    ? "bg-emerald-500/5 border-emerald-500/20 text-emerald-400"
                    : status.type === "warning"
                    ? "bg-amber-500/5 border-amber-500/20 text-amber-400"
                    : "bg-red-500/5 border-red-500/20 text-red-400"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle2 className="size-4.5 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="size-4.5 shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="font-semibold uppercase tracking-wider text-[10px]">
                    {status.type === "success"
                      ? "Success"
                      : status.type === "warning"
                      ? "Configuration Required"
                      : "Error"}
                  </p>
                  <p className="mt-0.5 leading-relaxed">{status.message}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
