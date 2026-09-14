import React from 'react';
import { 
  Building2, 
  Target, 
  Compass, 
  Leaf, 
  ShieldCheck, 
  Globe2, 
  CheckCircle2, 
  ArrowRight,
  Clock
} from 'lucide-react';
import { Milestone } from '../../types/pcb';

interface AboutPageProps {
  timeline: Milestone[];
  onOpenRfq: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ timeline, onOpenRfq }) => {
  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-20">
      {/* Header Banner */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-circuit-gold/10 border border-circuit-gold/20 text-xs font-mono text-circuit-gold">
          <Building2 className="w-3.5 h-3.5" />
          <span>CORPORATE PROFILE & HERITAGE</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Precision PCB Partner for High-Stakes Electronics
        </h1>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
          Fine Circuits and Components Private Limited (FCC India) is a 100% Export Oriented Unit (EOU) founded in 2001. From our 60,000 sq. ft. fabrication facility in Vadodara, Gujarat, we supply mission-critical printed circuit boards to world-renowned defense, aerospace, and electronics OEMs.
        </p>
      </div>

      {/* Facilities & North American Division Bento */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-substrate-900 border border-substrate-800 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-circuit-gold/10 border border-circuit-gold/30 flex items-center justify-center text-circuit-gold">
            <Building2 className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">60,000 Sq. Ft. Facility</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Located in the industrial hub of GIDC Manjusar, Savli near Vadodara. Houses Class 10,000 positive-pressure cleanrooms, automated multi-daylight hydraulic presses, and high-speed Schmoll CNC drilling lines.
          </p>
          <span className="text-[11px] font-mono text-circuit-gold block">
            Capacity: 5,000+ sq. meters / month
          </span>
        </div>

        <div className="p-6 rounded-2xl bg-substrate-900 border border-substrate-800 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-signal-cyan/10 border border-signal-cyan/30 flex items-center justify-center text-signal-cyan">
            <Globe2 className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">North America Operations</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Represented in North America by FCC Electronics in Elk Grove Village, Illinois. Providing real-time engineering support, inventory consignment, and localized customer management for US defense and industrial buyers.
          </p>
          <span className="text-[11px] font-mono text-signal-cyan block">
            Elk Grove Village, Illinois, USA
          </span>
        </div>

        <div className="p-6 rounded-2xl bg-substrate-900 border border-substrate-800 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-signal-emerald/10 border border-signal-emerald/30 flex items-center justify-center text-signal-emerald">
            <Leaf className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Shakti Group Pedigree</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            A flagship advanced technology enterprise of the Shakti Group ecosystem. Backed by corporate stability, institutional governance, and an eco-friendly zero-liquid-discharge (ZLD) manufacturing philosophy.
          </p>
          <span className="text-[11px] font-mono text-signal-emerald block">
            Part of Shakti Group
          </span>
        </div>
      </div>

      {/* Vision, Mission, Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-substrate-800">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-circuit-gold font-mono font-bold text-sm">
            <Target className="w-4 h-4" />
            <span>OUR VISION</span>
          </div>
          <h4 className="text-xl font-bold text-white">Global Manufacturing Authority</h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            To become a leading global player in high-density PCB fabrication by championing precision manufacturing, technical innovation, and zero-defect delivery, while expanding strategic market presence across North America and Europe.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-circuit-gold font-mono font-bold text-sm">
            <Compass className="w-4 h-4" />
            <span>OUR MISSION</span>
          </div>
          <h4 className="text-xl font-bold text-white">Zero-Defect Partner</h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            To serve as an indispensable manufacturing partner for mission-critical electronics by delivering reliable, on-time, and cost-effective circuit board solutions tailored to the evolving demands of aerospace, defense, and high-frequency communication.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-circuit-gold font-mono font-bold text-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>CORE VALUES</span>
          </div>
          <h4 className="text-xl font-bold text-white">Integrity & Excellence</h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Uncompromising technical precision, radical customer accountability, transparent engineering communications, and continuous investment in workforce skills and green production practices.
          </p>
        </div>
      </div>

      {/* 2001 - 2027 Complete Interactive Journey Timeline */}
      <div className="pt-12 border-t border-substrate-800 space-y-8">
        <div>
          <span className="text-xs font-mono uppercase text-circuit-gold tracking-widest block mb-1">
            24 YEARS OF TECHNICAL INNOVATION
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Our Journey: 2001 to 2027
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            A chronological roadmap showing our technological milestones and forward-looking capabilities.
          </p>
        </div>

        <div className="relative border-l border-circuit-gold/30 ml-4 md:ml-8 pl-6 md:pl-10 space-y-10">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Dot on line */}
              <div className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 ${
                item.isUpcoming 
                  ? 'bg-signal-cyan border-signal-cyan animate-ping' 
                  : 'bg-circuit-gold border-substrate-950 shadow-[0_0_10px_#668F37]'
              }`}></div>

              <div className="p-5 rounded-xl bg-substrate-900/80 border border-substrate-800 hover:border-circuit-gold/40 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold ${
                    item.isUpcoming 
                      ? 'bg-signal-cyan/20 text-signal-cyan border border-signal-cyan/30' 
                      : 'bg-circuit-gold/10 text-circuit-gold border border-circuit-gold/20'
                  }`}>
                    {item.year}
                  </span>
                  <h4 className="text-base font-bold text-white group-hover:text-circuit-gold transition-colors">
                    {item.title}
                  </h4>
                  {item.isUpcoming && (
                    <span className="text-[10px] font-mono bg-signal-cyan/10 text-signal-cyan px-2 py-0.5 rounded ml-auto">
                      Upcoming Roadmap
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Bar */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-substrate-900 via-substrate-850 to-substrate-900 border border-circuit-gold/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-white">Need custom engineering consultation?</h3>
          <p className="text-xs text-slate-300 mt-1">
            Our CAM and DFM specialists can review your CAD schematics and optimize your panelization.
          </p>
        </div>
        <button
          onClick={onOpenRfq}
          className="shrink-0 px-6 py-3.5 rounded-lg bg-circuit-gold text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-circuit-copper transition-all shadow-[0_0_20px_rgba(102,143,55,0.3)] flex items-center gap-2 active:scale-[0.99]"
        >
          <span>Request Consultation & RFQ</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
