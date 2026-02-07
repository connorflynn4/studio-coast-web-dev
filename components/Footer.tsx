
export default function Footer() {
  return (
    <footer
      className="relative z-10 border-t py-12 px-6"
      style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-white footer-logo-dot"></div>
            <span className="text-sm font-medium tracking-widest uppercase text-white">Studio Coast</span>
          </div>
          <p className="text-xs text-neutral-500">© 2026 Studio Coast. Building intelligent web applications.</p>
        </div>

        <div className="flex gap-8">
          <a href="#" className="text-xs text-neutral-400 hover:text-white transition-colors">Twitter</a>
          <a href="#" className="text-xs text-neutral-400 hover:text-white transition-colors">GitHub</a>
          <a href="#" className="text-xs text-neutral-400 hover:text-white transition-colors">Discord</a>
          <a href="#" className="text-xs text-neutral-400 hover:text-white transition-colors">Legal</a>
        </div>
      </div>
    </footer>
  );
}

