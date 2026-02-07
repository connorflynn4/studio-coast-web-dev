import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center justify-center text-center">
      {/* Badge */}
      <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[10px] md:text-xs font-medium tracking-wide mb-8 animate-fade-in-up">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
        </span>
        BUILDING THE FUTURE OF WEB APPS
      </div>

      <h1 className="text-4xl md:text-7xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-500 max-w-4xl mx-auto mb-6 leading-[1.1]">
        Web applications <br className="hidden md:block" /> powered by AI.
      </h1>

      <p className="text-neutral-400 text-sm md:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light">
        We build intelligent web applications that learn, adapt, and deliver exceptional user experiences. Full-stack development meets cutting-edge AI integration.
      </p>

      {/* Animated Button */}
      <div className="relative group">
        <a
          href="#contact"
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none transition-transform hover:scale-105 active:scale-95 duration-200"
        >
          <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#6366f1_50%,#000000_100%)]"></span>
          <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-black px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl border border-white/10 group-hover:bg-neutral-900/80 transition-colors">
            Start Your Project
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </span>
        </a>
        {/* Glow under button */}
        <div className="absolute inset-0 -z-10 bg-indigo-500/50 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
      </div>
    </section>
  );
}

