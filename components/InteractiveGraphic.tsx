import { Check } from 'lucide-react';

export default function InteractiveGraphic() {
  return (
    <section className="relative z-10 py-24 px-6 border-y" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--section-bg)' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-medium tracking-tight mb-6">From concept to launch.</h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-8 font-light">
            We handle every aspect of your web application development. From initial design to AI integration, deployment, and ongoing support.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-sm text-neutral-300">
              <Check className="w-4 h-4 text-indigo-500" />
              <span>Custom UI/UX design and development</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-neutral-300">
              <Check className="w-4 h-4 text-indigo-500" />
              <span>RESTful APIs and database architecture</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-neutral-300">
              <Check className="w-4 h-4 text-indigo-500" />
              <span>AI-powered features and automation</span>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 relative animate-float">
          {/* Abstract UI Representation */}
          <div className="relative rounded-xl bg-neutral-900 border border-white/10 p-4 shadow-2xl overflow-hidden" style={{ backgroundColor: 'var(--card-bg)' }}>
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>

            {/* Header UI */}
            <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
              </div>
              <div className="text-[10px] text-neutral-500 font-mono">STATUS: ONLINE</div>
            </div>

            {/* Graph Area */}
            <div className="flex items-end gap-2 h-32 mb-6 px-2">
              {[40, 70, 50, 85, 60].map((height, index) => (
                <div key={index} className="w-full bg-indigo-500/20 rounded-t-sm relative group" style={{ height: `${height}%` }}>
                  <div className="absolute bottom-0 w-full h-0 group-hover:h-full bg-indigo-500/40 transition-all duration-500"></div>
                </div>
              ))}
            </div>

            {/* Code Snippet */}
            <div className="code-snippet bg-black/50 rounded p-3 font-mono text-[10px] text-neutral-400 border border-white/5">
              <div className="flex justify-between">
                <span className="text-purple-400">const</span>
                <span className="text-neutral-600">v.1.0.4</span>
              </div>
              <div className="mt-1">
                <span className="text-blue-400">deployApp</span>(<span className="text-yellow-400">production</span>);
              </div>
              <div className="mt-1 text-neutral-600">
                // Application deployed successfully...
              </div>
            </div>
          </div>

          {/* Floating Element Behind */}
          <div className="absolute -z-10 -top-6 -right-6 w-full h-full border border-white/5 rounded-xl bg-neutral-900/50" style={{ backgroundColor: 'var(--card-bg)' }}></div>
        </div>
      </div>
    </section>
  );
}

