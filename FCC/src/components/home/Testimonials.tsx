import React from 'react';
import { Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      quote: "Fine Circuits and Components has been our long-standing partner since 2008. Their turnaround speed on complex multilayer builds and consistent customer service make them our premier PCB supplier.",
      author: "Director of Hardware Engineering",
      company: "North American Power Systems OEM",
      location: "Chicago, IL, USA"
    },
    {
      quote: "Outstanding quality, zero-defect delivery, and a pleasure to work with. FCC India has consistently protected our delivery schedules during urgent defense project rollouts.",
      author: "Senior Procurement Specialist",
      company: "Aerospace & Defense Contractor",
      location: "Bengaluru, India"
    },
    {
      quote: "The team's DFM feedback during our initial high-frequency Rogers design saved us thousands in redesign tooling. Their technical competence is world class.",
      author: "Principal RF Systems Architect",
      company: "Industrial Telecommunications Brand",
      location: "Germany"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-substrate-950 border-t border-substrate-800">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase text-circuit-gold tracking-widest">
            CLIENT SATISFACTION & REPUTATION
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Trusted by Procurement & Hardware Leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-substrate-900 border border-substrate-800 flex flex-col justify-between space-y-6 hover:border-circuit-gold/40 transition-colors"
            >
              <div>
                <div className="flex items-center gap-1 text-circuit-gold mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-circuit-gold text-circuit-gold" />
                  ))}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-substrate-800 text-xs">
                <strong className="text-white block font-sans">
                  {rev.author}
                </strong>
                <span className="text-slate-400 font-mono text-[11px] block">
                  {rev.company}
                </span>
                <span className="text-circuit-gold font-mono text-[10px]">
                  {rev.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
