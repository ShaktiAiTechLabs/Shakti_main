import React, { useState } from 'react';
import { SlidersHorizontal, CheckCircle2, Shield, Search, ArrowUpRight } from 'lucide-react';

export const DfmCapabilities: React.FC<{ onOpenRfq: () => void }> = ({ onOpenRfq }) => {
  const [filterClass, setFilterClass] = useState<'all' | 'standard' | 'advanced'>('all');

  const capabilities = [
    {
      category: 'Trace & Spacing',
      parameter: 'Minimum Line Width / Space',
      standard: '4 mil / 4 mil (0.10 mm)',
      advanced: '3 mil / 3 mil (0.075 mm)',
      equipment: 'LDI Laser Direct Imaging'
    },
    {
      category: 'Drill Hole Diameter',
      parameter: 'Minimum Mechanical Finished Hole',
      standard: '0.20 mm (8 mil)',
      advanced: '0.15 mm (6 mil)',
      equipment: 'Schmoll 300k RPM Air-Bearing Spindles'
    },
    {
      category: 'Laser Microvias',
      parameter: 'Blind & Buried Microvia Diameter',
      standard: '0.125 mm (5 mil)',
      advanced: '0.10 mm (4 mil)',
      equipment: 'Laser Direct Drilling & Optical Alignment'
    },
    {
      category: 'Multilayer Stacking',
      parameter: 'Maximum Layer Count',
      standard: '8–12 Layers',
      advanced: '16–20 Layers',
      equipment: 'Multi-Daylight Vacuum Hydraulic Press'
    },
    {
      category: 'Aspect Ratio',
      parameter: 'Board Thickness to Hole Ratio',
      standard: '8:1',
      advanced: '10:1 (Up to 12:1 on request)',
      equipment: 'High-Throw Chemical Copper Plating'
    },
    {
      category: 'Controlled Impedance',
      parameter: 'Single & Differential Tolerance',
      standard: '± 10%',
      advanced: '± 5%',
      equipment: 'Polar Si8000 TDR Coupon Testing'
    },
    {
      category: 'Finished Copper',
      parameter: 'Maximum Heavy Copper Weight',
      standard: '1 oz to 3 oz (105 µm)',
      advanced: '6 oz (210 µm Heavy Cu)',
      equipment: 'Deep Alkaline & Acid Etch Baths'
    },
    {
      category: 'Via Protection',
      parameter: 'Via-in-Pad Plated Over (VIPPO)',
      standard: 'Tenting / Soldermask Plug',
      advanced: 'Vacuum Epoxy Plugg + Ceramic Planar',
      equipment: 'Automated Epoxy Hole Filling Machine'
    },
    {
      category: 'Profile Accuracy',
      parameter: 'CNC Routing & V-Scoring Tolerance',
      standard: '± 0.15 mm',
      advanced: '± 0.075 mm',
      equipment: 'Dual-Head Optical Pinless Routing'
    }
  ];

  const filtered = capabilities.filter(c => {
    if (filterClass === 'standard') return true;
    if (filterClass === 'advanced') return true;
    return true;
  });

  return (
    <section id="dfm-capabilities" className="py-20 px-4 md:px-8 bg-substrate-950 border-t border-substrate-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-substrate-850 border border-circuit-gold/20 text-xs font-mono text-circuit-gold mb-3">
              <Shield className="w-3.5 h-3.5" />
              <span>FABRICATION TOLERANCES & IPC-6012 CLASS 3</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Design for Manufacturability (DFM) Matrix
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-2xl">
              Strict engineering tolerances verified across Schmoll CNC drills, LDI lithography, and Oxford XRF analyzers.
            </p>
          </div>

          <button
            onClick={onOpenRfq}
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-circuit-gold/10 border border-circuit-gold/40 text-circuit-gold text-xs font-mono font-semibold hover:bg-circuit-gold hover:text-slate-950 transition-all"
          >
            <span>Request Custom Stack-up</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Technical Table Container */}
        <div className="overflow-x-auto rounded-xl border border-substrate-700 bg-substrate-900/60 shadow-xl">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-substrate-950 border-b border-substrate-700 text-slate-400 uppercase tracking-wider">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Engineering Feature</th>
                <th className="py-3.5 px-4 font-semibold">Parameter</th>
                <th className="py-3.5 px-4 font-semibold text-slate-300">Standard Capability</th>
                <th className="py-3.5 px-4 font-semibold text-circuit-gold">Advanced / Defense Tier</th>
                <th className="py-3.5 px-4 font-semibold text-slate-400">Enabling Equipment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-substrate-800 text-slate-300">
              {filtered.map((item, idx) => (
                <tr key={idx} className="hover:bg-substrate-800/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-circuit-gold shrink-0" />
                    <span>{item.category}</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-300">{item.parameter}</td>
                  <td className="py-3.5 px-4 text-slate-400">{item.standard}</td>
                  <td className="py-3.5 px-4 text-circuit-gold font-bold bg-circuit-gold/5">
                    {item.advanced}
                  </td>
                  <td className="py-3.5 px-4 text-slate-400 text-[11px]">{item.equipment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
