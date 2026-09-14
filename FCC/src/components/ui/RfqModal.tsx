import React, { useState } from 'react';
import { X, UploadCloud, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetProduct?: string;
}

export const RfqModal: React.FC<RfqModalProps> = ({ isOpen, onClose, presetProduct }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [boardType, setBoardType] = useState(presetProduct || 'Multi Layered PCB');
  const [quantity, setQuantity] = useState('50');
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-2xl bg-substrate-900 border border-substrate-700 shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-substrate-800"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 space-y-1">
          <div className="text-[11px] font-mono uppercase text-circuit-gold font-semibold">
            RAPID RESPONSE • IPC CLASS 3 VERIFIED
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Request an Engineering RFQ
          </h2>
          <p className="text-xs text-slate-400 font-sans">
            Upload your Gerber archive and specs. Our CAM engineering desk will evaluate DFM within 4 hours.
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-signal-emerald/20 text-signal-emerald mx-auto flex items-center justify-center">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">RFQ Successfully Transmitted!</h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto font-sans">
              Thank you {name}. Our pre-production CAM team will review your parameters and email you the comprehensive DFM report and formal quotation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 uppercase tracking-wider mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-substrate-850 border border-substrate-700 text-white focus:outline-none focus:border-circuit-gold text-xs font-sans"
                />
              </div>

              <div>
                <label className="block text-slate-300 uppercase tracking-wider mb-1">
                  Corporate Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-substrate-850 border border-substrate-700 text-white focus:outline-none focus:border-circuit-gold text-xs font-sans"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 uppercase tracking-wider mb-1">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Organization name"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-substrate-850 border border-substrate-700 text-white focus:outline-none focus:border-circuit-gold text-xs font-sans"
                />
              </div>

              <div>
                <label className="block text-slate-300 uppercase tracking-wider mb-1">
                  Target Quantity (pcs) *
                </label>
                <input
                  type="text"
                  required
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="e.g. 50 pcs / 5,000 pcs"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-substrate-850 border border-substrate-700 text-white focus:outline-none focus:border-circuit-gold text-xs font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 uppercase tracking-wider mb-1">
                PCB Technology Tier
              </label>
              <select
                value={boardType}
                onChange={(e) => setBoardType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-substrate-850 border border-substrate-700 text-white focus:outline-none focus:border-circuit-gold text-xs"
              >
                <option value="Single Layer Board">Single Layer Board</option>
                <option value="Double Sided Board">Double Sided Board</option>
                <option value="Multi Layered PCB">Multi Layered PCB (4 to 16 Layers)</option>
                <option value="Teflon PCB">Teflon / RF Rogers Microwave PCB</option>
                <option value="Metal Cladded PCB">Metal Cladded / Aluminum MCPCB</option>
                <option value="HDI / Microvia Prototype">HDI / Microvia Prototype</option>
              </select>
            </div>

            {/* File Upload Box */}
            <div>
              <label className="block text-slate-300 uppercase tracking-wider mb-1">
                Attach Gerber RS-274X / ODB++ Archive (.zip, .rar)
              </label>
              <div className="relative border-2 border-dashed border-substrate-700 hover:border-circuit-gold/60 rounded-xl p-4 text-center bg-substrate-950/50 transition-colors cursor-pointer">
                <input 
                  type="file" 
                  accept=".zip,.rar,.tar,.gz,.7z" 
                  onChange={handleFile}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                />
                <div className="flex flex-col items-center justify-center gap-1.5">
                  <UploadCloud className="w-6 h-6 text-circuit-gold" />
                  {fileName ? (
                    <span className="text-xs text-signal-emerald font-semibold">Attached: {fileName}</span>
                  ) : (
                    <span className="text-xs text-slate-300">Click or drag file to attach Gerber package</span>
                  )}
                  <span className="text-[10px] text-slate-500 font-mono">
                    Protected by non-disclosure confidentiality
                  </span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-lg bg-circuit-gold text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-circuit-copper transition-all shadow-[0_0_20px_rgba(102,143,55,0.3)] flex items-center justify-center gap-2 mt-4 active:scale-[0.99]"
            >
              <span>Submit RFQ to Pre-Production Engineering</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
