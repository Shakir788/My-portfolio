"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { staggerContainer, fadeInUp } from "@/components/animations";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Form clear
        setTimeout(() => setStatus("idle"), 3000); // Reset state after 3s
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="glass-card p-8 md:p-12 border border-white/10"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Let&apos;s Build <span className="text-gradient">Together</span>
          </h2>
          <p className="text-white/60">Have a project in mind? Let's architect it.</p>
        </motion.div>

        <motion.form variants={fadeInUp} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder="Name" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-accent-blue transition-colors" 
            />
            <input 
              type="email" 
              placeholder="Email" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-accent-blue transition-colors" 
            />
          </div>
          <textarea 
            placeholder="Tell me about your project..." 
            rows={5} 
            required 
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-accent-blue transition-colors" 
          />
          
          <button 
            type="submit" 
            disabled={status === "sending"}
            className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
              status === "success" ? "bg-emerald-500/20 text-emerald-500 border border-emerald-500/50" : 
              status === "error" ? "bg-red-500/20 text-red-500 border border-red-500/50" : 
              "bg-accent-blue text-white hover:bg-accent-blue/90"
            }`}
          >
            {status === "sending" && <><Loader2 size={18} className="animate-spin" /> Sending...</>}
            {status === "success" && <><CheckCircle size={18} /> Message Sent!</>}
            {status === "error" && <><AlertCircle size={18} /> Something went wrong</>}
            {status === "idle" && <><Send size={18} /> Send Inquiry</>}
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}