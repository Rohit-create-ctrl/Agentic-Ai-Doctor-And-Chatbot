'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Stethoscope, MessageSquare, FileText, Pill, 
  LayoutDashboard, Phone, Menu, X, Heart
} from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home', icon: Heart },
  { href: '/chat', label: 'AI Doctor', icon: MessageSquare },
  { href: '/prescription', label: 'Prescription', icon: FileText },
  { href: '/medicine', label: 'Medicine', icon: Pill },
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/emergency', label: 'Emergency', icon: Phone },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center shadow-lg shadow-sky-500/20 group-hover:shadow-sky-500/40 transition-all duration-300">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-900 animate-pulse" />
            </div>
            <span className="text-xl font-bold gradient-text">MedAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-sky-500/15 text-sky-400 shadow-inner'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  } ${link.href === '/emergency' ? 'text-red-400 hover:text-red-300 hover:bg-red-500/10' : ''}`}
                >
                  <Icon className={`w-4 h-4 ${link.href === '/emergency' && !isActive ? 'text-red-400' : ''}`} />
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-light border-t border-white/5">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-sky-500/15 text-sky-400'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  } ${link.href === '/emergency' ? 'text-red-400' : ''}`}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
