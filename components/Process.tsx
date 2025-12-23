const steps = [
  {
    title: 'Discovery & Design',
    description: 'We understand your requirements, design the architecture, and create wireframes. Planning AI features and user flows.',
    position: 'left'
  },
  {
    title: 'Development & AI Integration',
    description: 'Building your application with modern frameworks. Integrating AI APIs, creating intelligent features, and ensuring seamless user experiences.',
    position: 'right'
  },
  {
    title: 'Testing & Launch',
    description: 'Comprehensive testing, performance optimization, and deployment to production. We handle hosting, monitoring, and ongoing maintenance.',
    position: 'left'
  }
];

export default function Process() {
  return (
    <section id="process" className="relative z-10 py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-center text-2xl font-medium tracking-tight mb-16">Our Development Process</h2>

      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute left-[15px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent md:left-1/2 md:-ml-[1px]"></div>

        <div className="space-y-12">
          {steps.map((step, index) => {
            const isLeft = step.position === 'left';
            const isFirst = index === 0;
            const colors = [
              { border: 'border-indigo-500/50', dot: 'bg-indigo-400', shadow: 'shadow-[0_0_15px_rgba(99,102,241,0.3)]' },
              { border: 'border-white/10 group-hover:border-purple-500/50', dot: 'bg-neutral-600 group-hover:bg-purple-400' },
              { border: 'border-white/10 group-hover:border-cyan-500/50', dot: 'bg-neutral-600 group-hover:bg-cyan-400' }
            ];
            const color = colors[index];

            return (
              <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center gap-6 group">
                {isLeft ? (
                  <>
                    <div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1">
                      <h3 className="text-lg font-medium text-white">{step.title}</h3>
                      <p className="text-sm text-neutral-500 mt-2 font-light">{step.description}</p>
                    </div>
                    <div className="absolute left-0 md:static md:w-8 md:h-8 flex items-center justify-center order-1 md:order-2">
                      <div className={`w-8 h-8 rounded-full bg-black border ${color.border} flex items-center justify-center z-10 ${color.shadow || ''}`}>
                        <div className={`w-2 h-2 ${color.dot} rounded-full transition-colors`}></div>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 order-3"></div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1"></div>
                    <div className="absolute left-0 md:static md:w-8 md:h-8 flex items-center justify-center order-1 md:order-2">
                      <div className={`w-8 h-8 rounded-full bg-black border ${color.border} flex items-center justify-center z-10 transition-colors`}>
                        <div className={`w-2 h-2 ${color.dot} rounded-full transition-colors`}></div>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 order-3 md:order-3">
                      <h3 className="text-lg font-medium text-white">{step.title}</h3>
                      <p className="text-sm text-neutral-500 mt-2 font-light">{step.description}</p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

