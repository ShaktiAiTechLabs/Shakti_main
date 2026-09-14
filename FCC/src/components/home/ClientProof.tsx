import React from 'react';
import { ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import { ClientPartner } from '../../types/pcb';

interface ClientProofProps {
  clients: ClientPartner[];
  certifications: { name: string; badge: string; fileNo: string; description: string }[];
}

export const ClientProof: React.FC<ClientProofProps> = ({ clients, certifications }) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-substrate-950 border-t border-substrate-800">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase text-circuit-gold tracking-widest">
            TRUSTED DEFENSE & GLOBAL TIER-1 PARTNERS
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Supplying World-Class Electronics Leaders
          </h2>
          <p className="text-xs text-slate-400">
            Exporting high-reliability circuit boards to North American, European, and Indian public & private sectors.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {clients.map((c, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-substrate-900/50 border border-substrate-800 hover:border-circuit-gold/40 transition-all flex flex-col items-center justify-center text-center group"
            >
              <div className="h-12 w-full flex items-center justify-center p-2 filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300">
                <img 
                  src={c.logo} 
                  alt={c.name} 
                  className="max-h-9 max-w-[140px] object-contain opacity-75 group-hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    // Fallback to text mark if local file not found
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="text-xs font-bold text-slate-300 tracking-wide font-mono hidden">
                  {c.name}
                </span>
              </div>
              <div className="mt-2 text-[11px] font-mono text-slate-400 group-hover:text-circuit-gold transition-colors">
                {c.name}
              </div>
              <span className="text-[10px] text-slate-500 font-mono">
                {c.sector}
              </span>
            </div>
          ))}
        </div>

        {/* Certifications Highlight Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-substrate-800/80">
          {certifications.map((cert, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-substrate-900 border border-substrate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-circuit-gold text-xs font-mono font-bold">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>{cert.badge}</span>
              </div>
              <div className="text-[11px] font-mono text-slate-400">
                {cert.fileNo}
              </div>
              <p className="text-[11px] text-slate-500 leading-snug">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
