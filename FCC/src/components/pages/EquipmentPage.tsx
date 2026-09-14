import React, { useState } from 'react';
import { 
  Wrench, 
  ShieldCheck, 
  Gauge, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Layers,
  Cpu
} from 'lucide-react';
import { EquipmentItem } from '../../types/pcb';

interface EquipmentPageProps {
  equipment: EquipmentItem[];
  onOpenRfq: () => void;
}

export const EquipmentPage: React.FC<EquipmentPageProps> = ({ equipment, onOpenRfq }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filtered = equipment.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      {/* Page Title */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-circuit-gold/10 border border-circuit-gold/20 text-xs font-mono text-circuit-gold">
          <Wrench className="w-3.5 h-3.5" />
          <span>FACILITY INFRASTRUCTURE & MACHINERY</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Cutting-Edge Fabrication Infrastructure
        </h1>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          Our 60,000 sq. ft. plant in Vadodara, Gujarat is powered by world-class machinery from Germany, the UK, and Japan, ensuring microscopic registration, sub-mil etching precision, and Class 10,000 cleanroom integrity.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-substrate-800 pb-3 text-xs font-mono">
        <button
          onClick={() => setActiveCategory('all')}
          className={`py-2 px-4 rounded-lg transition-all ${
            activeCategory === 'all'
              ? 'bg-circuit-gold text-slate-950 font-bold'
              : 'bg-substrate-900 border border-substrate-800 text-slate-300 hover:text-white'
          }`}
        >
          All Infrastructure ({equipment.length})
        </button>
        <button
          onClick={() => setActiveCategory('machine')}
          className={`py-2 px-4 rounded-lg transition-all ${
            activeCategory === 'machine'
              ? 'bg-circuit-gold text-slate-950 font-bold'
              : 'bg-substrate-900 border border-substrate-800 text-slate-300 hover:text-white'
          }`}
        >
          High-Capability CNC & Laser Machinery
        </button>
        <button
          onClick={() => setActiveCategory('cleanroom')}
          className={`py-2 px-4 rounded-lg transition-all ${
            activeCategory === 'cleanroom'
              ? 'bg-circuit-gold text-slate-950 font-bold'
              : 'bg-substrate-900 border border-substrate-800 text-slate-300 hover:text-white'
          }`}
        >
          Class 10,000 Cleanroom
        </button>
        <button
          onClick={() => setActiveCategory('qa')}
          className={`py-2 px-4 rounded-lg transition-all ${
            activeCategory === 'qa'
              ? 'bg-circuit-gold text-slate-950 font-bold'
              : 'bg-substrate-900 border border-substrate-800 text-slate-300 hover:text-white'
          }`}
        >
          Quality & Micro-Section Lab
        </button>
        <button
          onClick={() => setActiveCategory('process_control')}
          className={`py-2 px-4 rounded-lg transition-all ${
            activeCategory === 'process_control'
              ? 'bg-circuit-gold text-slate-950 font-bold'
              : 'bg-substrate-900 border border-substrate-800 text-slate-300 hover:text-white'
          }`}
        >
          Oxford XRF Process Control
        </button>
      </div>

      {/* Equipment Showcase Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl bg-substrate-900 border border-substrate-750 overflow-hidden flex flex-col justify-between hover:border-circuit-gold/50 transition-all shadow-xl group"
          >
            <div>
              {/* Equipment Photo */}
              <div className="relative aspect-video bg-black/60 overflow-hidden border-b border-substrate-800 flex items-center justify-center p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 text-[11px] font-mono bg-black/80 px-2.5 py-1 rounded text-circuit-gold border border-circuit-gold/20">
                  {item.tag}
                </div>
                {item.manufacturer && (
                  <div className="absolute bottom-3 right-3 text-[10px] font-mono bg-black/80 px-2.5 py-0.5 rounded text-slate-300 border border-substrate-700">
                    {item.manufacturer}
                  </div>
                )}
              </div>

              {/* Text Information */}
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-signal-cyan font-semibold block">
                    {item.capabilityMetric}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-circuit-gold transition-colors">
                    {item.name}
                  </h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Technical Specifications */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Key Performance Metrics:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
                    {item.specifications.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-circuit-gold font-bold">✓</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="p-4 bg-substrate-950/60 border-t border-substrate-800 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Active Production Line</span>
              <button
                onClick={onOpenRfq}
                className="text-circuit-gold hover:underline font-bold flex items-center gap-1"
              >
                <span>Fabricate with this machine</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
