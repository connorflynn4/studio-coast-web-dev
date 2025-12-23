'use client';

import { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export default function Navbar() {
  const { theme, toggleTheme, mounted } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <>
      <nav 
        className="fixed top-0 w-full z-50 border-b backdrop-blur-md"
        style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--nav-bg)' }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
            <div className="w-5 h-5 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full"></div>
            <span className="text-sm font-medium tracking-widest uppercase text-white">Studio Coast</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 transition-all text-neutral-400 hover:text-white"
              aria-label="Toggle theme"
            >
              {mounted && (theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />)}
            </button>
            <a
              href="#contact"
              className="text-xs font-medium bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-full transition-all text-white"
            >
              Get Started
            </a>
          </div>
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 transition-all text-neutral-400 hover:text-white"
              aria-label="Toggle theme"
            >
              {mounted && (theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />)}
            </button>
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 transition-all text-neutral-400 hover:text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
        onClick={closeMenu}
      >
        <div 
          className={`fixed top-16 left-0 right-0 bottom-0 backdrop-blur-md border-b transition-transform duration-300 ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
          style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--nav-bg)' }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            <div className="flex flex-col px-6 py-8 gap-6">
              <a 
                href="#services" 
                onClick={handleLinkClick}
                className="text-base font-medium text-neutral-400 hover:text-white transition-colors py-2"
              >
                Services
              </a>
              <a 
                href="#capabilities" 
                onClick={handleLinkClick}
                className="text-base font-medium text-neutral-400 hover:text-white transition-colors py-2"
              >
                Capabilities
              </a>
              <a 
                href="#process" 
                onClick={handleLinkClick}
                className="text-base font-medium text-neutral-400 hover:text-white transition-colors py-2"
              >
                Process
              </a>
              <a 
                href="#contact" 
                onClick={handleLinkClick}
                className="text-base font-medium text-neutral-400 hover:text-white transition-colors py-2"
              >
                Contact
              </a>
              <div className="pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="inline-flex text-xs font-medium bg-white/10 hover:bg-white/20 border border-white/10 px-6 py-3 rounded-full transition-all text-white"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

