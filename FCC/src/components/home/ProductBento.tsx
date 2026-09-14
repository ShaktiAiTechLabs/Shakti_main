import React from 'react';
import { ArrowRight, Layers, Cpu, Flame, Radio, Shield } from 'lucide-react';
import { PCBProduct } from '../../types/pcb';

interface ProductBentoProps {
  products: PCBProduct[];
  onSelectProduct: (productId: string) => void;
}

export const ProductBento: React.FC<ProductBentoProps> = ({ products, onSelectProduct }) => {
  return (
    <section className="py-20 px-4 md:px-8 bg-substrate-950 border-t border-substrate-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-circuit-gold/10 border border-circuit-gold/20 text-xs font-mono text-circuit-gold">
            <Layers className="w-3.5 h-3.5" />
            <span>FABRICATION PORTFOLIO</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Specialized PCB Architectures
          </h2>
          <p className="text-slate-400 text-sm">
            Manufactured in our 60,000 sq. ft. facility to IPC Class 2 and Class 3 military and aerospace standards.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((prod, idx) => {
            const isFeatured = prod.id === 'multi-layered';

            return (
              <div
                key={prod.id}
                onClick={() => onSelectProduct(prod.id)}
                className={`group relative rounded-2xl bg-substrate-900/80 border border-substrate-750 hover:border-circuit-gold/60 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl cursor-pointer ${
                  isFeatured ? 'lg:col-span-2 bg-gradient-to-br from-substrate-900 via-substrate-850 to-substrate-900' : ''
                }`}
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-circuit-gold/10 text-circuit-gold border border-circuit-gold/20 font-semibold">
                      {prod.layers}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {prod.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white group-hover:text-circuit-gold transition-colors mb-2">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 mb-4">
                    {prod.tagline}
                  </p>

                  {/* Product Image Thumbnail */}
                  <div className="relative aspect-video rounded-xl bg-black/50 border border-substrate-800 overflow-hidden mb-5 flex items-center justify-center p-3 group-hover:border-circuit-gold/40 transition-colors">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 text-[10px] font-mono bg-black/80 px-2 py-0.5 rounded text-circuit-gold border border-circuit-gold/20">
                      {prod.minLineSpacing}
                    </div>
                  </div>

                  {/* Technical Highlights Bullet List */}
                  <ul className="space-y-1.5 mb-6 text-xs text-slate-400 font-mono">
                    {prod.highlights.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-circuit-gold font-bold">›</span>
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-substrate-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-circuit-gold font-bold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                    <span>Explore Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-slate-500">
                    Max: {prod.maxDimensions.split(' ')[0]} mm
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
