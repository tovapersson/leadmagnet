/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Lock, Mail, ArrowRight, CheckCircle2, Zap, Database, Cpu } from "lucide-react";
import { useState, FormEvent } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] selection:bg-[#B22222] selection:text-white">
      {/* Navigation / Header */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center border-b border-black/5">
        <div className="text-xl font-bold tracking-tighter uppercase">Tova Persson</div>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest opacity-60">
          <span>Portfolio</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-6 pt-24 pb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="serif-display text-6xl md:text-8xl font-light leading-[0.9] tracking-tight mb-8">
              The <span className="text-[#B22222] italic">Andromeda</span> <br /> Architect
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed text-black/70 mb-12">
              Stop paying employees to scroll TikTok manually. 
              Learn how to automate your research using data scrapers and AI Studio to build your next viral post in seconds.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="#signup" className="bg-[#1A1A1A] text-white px-10 py-4 rounded-full font-medium tracking-wide hover:bg-[#B22222] transition-colors duration-300 flex items-center gap-2">
                Unlock the System <ArrowRight size={18} />
              </a>
              <span className="text-xs uppercase tracking-widest font-semibold opacity-40">Free for a limited time</span>
            </div>
          </motion.div>
        </section>

        {/* The System Section */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-black/5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Step 01 - Visible */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-8 bg-white border border-black/5 rounded-3xl shadow-sm"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#B22222] text-white rounded-full flex items-center justify-center font-bold text-xl serif-display italic">
                01
              </div>
              <div className="mb-6 text-[#B22222]">
                <Database size={32} />
              </div>
              <h3 className="serif-display text-3xl font-medium mb-4">The Scraper Setup</h3>
              <p className="text-black/60 leading-relaxed mb-6">
                Extract high-performing hooks directly from your competitors. We use custom-built scrapers to pull raw engagement data and transcriptions from trending videos.
              </p>
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden border border-black/5 group cursor-pointer">
                <img 
                  src="https://picsum.photos/seed/scraper/800/450" 
                  alt="Scraper UI" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Step 02 - Locked */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative p-8 bg-white border border-black/5 rounded-3xl shadow-sm overflow-hidden group"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-black/20 text-white rounded-full flex items-center justify-center font-bold text-xl serif-display italic">
                02
              </div>
              
              {/* Locked Overlay */}
              <div className="absolute inset-0 z-10 glass-blur flex flex-col items-center justify-center p-8 text-center bg-white/40">
                <div className="w-16 h-16 bg-[#B22222] rounded-full flex items-center justify-center text-white mb-4 shadow-lg shadow-[#B22222]/20">
                  <Lock size={28} />
                </div>
                <h4 className="serif-display text-2xl font-medium mb-2">Locked Content</h4>
                <p className="text-sm font-medium uppercase tracking-widest opacity-60">Subscribe to unlock</p>
              </div>

              <div className="mb-6 opacity-20">
                <Cpu size={32} />
              </div>
              <h3 className="serif-display text-3xl font-medium mb-4 opacity-20">The Transformer Prompt</h3>
              <p className="text-black/60 leading-relaxed mb-6 opacity-20">
                My hidden master prompt for AI Studio. It doesn't just rewrite; it deconstructs the psychological triggers of the original post and rebuilds them for your niche.
              </p>
              <div className="h-32 bg-gray-100 rounded-xl opacity-20"></div>
            </motion.div>

            {/* Step 03 - Locked */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative p-8 bg-white border border-black/5 rounded-3xl shadow-sm overflow-hidden"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-black/20 text-white rounded-full flex items-center justify-center font-bold text-xl serif-display italic">
                03
              </div>

              {/* Locked Overlay */}
              <div className="absolute inset-0 z-10 glass-blur flex flex-col items-center justify-center p-8 text-center bg-white/40">
                <div className="w-16 h-16 bg-[#B22222] rounded-full flex items-center justify-center text-white mb-4 shadow-lg shadow-[#B22222]/20">
                  <Lock size={28} />
                </div>
                <h4 className="serif-display text-2xl font-medium mb-2">Locked Content</h4>
                <p className="text-sm font-medium uppercase tracking-widest opacity-60">Subscribe to unlock</p>
              </div>

              <div className="mb-6 opacity-20">
                <Zap size={32} />
              </div>
              <h3 className="serif-display text-3xl font-medium mb-4 opacity-20">The Automation Workflow</h3>
              <p className="text-black/60 leading-relaxed mb-6 opacity-20">
                Connecting Google Sheets to LinkedIn and Twitter. A zero-touch system that populates your content calendar while you sleep.
              </p>
              <div className="h-32 bg-gray-100 rounded-xl opacity-20"></div>
            </motion.div>

          </div>
        </section>

        {/* Sign Up Section */}
        <section id="signup" className="max-w-4xl mx-auto px-6 py-32 text-center">
          <div className="bg-[#1A1A1A] text-white p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B22222] opacity-10 blur-[100px] -mr-32 -mt-32"></div>
            
            <h2 className="serif-display text-4xl md:text-6xl font-light mb-8 relative z-10">
              Ready to <span className="italic text-[#B22222]">automate</span> <br className="hidden md:block" /> your growth?
            </h2>
            
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto relative z-10">
                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                    <input 
                      type="email" 
                      required
                      placeholder="Enter your professional email" 
                      className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 focus:outline-none focus:border-[#B22222] transition-colors"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-[#B22222] hover:bg-[#901c1c] text-white py-4 rounded-full font-bold uppercase tracking-widest transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? "Processing..." : "Unlock the System"}
                  </button>
                </div>
                <p className="mt-6 text-xs text-white/40 uppercase tracking-widest">
                  No spam. Just the system. Unsubscribe anytime.
                </p>
              </form>
            ) : (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center gap-4 relative z-10"
              >
                <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white mb-4">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="serif-display text-3xl">Check your inbox!</h3>
                <p className="text-white/60">The Andromeda Architect is on its way to you.</p>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xs uppercase tracking-[0.3em] font-bold opacity-40">
          © 2026 Tova Persson — Growth Systems
        </div>
        <div className="flex gap-8 text-xs uppercase tracking-widest font-bold opacity-40">
          <a href="#" className="hover:text-[#B22222] transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-[#B22222] transition-colors">Twitter</a>
          <a href="#" className="hover:text-[#B22222] transition-colors">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
