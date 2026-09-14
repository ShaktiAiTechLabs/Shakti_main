import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Cpu, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  ShieldCheck,
  Globe2
} from 'lucide-react';
import { PCBProduct } from '../../types/pcb';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string, productId?: string) => void;
  products: PCBProduct[];
  onOpenRfq: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onNavigate, products, onOpenRfq }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products', hasDropdown: true },
    { id: 'equipment', label: 'Equipment & Labs' },
    { id: 'journey', label: 'Timeline' },
    { id: 'events', label: 'Events' },
    { id: 'career', label: 'Careers' },
    { id: 'blogs', label: 'Technical Hub' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-substrate-950 border-b border-substrate-800/80 text-xs py-2 px-4 md:px-8 text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-circuit-gold font-mono font-medium tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-circuit-gold" />
              100% Export Oriented Unit (EOU) | UL 94V-0 | ISO 9001:2015
            </span>
            <span className="hidden lg:inline text-slate-600">|</span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-400 font-mono">
              <Globe2 className="w-3.5 h-3.5 text-signal-cyan" />
              USA Division: Elk Grove Village, IL
            </span>
          </div>

          <div className="flex items-center gap-5 font-mono">
            <a 
              href="tel:+919998972055" 
              className="inline-flex items-center gap-1.5 hover:text-circuit-gold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-slate-500" />
              <span>+91 9998972055</span>
            </a>
            <a 
              href="mailto:fcc.sales@fccindia.com" 
              className="inline-flex items-center gap-1.5 hover:text-circuit-gold transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-slate-500" />
              <span>fcc.sales@fccindia.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div 
        className={`w-full px-4 md:px-8 transition-all duration-300 ${
          isScrolled 
            ? 'bg-substrate-900/95 backdrop-blur-md border-b border-substrate-700 shadow-2xl py-3' 
            : 'bg-substrate-900/80 backdrop-blur-sm border-b border-substrate-800 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo & Tagline */}
          <button 
            onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
            className="flex items-center gap-3 text-left group"
          >
            <img 
              src="/assets/brand/fcc-logo-darkmode.png" 
              alt="FCC India - Fine Circuits & Components" 
              className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
            <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-circuit-gold/10 text-circuit-gold border border-circuit-gold/30 hidden sm:inline-block">
              EST. 2001
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div 
                    key={item.id} 
                    className="relative"
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    <button
                      onClick={() => onNavigate('products')}
                      className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                        currentTab === 'products'
                          ? 'text-circuit-gold bg-substrate-800'
                          : 'text-slate-300 hover:text-white hover:bg-substrate-850'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Products Mega Dropdown */}
                    {productsDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 p-3 bg-substrate-900 border border-substrate-700 rounded-xl shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                        <div className="text-[11px] font-mono uppercase text-slate-400 px-3 py-1.5 border-b border-substrate-800 mb-1.5 flex justify-between items-center">
                          <span>PCB Architectures</span>
                          <span className="text-circuit-gold">IPC Class 2 & 3</span>
                        </div>
                        {products.map((prod) => (
                          <button
                            key={prod.id}
                            onClick={() => {
                              onNavigate('products', prod.id);
                              setProductsDropdownOpen(false);
                            }}
                            className="w-full text-left p-2.5 rounded-lg hover:bg-substrate-800 transition-all flex items-start gap-3 group/item"
                          >
                            <div className="w-8 h-8 rounded bg-substrate-850 border border-substrate-700 flex items-center justify-center shrink-0 group-hover/item:border-circuit-gold/50">
                              <Cpu className="w-4 h-4 text-circuit-gold" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-slate-200 group-hover/item:text-circuit-gold transition-colors">
                                {prod.name}
                              </div>
                              <div className="text-[11px] text-slate-400 line-clamp-1 font-mono">
                                {prod.layers} • {prod.minLineSpacing}
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentTab === item.id
                      ? 'text-circuit-gold bg-substrate-800'
                      : 'text-slate-300 hover:text-white hover:bg-substrate-850'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Rapid RFQ Call-To-Action */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenRfq}
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg bg-circuit-gold text-slate-950 hover:bg-circuit-copper transition-all shadow-[0_0_20px_rgba(102,143,55,0.3)] hover:shadow-[0_0_25px_rgba(102,143,55,0.5)] active:scale-95"
            >
              <span>Instant RFQ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-substrate-850 border border-substrate-700 text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-substrate-950 border-b border-substrate-700 px-6 py-6 shadow-2xl animate-in slide-in-from-top-4 duration-200 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  currentTab === item.id
                    ? 'text-circuit-gold bg-substrate-800 font-semibold'
                    : 'text-slate-300 hover:bg-substrate-850'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-substrate-800 mt-2">
              <button
                onClick={() => {
                  onOpenRfq();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-circuit-gold text-slate-950 font-bold uppercase tracking-wider text-xs"
              >
                <span>Launch RFQ Configurator</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
