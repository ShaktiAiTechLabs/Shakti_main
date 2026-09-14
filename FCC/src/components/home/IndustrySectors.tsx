import React from 'react';
import { Plane, HeartPulse, Radio, Zap, Music2, ShieldAlert } from 'lucide-react';

export const IndustrySectors: React.FC = () => {
  const sectors = [
    {
      title: 'Defense & Aerospace',
      icon: Plane,
      description: 'Avionics, radar front-ends, missile navigation boards built to IPC Class 3 with strict traceability.',
      metric: 'IPC-6012 Class 3'
    },
    {
      title: 'Medical Devices & Imaging',
      icon: HeartPulse,
      description: 'Patient monitors, diagnostic ultrasound, and telemetry circuits with zero-defect quality standards.',
      metric: 'Zero-Void Plating'
    },
    {
      title: 'Telecommunications & 5G',
      icon: Radio,
      description: 'High-speed backplanes, RF power amplifiers, and optical transceivers with low-loss PTFE substrates.',
      metric: '10 GHz Dk / Df Testing'
    },
    {
      title: 'Industrial & Power Systems',
      icon: Zap,
      description: 'Heavy copper boards (up to 6 oz) for motor inverters, power grids, and EV high-voltage chargers.',
      metric: '6 OZ Heavy Copper'
    },
    {
      title: 'Acoustic & Audio Instruments',
      icon: Music2,
      description: 'Low-noise audio preamplifiers, studio mixing desks, and synthesis hardware with gold contacts.',
      metric: 'High SNR Ground Planes'
    },
    {
      title: 'Automotive & EV Electronics',
      icon: ShieldAlert,
      description: 'Metal-core aluminum boards for high-lux LED headlamps, battery management, and powertrain controllers.',
      metric: 'MCPCB 4.0 W/m-K'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-substrate-950 border-t border-substrate-800">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono uppercase text-circuit-gold tracking-widest">
            ENGINEERING ACROSS SECTORS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Built for Extreme Operating Environments
          </h2>
          <p className="text-slate-400 text-sm">
            Whether in sub-zero aerospace altitudes or high-temperature power electronics, FCC boards deliver unbroken reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-xl bg-substrate-900 border border-substrate-800 hover:border-circuit-gold/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-substrate-850 border border-substrate-700 flex items-center justify-center text-circuit-gold mb-4 group-hover:border-circuit-gold/50 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-circuit-gold transition-colors mb-2">
                    {sec.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {sec.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-substrate-800 text-[11px] font-mono text-circuit-gold">
                  {sec.metric}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
