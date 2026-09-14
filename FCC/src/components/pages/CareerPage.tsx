import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  UploadCloud, 
  Check, 
  Sparkles,
  Users
} from 'lucide-react';
import { JobOpening } from '../../types/pcb';

interface CareerPageProps {
  jobs: JobOpening[];
  onOpenJobApply: (jobTitle?: string) => void;
}

export const CareerPage: React.FC<CareerPageProps> = ({ jobs, onOpenJobApply }) => {
  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-circuit-gold/10 border border-circuit-gold/20 text-xs font-mono text-circuit-gold">
          <Briefcase className="w-3.5 h-3.5" />
          <span>JOIN THE FCC ENGINEERING TEAM</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Build the Future of High-Tech Electronics
        </h1>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          At Fine Circuits and Components Private Limited, we offer a collaborative engineering culture, advanced German and Japanese machinery to work with, and opportunities to shape aerospace and defense hardware.
        </p>
      </div>

      {/* Workplace Culture & Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-substrate-900 border border-substrate-800 space-y-2">
          <div className="text-circuit-gold font-mono text-sm font-bold">01. ADVANCED TOOLING</div>
          <h3 className="text-base font-bold text-white">State-of-the-Art Technology</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Gain hands-on experience operating multi-million dollar Schmoll CNC machines, Laser Direct Imaging (LDI), and automated vacuum epoxy via plugging lines.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-substrate-900 border border-substrate-800 space-y-2">
          <div className="text-circuit-gold font-mono text-sm font-bold">02. CAREER GROWTH</div>
          <h3 className="text-base font-bold text-white">Mentorship & Continuous Learning</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            We subsidize IPC certifications (IPC-A-600, IPC-6012), technical workshops, and internal leadership tracks across pre-production and quality management.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-substrate-900 border border-substrate-800 space-y-2">
          <div className="text-circuit-gold font-mono text-sm font-bold">03. GLOBAL IMPACT</div>
          <h3 className="text-base font-bold text-white">Aerospace & Defense Missions</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Take pride in building hardware that powers critical defense avionics, life-saving medical imaging devices, and high-speed communications infrastructure.
          </p>
        </div>
      </div>

      {/* Open Positions List */}
      <div className="space-y-6 pt-6 border-t border-substrate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Current Open Roles at Manjusar Plant
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Select a position to view requirements or submit an open unsolicited application.
            </p>
          </div>

          <button
            onClick={() => onOpenJobApply('General Unsolicited Application')}
            className="self-start sm:self-auto px-4 py-2 rounded-lg bg-substrate-850 border border-circuit-gold/30 text-circuit-gold text-xs font-mono font-semibold hover:bg-circuit-gold hover:text-slate-950 transition-all"
          >
            Submit General Resume
          </button>
        </div>

        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="p-6 rounded-2xl bg-substrate-900 border border-substrate-800 hover:border-circuit-gold/50 transition-all space-y-4"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-circuit-gold font-semibold">
                      {job.department}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs font-mono text-slate-400">
                      {job.experience}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {job.title}
                  </h3>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right hidden sm:block text-xs font-mono text-slate-400">
                    <div>{job.location}</div>
                    <div className="text-slate-500">{job.type}</div>
                  </div>
                  <button
                    onClick={() => onOpenJobApply(job.title)}
                    className="px-5 py-2.5 rounded-lg bg-circuit-gold text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-circuit-amber transition-all flex items-center gap-1.5"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {job.description}
              </p>

              <div className="pt-3 border-t border-substrate-800">
                <h4 className="text-[11px] font-mono uppercase text-slate-400 mb-2">Key Requirements:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                  {job.requirements.map((req, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-circuit-gold shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
