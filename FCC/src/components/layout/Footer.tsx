import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Cpu, 
  ArrowUpRight, 
  ShieldCheck, 
  Award
} from 'lucide-react';
import { PCBProduct } from '../../types/pcb';

interface FooterProps {
  onNavigate: (tab: string, productId?: string) => void;
  products: PCBProduct[];
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, products }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-substrate-950 border-t border-substrate-800 text-slate-400 font-sans">
      {/* Top Banner: Parent Group Linkage */}
      <div className="border-b border-substrate-800/80 py-6 px-4 md:px-8 bg-substrate-900/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-circuit-gold/15 border border-circuit-gold/30 flex items-center justify-center">
              <span className="font-serif font-bold text-circuit-gold text-sm">S</span>
            </div>
            <div>
              <p className="text-xs text-slate-300 font-medium">
                A Flagship Technology Enterprise of <strong className="text-white">Shakti Group</strong>
              </p>
              <p className="text-[11px] text-slate-500">
                Rooted in India. Focused on Impact. Built for the World.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono">
            <span className="flex items-center gap-1.5 text-circuit-gold">
              <ShieldCheck className="w-4 h-4" />
              100% Export Oriented Unit (EOU)
            </span>
            <span className="flex items-center gap-1.5 text-signal-cyan">
              <Award className="w-4 h-4" />
              UL 94V-0 & ISO 9001:2015
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto py-14 px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Column 1: Company Profile */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <img 
              src="/assets/brand/fcc-logo-darkmode.png" 
              alt="Fine Circuits & Components Pvt. Ltd." 
              className="h-11 w-auto object-contain"
            />
          </div>

          <p className="text-xs text-slate-400 leading-relaxed pr-6">
            Established in 2001, FCC India is a premier 100% Export Oriented Unit (EOU) delivering high-density, high-reliability Printed Circuit Boards. Operating a 60,000 sq. ft. modern fabrication facility with automated CNC, LDI, and cleanroom infrastructure near Vadodara, Gujarat.
          </p>

          <div className="pt-2 flex items-center gap-3">
            <a 
              href="https://www.linkedin.com/company/fineline-circuit-company/" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-lg bg-substrate-850 border border-substrate-700 hover:border-circuit-gold text-slate-300 hover:text-circuit-gold transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.92 0 1.67-.75 1.67-1.67a1.67 1.67 0 0 0-3.34 0c0 .92.75 1.67 1.67 1.67m1.39 9.74v-8.37H5.07v8.37h2.78Z"/>
              </svg>
            </a>
            <span className="text-xs font-mono text-slate-500">
              CAGE / DUNS Registered Global Vendor
            </span>
          </div>
        </div>

        {/* Column 2: PCB Offerings */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold mb-4 border-l-2 border-circuit-gold pl-2.5">
            PCB Solutions
          </h4>
          <ul className="space-y-2 text-xs">
            {products.map((prod) => (
              <li key={prod.id}>
                <button
                  onClick={() => onNavigate('products', prod.id)}
                  className="hover:text-circuit-gold transition-colors text-left text-slate-400 hover:underline"
                >
                  {prod.name}
                </button>
              </li>
            ))}
            <li>
              <button 
                onClick={() => onNavigate('equipment')} 
                className="text-circuit-gold hover:underline flex items-center gap-1 pt-1 font-mono text-[11px]"
              >
                <span>Full DFM Spec Sheet</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Quick Navigation */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold mb-4 border-l-2 border-circuit-gold pl-2.5">
            Company & Tech
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => onNavigate('about')} className="hover:text-circuit-gold transition-colors">
                About Company
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('journey')} className="hover:text-circuit-gold transition-colors">
                2001–2027 Timeline
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('equipment')} className="hover:text-circuit-gold transition-colors">
                Plant Machinery & Cleanrooms
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('events')} className="hover:text-circuit-gold transition-colors">
                Safety & Events
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('career')} className="hover:text-circuit-gold transition-colors">
                Careers & Openings
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('blogs')} className="hover:text-circuit-gold transition-colors">
                Technical Knowledge Hub
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('contact')} className="hover:text-circuit-gold transition-colors">
                Contact Engineering
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Locations */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold mb-4 border-l-2 border-circuit-gold pl-2.5">
            Plant & Offices
          </h4>
          <div className="space-y-3 text-xs">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-circuit-gold shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-200 block">Manufacturing Plant:</strong>
                <span>Plot No. E/8, EPIE, GIDC Manjusar, Taluka Savli, Dist. Vadodara - 391775, Gujarat, India</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Globe className="w-4 h-4 text-signal-cyan shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-200 block">North America Operations:</strong>
                <span>FCC Electronics, Elk Grove Village, Illinois, USA</span>
              </div>
            </div>

            <div className="pt-2 border-t border-substrate-800 space-y-1 font-mono text-[11px]">
              <div>Phone: <a href="tel:+919998972055" className="text-circuit-gold hover:underline">+91 9998972055</a></div>
              <div>Sales: <a href="mailto:fcc.sales@fccindia.com" className="text-circuit-gold hover:underline">fcc.sales@fccindia.com</a></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Copyright */}
      <div className="border-t border-substrate-800/80 py-5 px-4 md:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Fine Circuits and Components Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>IPC Member</span>
            <span>UL 94V-0 (E240897)</span>
            <span>ISO 9001:2015</span>
            <button 
              onClick={scrollToTop} 
              className="text-circuit-gold hover:underline font-mono text-xs"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
