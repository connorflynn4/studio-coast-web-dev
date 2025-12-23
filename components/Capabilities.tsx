import { Code, BrainCircuit, Cloud } from 'lucide-react';

const capabilities = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Modern web applications built with React, Next.js, Node.js, and cloud infrastructure. Responsive, performant, and scalable.',
    color: 'indigo'
  },
  {
    icon: BrainCircuit,
    title: 'AI Integration',
    description: 'Seamlessly integrate GPT, Claude, and custom models into your web apps. Chat interfaces, content generation, and intelligent automation.',
    color: 'purple'
  },
  {
    icon: Cloud,
    title: 'Cloud Deployment',
    description: 'Deploy to AWS, Vercel, or your preferred platform. CI/CD pipelines, monitoring, and maintenance included.',
    color: 'cyan'
  }
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative z-10 py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">What We Build</h2>
        <p className="text-neutral-500 text-sm">Full-stack web applications with intelligent features.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {capabilities.map((capability, index) => {
          const Icon = capability.icon;
          const gradientClasses = {
            indigo: 'from-indigo-500/10',
            purple: 'from-purple-500/10',
            cyan: 'from-cyan-500/10'
          };
          const borderClasses = {
            indigo: 'hover:border-indigo-500/50',
            purple: 'hover:border-purple-500/50',
            cyan: 'hover:border-cyan-500/50'
          };
          const iconClasses = {
            indigo: 'text-indigo-400',
            purple: 'text-purple-400',
            cyan: 'text-cyan-400'
          };

          return (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-neutral-900/30 border border-white/10 ${borderClasses[capability.color as keyof typeof borderClasses]} transition-all duration-500 overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${gradientClasses[capability.color as keyof typeof gradientClasses]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative z-10">
                <div className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 ${iconClasses[capability.color as keyof typeof iconClasses]}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{capability.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                  {capability.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

