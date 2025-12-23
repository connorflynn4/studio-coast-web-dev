import { Layout, MessageSquare, Sparkles, Database, Zap, Settings } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'Custom Web Applications',
    description: 'Bespoke web applications tailored to your business needs. Built with modern frameworks and best practices.',
    color: 'indigo'
  },
  {
    icon: MessageSquare,
    title: 'AI Chat Interfaces',
    description: 'Intelligent chatbots and conversational AI integrated into your web applications for enhanced user engagement.',
    color: 'purple'
  },
  {
    icon: Sparkles,
    title: 'Content Generation',
    description: 'AI-powered content creation tools for blogs, product descriptions, and automated content workflows.',
    color: 'cyan'
  },
  {
    icon: Database,
    title: 'API Development',
    description: 'RESTful APIs and GraphQL endpoints with robust database architecture and seamless third-party integrations.',
    color: 'indigo'
  },
  {
    icon: Zap,
    title: 'Process Automation',
    description: 'Automate repetitive tasks and workflows using AI to increase efficiency and reduce manual work.',
    color: 'purple'
  },
  {
    icon: Settings,
    title: 'Maintenance & Support',
    description: 'Ongoing maintenance, updates, monitoring, and technical support to keep your applications running smoothly.',
    color: 'cyan'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative z-10 py-12 md:py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">Our Services</h2>
        <p className="text-neutral-500 text-sm">Comprehensive web development solutions with AI integration.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          const colorClasses = {
            indigo: 'hover:border-indigo-500/50 text-indigo-400',
            purple: 'hover:border-purple-500/50 text-purple-400',
            cyan: 'hover:border-cyan-500/50 text-cyan-400'
          };

          return (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl bg-neutral-900/30 border border-white/10 ${colorClasses[service.color as keyof typeof colorClasses]} transition-all duration-500`}
            >
              <div className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 ${colorClasses[service.color as keyof typeof colorClasses]}`}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">{service.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

