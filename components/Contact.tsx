'use client';

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-24 px-6">
      <div className="max-w-4xl mx-auto rounded-3xl bg-neutral-900/40 border border-white/10 p-8 md:p-12 text-center overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>

        <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 relative z-10">Ready to build something amazing?</h2>
        <p className="text-neutral-400 text-sm md:text-base mb-10 max-w-lg mx-auto font-light relative z-10">
          Let&apos;s discuss your project. We build custom web applications with AI integration for startups and established businesses.
        </p>

        <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto relative z-10">
          <input
            type="email"
            placeholder="Enter your work email"
            className="flex-1 bg-black/50 border border-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all text-sm placeholder:text-neutral-600"
          />
          <button
            type="button"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium text-sm hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Get Started
          </button>
        </form>

        <p className="mt-6 text-xs text-neutral-600 relative z-10">Free consultation. Let&apos;s discuss your project requirements.</p>
      </div>
    </section>
  );
}

