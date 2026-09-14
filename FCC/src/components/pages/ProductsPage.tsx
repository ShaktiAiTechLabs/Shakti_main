import React, { useState, useEffect } from 'react';
import { 
  Layers, 
  CheckCircle2, 
  Cpu, 
  ArrowRight, 
  FileSpreadsheet, 
  ShieldCheck,
  Download
} from 'lucide-react';
import { PCBProduct } from '../../types/pcb';

interface ProductsPageProps {
  products: PCBProduct[];
  selectedId?: string;
  onOpenRfq: (productName?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ products, selectedId, onOpenRfq }) => {
  const [activeTab, setActiveTab] = useState<string>(selectedId || products[0].id);

  useEffect(() => {
    if (selectedId) {
      setActiveTab(selectedId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedId]);

  const currentProduct = products.find(p => p.id === activeTab) || products[0];

  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
      {/* Page Title */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-circuit-gold/10 border border-circuit-gold/20 text-xs font-mono text-circuit-gold">
          <Layers className="w-3.5 h-3.5" />
          <span>PRODUCTION CATALOG</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          High-Reliability PCB Architecture Suite
        </h1>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          From rapid prototype turnarounds to mass multi-layer production runs, our products conform to IPC Class 2 and Class 3 defense specifications with UL 94V-0 traceability.
        </p>
      </div>

      {/* Horizontal Product Navigation Tabs */}
      <div className="flex overflow-x-auto gap-2 pb-2 border-b border-substrate-800 text-xs font-mono">
        {products.map((p) => (
          <button
            key={p.id}
            onClick={() => setActiveTab(p.id)}
            className={`py-3 px-4 rounded-lg font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === p.id
                ? 'bg-circuit-gold text-slate-950 shadow-md font-bold'
                : 'bg-substrate-900 border border-substrate-800 text-slate-300 hover:text-white hover:border-slate-600'
            }`}
          >
            <span>{p.name}</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded ${
              activeTab === p.id ? 'bg-black/20 text-slate-900' : 'bg-substrate-800 text-circuit-gold'
            }`}>
              {p.layers}
            </span>
          </button>
        ))}
      </div>

      {/* Active Product Detailed Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Visual Asset Gallery (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Display Image */}
          <div className="relative aspect-[4/3] rounded-2xl bg-black/60 border border-substrate-700 p-6 flex items-center justify-center overflow-hidden shadow-2xl">
            <img
              src={currentProduct.image}
              alt={currentProduct.name}
              className="w-full h-full object-contain filter drop-shadow-[0_8px_24px_rgba(0,0,0,0.8)]"
            />
            <div className="absolute top-3 left-3 text-[11px] font-mono bg-substrate-950/80 px-2.5 py-1 rounded border border-substrate-700 text-circuit-gold">
              {currentProduct.category}
            </div>
            <div className="absolute bottom-3 right-3 text-[11px] font-mono bg-substrate-950/80 px-2.5 py-1 rounded border border-substrate-700 text-signal-emerald">
              100% E-Tested
            </div>
          </div>

          {/* Dual Layer Photos (Top & Bottom) if available */}
          {currentProduct.topImage && currentProduct.bottomImage && (
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-substrate-900 border border-substrate-800 text-center">
                <img 
                  src={currentProduct.topImage} 
                  alt="Top Copper Side" 
                  className="h-24 w-full object-contain mb-1" 
                />
                <span className="text-[10px] font-mono text-slate-400 block">Top Layer Surface</span>
              </div>
              <div className="p-3 rounded-xl bg-substrate-900 border border-substrate-800 text-center">
                <img 
                  src={currentProduct.bottomImage} 
                  alt="Bottom Copper Side" 
                  className="h-24 w-full object-contain mb-1" 
                />
                <span className="text-[10px] font-mono text-slate-400 block">Bottom Layer Surface</span>
              </div>
            </div>
          )}

          {/* Surface Finishes Supported */}
          <div className="p-5 rounded-xl bg-substrate-900 border border-substrate-800 space-y-2">
            <h4 className="text-xs font-mono uppercase text-slate-400">Available Surface Finishes</h4>
            <div className="flex flex-wrap gap-1.5">
              {currentProduct.surfaceFinishes.map((f, i) => (
                <span key={i} className="text-xs font-mono px-2.5 py-1 rounded bg-substrate-850 text-slate-200 border border-substrate-700">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Technical Specs & Applications (7 Cols) */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <span className="text-xs font-mono uppercase text-circuit-gold tracking-wider">
              {currentProduct.layers} • {currentProduct.category}
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1 mb-3">
              {currentProduct.name}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {currentProduct.description}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onOpenRfq(currentProduct.name)}
              className="px-6 py-3 rounded-lg bg-circuit-gold text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-circuit-copper transition-all shadow-[0_0_20px_rgba(102,143,55,0.3)] flex items-center gap-2 active:scale-[0.99]"
            >
              <span>Instant RFQ for {currentProduct.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Complete Specification Table (Corrected from legacy typos) */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-circuit-gold" />
              <span>Full Engineering Specification Parameters</span>
            </h3>

            <div className="overflow-hidden rounded-xl border border-substrate-750 bg-substrate-900">
              <table className="w-full text-left text-xs font-mono">
                <tbody className="divide-y divide-substrate-800">
                  {Object.entries(currentProduct.specTable).map(([key, val], idx) => (
                    <tr key={idx} className="hover:bg-substrate-850/50 transition-colors">
                      <td className="py-3 px-4 text-slate-400 font-medium w-1/3 border-r border-substrate-800/60 bg-substrate-950/40">
                        {key}
                      </td>
                      <td className="py-3 px-4 text-slate-200 font-semibold">
                        {val}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Applications */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Typical Industry Deployments
            </h4>
            <div className="flex flex-wrap gap-2">
              {currentProduct.keyApplications.map((app, i) => (
                <span key={i} className="text-xs px-3 py-1.5 rounded-lg bg-substrate-850 border border-substrate-700 text-slate-300 font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-circuit-gold shrink-0" />
                  <span>{app}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
