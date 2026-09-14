import React, { useState } from 'react';
import { X, UploadCloud, Check, ArrowRight, Briefcase } from 'lucide-react';

interface JobModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle?: string;
}

export const JobModal: React.FC<JobModalProps> = ({ isOpen, onClose, jobTitle }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [resumeName, setResumeName] = useState<string | null>(null);
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
      setResumeName(e.target.files[0].name);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-substrate-900 border border-substrate-700 shadow-2xl p-6 md:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-substrate-800"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 space-y-1">
          <div className="text-[11px] font-mono uppercase text-circuit-gold font-semibold">
            CAREERS AT FCC INDIA • VADODARA PLANT
          </div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            Apply for: {jobTitle || 'Engineering Role'}
          </h2>
          <p className="text-xs text-slate-400 font-sans">
            Submit your credentials directly to our HR and Engineering Operations desk.
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-signal-emerald/20 text-signal-emerald mx-auto flex items-center justify-center">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Application Received!</h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto font-sans">
              Thank you {name}. Our HR team at the Vadodara plant will review your profile and reach out for the initial technical screening.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
            <div>
              <label className="block text-slate-300 uppercase tracking-wider mb-1">
                Full Name *
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-substrate-850 border border-substrate-700 text-white focus:outline-none focus:border-circuit-gold text-xs font-sans"
                />
              </div>

              <div>
                <label className="block text-slate-300 uppercase tracking-wider mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 ..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-substrate-850 border border-substrate-700 text-white focus:outline-none focus:border-circuit-gold text-xs font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 uppercase tracking-wider mb-1">
                Upload Resume / CV (PDF, DOCX) *
              </label>
              <div className="relative border-2 border-dashed border-substrate-700 hover:border-circuit-gold/60 rounded-xl p-4 text-center bg-substrate-950/50 transition-colors cursor-pointer">
                <input 
                  type="file" 
                  required
                  accept=".pdf,.doc,.docx" 
                  onChange={handleFile}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                />
                <div className="flex flex-col items-center justify-center gap-1.5">
                  <UploadCloud className="w-6 h-6 text-circuit-gold" />
                  {resumeName ? (
                    <span className="text-xs text-signal-emerald font-semibold">Attached: {resumeName}</span>
                  ) : (
                    <span className="text-xs text-slate-300">Click to browse or drag & drop resume file</span>
                  )}
                  <span className="text-[10px] text-slate-500 font-mono">Max 15MB file size</span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-lg bg-circuit-gold text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-circuit-copper transition-all shadow-[0_0_20px_rgba(102,143,55,0.3)] flex items-center justify-center gap-2 mt-4 active:scale-[0.99]"
            >
              <span>Transmit Application</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
