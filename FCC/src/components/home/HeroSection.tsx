import React, { useState } from 'react';
import { 
  ArrowRight, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Activity, 
  Maximize2,
  FileCheck2,
  Microchip
} from 'lucide-react';

interface HeroSectionProps {
  onOpenRfq: () => void;
  onExploreSpecs: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRfq, onExploreSpecs }) => {
  const [activeLayer, setActiveLayer] = useState<'top' | 'inner' | 'mask'>('top');

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 px-4 md:px-8 overflow-hidden bg-grid-tech">
      {/* Glow gradient highlight in center background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-circuit-gold/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Value Proposition & Engineering Trust */}
        <div className="lg:col-span-7 space-y-6">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-substrate-850 border border-circuit-gold/30 text-xs font-mono text-circuit-gold">
            <span className="w-2 h-2 rounded-full bg-circuit-gold animate-ping"></span>
            <span>100% EXPORT ORIENTED UNIT • VADODARA, GUJARAT</span>
          </div>

          {/* Headline: Max 2 lines desktop */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
            Precision PCB Fabrication for <span className="text-transparent bg-clip-text bg-gradient-to-r from-circuit-gold via-circuit-copper to-[#D0E6B5]">Mission-Critical</span> Electronics.
          </h1>

          {/* Subtext: <= 25 words */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-[58ch]">
            From high-density multilayer prototypes to high-volume defense and industrial production with 100% automated optical and electrical testing.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenRfq}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-circuit-gold text-slate-950 font-bold text-sm uppercase tracking-wider hover:bg-circuit-copper transition-all shadow-[0_0_25px_rgba(102,143,55,0.35)] hover:shadow-[0_0_35px_rgba(102,143,55,0.55)] active:scale-[0.98]"
            >
              <span>Instant RFQ & File Upload</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreSpecs}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-substrate-850 border border-substrate-700 text-slate-200 hover:text-circuit-gold hover:border-circuit-gold/60 transition-all text-sm font-medium"
            >
              <span>View DFM Capabilities</span>
            </button>
          </div>

          {/* Micro Engineering Spec Badges */}
          <div className="pt-6 border-t border-substrate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
            <div className="p-2.5 rounded-lg bg-substrate-900/60 border border-substrate-800">
              <span className="text-circuit-gold block font-bold text-sm">3 mil / 3 mil</span>
              <span className="text-slate-400">Min Trace / Space</span>
            </div>
            <div className="p-2.5 rounded-lg bg-substrate-900/60 border border-substrate-800">
              <span className="text-circuit-gold block font-bold text-sm">0.15 mm</span>
              <span className="text-slate-400">Micro-Drill Size</span>
            </div>
            <div className="p-2.5 rounded-lg bg-substrate-900/60 border border-substrate-800">
              <span className="text-circuit-gold block font-bold text-sm">Up to 20 Layers</span>
              <span className="text-slate-400">Multilayer Density</span>
            </div>
            <div className="p-2.5 rounded-lg bg-substrate-900/60 border border-substrate-800">
              <span className="text-circuit-gold block font-bold text-sm">Class 10k</span>
              <span className="text-slate-400">Cleanroom ISO 7</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Circuit Board Inspection Card */}
        <div className="lg:col-span-5">
          <div className="relative rounded-2xl bg-substrate-900 border border-substrate-700 shadow-2xl overflow-hidden p-5">
            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-substrate-800 pb-3 mb-4 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-signal-emerald"></span>
                <span>FCC CAD / GERBER INSPECTION</span>
              </div>
              <span className="text-circuit-gold">ENIG 2-3 µin</span>
            </div>

            {/* Layer Selection Controller */}
            <div className="flex items-center gap-1.5 p-1 rounded-lg bg-substrate-950 border border-substrate-800 mb-4 text-xs font-mono">
              <button
                onClick={() => setActiveLayer('top')}
                className={`flex-1 py-1.5 px-2 rounded text-center transition-all ${
                  activeLayer === 'top'
                    ? 'bg-circuit-gold text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Top Copper
              </button>
              <button
                onClick={() => setActiveLayer('inner')}
                className={`flex-1 py-1.5 px-2 rounded text-center transition-all ${
                  activeLayer === 'inner'
                    ? 'bg-circuit-gold text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Inner Plane
              </button>
              <button
                onClick={() => setActiveLayer('mask')}
                className={`flex-1 py-1.5 px-2 rounded text-center transition-all ${
                  activeLayer === 'mask'
                    ? 'bg-circuit-gold text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Solder Mask
              </button>
            </div>

            {/* Board Preview Visualization Container */}
            <div className="relative aspect-[4/3] rounded-xl bg-substrate-950 border border-substrate-800 overflow-hidden flex items-center justify-center p-4">
              {/* Circuit Trace Background Pattern */}
              <div 
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `radial-gradient(circle, #668F37 1px, transparent 1px), linear-gradient(to right, rgba(102,143,55,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(102,143,55,0.10) 1px, transparent 1px)`,
                  backgroundSize: '16px 16px'
                }}
              ></div>

              {/* Board Image render depending on layer */}
              <img 
                src="/assets/products/10-LAYER-TOP-1.png" 
                alt="FCC High-Density PCB Layer" 
                className={`w-full h-full object-contain relative z-10 transition-all duration-500 ${
                  activeLayer === 'inner' 
                    ? 'hue-rotate-90 saturate-150 scale-105' 
                    : activeLayer === 'mask' 
                    ? 'contrast-125 brightness-90' 
                    : 'drop-shadow-[0_0_15px_rgba(102,143,55,0.3)]'
                }`}
              />

              {/* Dynamic Overlay Crosshairs */}
              <div className="absolute top-3 left-3 text-[10px] font-mono text-circuit-gold/80 bg-black/60 px-2 py-0.5 rounded border border-circuit-gold/20">
                X: 142.24 mm | Y: 100.00 mm
              </div>
              <div className="absolute bottom-3 right-3 text-[10px] font-mono text-signal-cyan bg-black/60 px-2 py-0.5 rounded border border-signal-cyan/20">
                LDI Verified ±0.015mm
              </div>
            </div>

            {/* Verification Footer Pill */}
            <div className="mt-4 pt-3 border-t border-substrate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1 text-slate-300">
                <FileCheck2 className="w-3.5 h-3.5 text-signal-emerald" />
                IPC-6012 Class 3 Compliant
              </span>
              <span className="text-circuit-gold">
                60,000 Sq. Ft. Plant
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
