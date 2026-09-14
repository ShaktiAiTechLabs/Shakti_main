import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  UploadCloud, 
  Check, 
  Clock, 
  ShieldCheck, 
  FileCode2, 
  ArrowRight,
  Info
} from 'lucide-react';

interface InstantQuoteEngineProps {
  onOpenDetailedRfq?: (preset?: any) => void;
}

export const InstantQuoteEngine: React.FC<InstantQuoteEngineProps> = ({ onOpenDetailedRfq }) => {
  const [boardType, setBoardType] = useState<'rigid' | 'multi' | 'teflon' | 'metal'>('rigid');
  const [layers, setLayers] = useState<number>(2);
  const [width, setWidth] = useState<number>(100);
  const [length, setLength] = useState<number>(100);
  const [quantity, setQuantity] = useState<number>(10);
  const [thickness, setThickness] = useState<string>('1.6');
  const [copper, setCopper] = useState<string>('1');
  const [finish, setFinish] = useState<string>('ENIG');
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Quick Layer options based on board type
  const availableLayers = useMemo(() => {
    switch (boardType) {
      case 'rigid':
        return [1, 2];
      case 'multi':
        return [4, 6, 8, 10, 12, 16];
      case 'teflon':
        return [1, 2, 4];
      case 'metal':
        return [1, 2];
      default:
        return [2];
    }
  }, [boardType]);

  // Sync layers when boardType changes
  const handleBoardTypeChange = (type: 'rigid' | 'multi' | 'teflon' | 'metal') => {
    setBoardType(type);
    if (type === 'rigid') setLayers(2);
    else if (type === 'multi') setLayers(4);
    else if (type === 'teflon') setLayers(2);
    else if (type === 'metal') setLayers(1);
  };

  // Rough dynamic price estimate calculation for hardware engineers
  const estimatedCost = useMemo(() => {
    const areaSqM = (width * length * quantity) / 1000000;
    let baseRate = 120; // base $/sq.m
    if (layers === 1) baseRate = 90;
    else if (layers === 2) baseRate = 140;
    else if (layers === 4) baseRate = 260;
    else if (layers === 6) baseRate = 380;
    else if (layers >= 8) baseRate = 520 + (layers - 8) * 80;

    if (boardType === 'teflon') baseRate *= 2.2;
    if (boardType === 'metal') baseRate *= 1.5;
    if (finish === 'ENIG') baseRate += 35;
    if (Number(copper) > 2) baseRate += 40;

    const toolingCost = layers <= 2 ? 60 : 120 + layers * 20;
    const total = Math.max(85, Math.round(toolingCost + areaSqM * baseRate));
    const unitPrice = (total / quantity).toFixed(2);

    return { total, unitPrice };
  }, [boardType, layers, width, length, quantity, copper, finish]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setUploadedFile(null);
    }, 4000);
  };

  return (
    <section id="rfq-calculator" className="py-20 px-4 md:px-8 bg-substrate-900 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-circuit-gold/10 border border-circuit-gold/20 text-xs font-mono text-circuit-gold">
            <Calculator className="w-3.5 h-3.5" />
            <span>REAL-TIME DFM & PRODUCTION CONFIGURATOR</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Instant PCB Specification & RFQ Engine
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Configure your board parameters, upload Gerber files (`.zip`), and receive a guaranteed fabrication review from our CAM engineering desk within 4 hours.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-substrate-900 border border-substrate-750 rounded-2xl shadow-2xl p-6 md:p-8">
          {/* Left Column: Form Controls (8 Cols) */}
          <form onSubmit={handleSubmit} className="lg:col-span-8 space-y-6">
            {/* Board Technology Selector Tabs */}
            <div>
              <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2.5">
                1. Select PCB Technology Architecture
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-medium">
                <button
                  type="button"
                  onClick={() => handleBoardTypeChange('rigid')}
                  className={`py-3 px-3 rounded-lg border text-center transition-all ${
                    boardType === 'rigid'
                      ? 'bg-circuit-gold/10 border-circuit-gold text-circuit-gold font-bold shadow-sm'
                      : 'bg-substrate-850 border-substrate-700 text-slate-300 hover:border-slate-500'
                  }`}
                >
                  Single & Double
                </button>
                <button
                  type="button"
                  onClick={() => handleBoardTypeChange('multi')}
                  className={`py-3 px-3 rounded-lg border text-center transition-all ${
                    boardType === 'multi'
                      ? 'bg-circuit-gold/10 border-circuit-gold text-circuit-gold font-bold shadow-sm'
                      : 'bg-substrate-850 border-substrate-700 text-slate-300 hover:border-slate-500'
                  }`}
                >
                  Multilayer (4–16L)
                </button>
                <button
                  type="button"
                  onClick={() => handleBoardTypeChange('teflon')}
                  className={`py-3 px-3 rounded-lg border text-center transition-all ${
                    boardType === 'teflon'
                      ? 'bg-circuit-gold/10 border-circuit-gold text-circuit-gold font-bold shadow-sm'
                      : 'bg-substrate-850 border-substrate-700 text-slate-300 hover:border-slate-500'
                  }`}
                >
                  Teflon / RF Rogers
                </button>
                <button
                  type="button"
                  onClick={() => handleBoardTypeChange('metal')}
                  className={`py-3 px-3 rounded-lg border text-center transition-all ${
                    boardType === 'metal'
                      ? 'bg-circuit-gold/10 border-circuit-gold text-circuit-gold font-bold shadow-sm'
                      : 'bg-substrate-850 border-substrate-700 text-slate-300 hover:border-slate-500'
                  }`}
                >
                  Metal Clad (MCPCB)
                </button>
              </div>
            </div>

            {/* Layer Count Buttons */}
            <div>
              <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2.5">
                2. Layer Count
              </label>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {availableLayers.map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setLayers(l)}
                    className={`py-2 px-4 rounded-md border transition-all ${
                      layers === l
                        ? 'bg-circuit-gold text-slate-950 font-bold border-circuit-gold shadow'
                        : 'bg-substrate-850 border-substrate-700 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    {l} {l === 1 ? 'Layer' : 'Layers'}
                  </button>
                ))}
              </div>
            </div>

            {/* Dimensions and Quantity */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                  Width (mm)
                </label>
                <input
                  type="number"
                  min="10"
                  max="600"
                  value={width}
                  onChange={(e) => setWidth(Math.max(5, Number(e.target.value)))}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-substrate-850 border border-substrate-700 text-white font-mono text-sm focus:outline-none focus:border-circuit-gold"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                  Length (mm)
                </label>
                <input
                  type="number"
                  min="10"
                  max="600"
                  value={length}
                  onChange={(e) => setLength(Math.max(5, Number(e.target.value)))}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-substrate-850 border border-substrate-700 text-white font-mono text-sm focus:outline-none focus:border-circuit-gold"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                  Quantity (pcs)
                </label>
                <input
                  type="number"
                  min="1"
                  max="100000"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-substrate-850 border border-substrate-700 text-white font-mono text-sm focus:outline-none focus:border-circuit-gold"
                  required
                />
              </div>
            </div>

            {/* Material & Stackup Parameters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                  Thickness (mm)
                </label>
                <select
                  value={thickness}
                  onChange={(e) => setThickness(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-substrate-850 border border-substrate-700 text-white font-mono text-sm focus:outline-none focus:border-circuit-gold"
                >
                  <option value="0.8">0.8 mm</option>
                  <option value="1.0">1.0 mm</option>
                  <option value="1.2">1.2 mm</option>
                  <option value="1.6">1.6 mm (Standard)</option>
                  <option value="2.0">2.0 mm</option>
                  <option value="2.4">2.4 mm</option>
                  <option value="3.2">3.2 mm</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                  Copper Weight
                </label>
                <select
                  value={copper}
                  onChange={(e) => setCopper(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-substrate-850 border border-substrate-700 text-white font-mono text-sm focus:outline-none focus:border-circuit-gold"
                >
                  <option value="0.5">0.5 oz (18 µm)</option>
                  <option value="1">1 oz (35 µm - Standard)</option>
                  <option value="2">2 oz (70 µm)</option>
                  <option value="3">3 oz (105 µm)</option>
                  <option value="4">4 oz (140 µm Heavy)</option>
                  <option value="6">6 oz (210 µm Heavy)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                  Surface Finish
                </label>
                <select
                  value={finish}
                  onChange={(e) => setFinish(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-substrate-850 border border-substrate-700 text-white font-mono text-sm focus:outline-none focus:border-circuit-gold"
                >
                  <option value="ENIG">ENIG (Immersion Gold)</option>
                  <option value="HASL_LF">Lead-Free HASL</option>
                  <option value="HASL_LEAD">Leaded HASL</option>
                  <option value="IMM_SILVER">Immersion Silver</option>
                  <option value="HARD_GOLD">Hard Gold Plating</option>
                  <option value="OSP">OSP Organic Coating</option>
                </select>
              </div>
            </div>

            {/* Gerber File Upload Dropzone */}
            <div>
              <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                Attach Gerber Package (.zip, .rar, .tgz)
              </label>
              <div className="relative border-2 border-dashed border-substrate-700 hover:border-circuit-gold/60 rounded-xl p-5 text-center bg-substrate-950/40 transition-colors cursor-pointer group">
                <input 
                  type="file" 
                  accept=".zip,.rar,.tar,.gz,.7z" 
                  onChange={handleFileUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                />
                <div className="flex flex-col items-center justify-center gap-2">
                  <UploadCloud className="w-8 h-8 text-circuit-gold group-hover:scale-110 transition-transform" />
                  {uploadedFile ? (
                    <div className="text-xs font-mono text-signal-emerald flex items-center gap-1.5">
                      <Check className="w-4 h-4" />
                      <span>Ready: {uploadedFile}</span>
                    </div>
                  ) : (
                    <>
                      <p className="text-xs text-slate-300 font-medium">
                        Drag and drop your Gerber RS-274X or ODB++ archive here
                      </p>
                      <span className="text-[11px] font-mono text-slate-500">
                        Strict non-disclosure: all CAD files encrypted and protected under NDA
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-lg bg-circuit-gold text-slate-950 font-bold text-sm uppercase tracking-wider hover:bg-circuit-copper transition-all shadow-[0_0_20px_rgba(102,143,55,0.3)] flex items-center justify-center gap-2 active:scale-[0.99]"
              >
                <span>Submit RFQ to Engineering</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              {isSubmitted && (
                <div className="mt-3 p-3 rounded-lg bg-signal-emerald/10 border border-signal-emerald/30 text-signal-emerald text-xs font-mono text-center animate-in fade-in">
                  ✓ RFQ specification received! An FCC CAM Application Engineer will reply to your registered email with DFM approval and formal pricing within 4 hours.
                </div>
              )}
            </div>
          </form>

          {/* Right Column: Dynamic Price & Production Estimates (4 Cols) */}
          <div className="lg:col-span-4 bg-substrate-950/80 border border-substrate-800 rounded-xl p-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between border-b border-substrate-800 pb-3 mb-4">
                <span className="text-xs font-mono text-slate-400 uppercase">Configuration Summary</span>
                <span className="text-[11px] font-mono text-circuit-gold bg-circuit-gold/10 px-2 py-0.5 rounded border border-circuit-gold/20">
                  IPC Class 3
                </span>
              </div>

              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Board Size:</span>
                  <span>{width} × {length} mm</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Layer Stack:</span>
                  <span>{layers} Layers</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Finished Thickness:</span>
                  <span>{thickness} mm</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Copper Weight:</span>
                  <span>{copper} oz</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Surface Finish:</span>
                  <span className="text-circuit-gold font-bold">{finish}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Quantity:</span>
                  <span className="text-white font-bold">{quantity} pcs</span>
                </div>
              </div>

              {/* Estimated Lead Time */}
              <div className="mt-6 p-3 rounded-lg bg-substrate-900 border border-substrate-800 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-circuit-gold font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Lead Time Estimate:</span>
                </div>
                <p className="text-xs text-slate-300 font-medium">
                  {quantity <= 50 ? '3–5 Working Days (Fast-Track Available)' : '7–10 Working Days (Production Run)'}
                </p>
              </div>

              {/* Live Cost Estimate Block */}
              <div className="mt-6 pt-6 border-t border-substrate-800">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-xs text-slate-400 font-mono">Estimated Unit Cost:</span>
                  <span className="text-lg font-mono font-bold text-slate-200">
                    ~${estimatedCost.unitPrice} <span className="text-xs font-normal text-slate-400">/ pc</span>
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-400 font-mono">Est. Total Production:</span>
                  <span className="text-2xl font-mono font-black text-circuit-gold">
                    ${estimatedCost.total.toLocaleString()}
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 font-mono mt-1.5 flex items-center gap-1">
                  <Info className="w-3 h-3 shrink-0" />
                  <span>Subject to Gerber verification & panelization yield.</span>
                </p>
              </div>
            </div>

            {/* Trust Assurance Footer */}
            <div className="pt-4 border-t border-substrate-800/80 space-y-2 text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-signal-emerald shrink-0" />
                <span>100% E-Test & AOI Optical Inspection</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCode2 className="w-4 h-4 text-circuit-gold shrink-0" />
                <span>Free DFM Feedback with Every Order</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
