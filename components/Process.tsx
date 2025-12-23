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
    <section id="process" className="relative z-10 py-12 md:py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-center text-2xl font-medium tracking-tight mb-10 md:mb-16">Our Development Process</h2>

      <div className="relative">
        {/* Connecting Line - Hidden on mobile, visible on desktop */}
        <div className="hidden md:block absolute left-1/2 -ml-[1px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent"></div>

        <div className="space-y-8 md:space-y-12">
          {steps.map((step, index) => {
            const isLeft = step.position === 'left';
            const colors = [
              { border: 'border-indigo-500/50', dot: 'bg-indigo-400', shadow: 'shadow-[0_0_15px_rgba(99,102,241,0.3)]' },
              { border: 'border-white/10 group-hover:border-purple-500/50', dot: 'bg-neutral-600 group-hover:bg-purple-400' },
              { border: 'border-white/10 group-hover:border-cyan-500/50', dot: 'bg-neutral-600 group-hover:bg-cyan-400' }
            ];
            const color = colors[index];

            return (
              <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 group">
                {/* Mobile Layout - Simple vertical stack */}
                <div className="w-full md:hidden flex items-start gap-4">
                  <div className={`w-8 h-8 rounded-full bg-black border ${color.border} flex items-center justify-center flex-shrink-0 ${color.shadow || ''}`}>
                    <div className={`w-2 h-2 ${color.dot} rounded-full transition-colors`}></div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-medium text-white">{step.title}</h3>
                    <p className="text-sm text-neutral-500 mt-2 font-light">{step.description}</p>
                  </div>
                </div>

                {/* Desktop Layout - Alternating sides */}
                {isLeft ? (
                  <>
                    <div className="hidden md:block md:w-1/2 md:text-right md:pr-12">
                      <h3 className="text-lg font-medium text-white">{step.title}</h3>
                      <p className="text-sm text-neutral-500 mt-2 font-light">{step.description}</p>
                    </div>
                    <div className="hidden md:flex md:w-8 md:h-8 items-center justify-center">
                      <div className={`w-8 h-8 rounded-full bg-black border ${color.border} flex items-center justify-center z-10 ${color.shadow || ''}`}>
                        <div className={`w-2 h-2 ${color.dot} rounded-full transition-colors`}></div>
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/2 md:pl-12"></div>
                  </>
                ) : (
                  <>
                    <div className="hidden md:block md:w-1/2 md:pr-12"></div>
                    <div className="hidden md:flex md:w-8 md:h-8 items-center justify-center">
                      <div className={`w-8 h-8 rounded-full bg-black border ${color.border} flex items-center justify-center z-10 transition-colors`}>
                        <div className={`w-2 h-2 ${color.dot} rounded-full transition-colors`}></div>
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/2 md:pl-12">
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

