"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles, Loader2 } from "lucide-react";
import Image from "next/image";

type Message = { role: 'user' | 'assistant'; content: string };

export function Cortex() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello, I am Cortex. I know everything about Shakir's work. How can I help you?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    const updatedMessages: Message[] = [...messages, { role: 'user', content: userMsg }];
    
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/cortex", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json" // YE ZAROORI THA (400 error fix)
        },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!res.ok) throw new Error("Failed to fetch response");

      const data = await res.json();
      setMessages([...updatedMessages, { role: 'assistant', content: data.reply }]);
    } catch (e) {
      setMessages([...updatedMessages, { role: 'assistant', content: "Apologies, Cortex is currently recalibrating. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-6 w-[360px] h-[500px] glass-card border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col bg-background/80 backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="p-5 border-b border-white/10 flex justify-between items-center bg-white/5">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/20 ring-2 ring-white/5">
                  <Image 
                    src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=100" 
                    alt="Cortex AI"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm tracking-wide text-white">CORTEX</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[10px] text-white/50 uppercase tracking-wider">Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
                <X size={16} className="text-white/60" />
              </button>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`px-4 py-3 rounded-2xl text-sm max-w-[85%] ${
                      m.role === 'user' 
                      ? 'bg-accent-blue text-white rounded-br-none' 
                      : 'bg-white/10 text-white/90 rounded-bl-none border border-white/5'
                    }`}
                  >
                    {m.content}
                  </motion.div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 text-white/50 px-4 py-3 rounded-2xl rounded-bl-none text-xs flex items-center gap-2">
                    <Loader2 size={14} className="animate-spin" /> Cortex is processing...
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-white/5">
              <div className="relative flex items-center">
                <input 
                  value={input} 
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-accent-blue/50 placeholder:text-white/30 transition-all text-white" 
                  placeholder="Ask about projects..." 
                />
                <button 
                  onClick={sendMessage} 
                  disabled={loading}
                  className="absolute right-2 p-2 bg-accent-blue rounded-lg hover:bg-accent-blue/80 transition-colors disabled:opacity-50"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)} 
        className="bg-white text-background p-4 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all z-50"
      >
        <MessageSquare size={24} />
      </motion.button>
    </div>
  );
}