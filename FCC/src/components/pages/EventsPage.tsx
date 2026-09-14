import React from 'react';
import { ShieldCheck, Heart, Award, Activity, Flag } from 'lucide-react';

export const EventsPage: React.FC = () => {
  const events = [
    {
      title: 'Fire & Safety Drills and Preparedness',
      icon: ShieldCheck,
      category: 'Workplace Safety',
      image: '/assets/events/IMG_20250205_123439-min-scaled.jpg',
      description: 'Comprehensive annual fire evacuation drills, chemical emergency mitigation simulations, and active equipment training to ensure 100% life-safety readiness for our 150+ plant technicians.',
      highlights: ['Automated sprinkler & smoke sensor validation', 'Hands-on CO2 & chemical extinguisher training', 'Emergency evacuation time under 90 seconds']
    },
    {
      title: 'First-Aid & Emergency Medical Response',
      icon: Heart,
      category: 'Health & Wellness',
      image: '/assets/events/IMG_20250205_150006-min-scaled.jpg',
      description: 'Certified medical training programs equipping factory supervisors and machine operators with CPR, wound trauma management, and chemical splash protocols.',
      highlights: ['Certified by Red Cross / Industrial Safety Council', '24/7 dedicated on-site medical dispensary', 'Quarterly refresher workshops for all shifts']
    },
    {
      title: 'Safety, Environment & Quality (SEQ) Program',
      icon: Award,
      category: 'Sustainability',
      image: '/assets/events/IMG_20250203_142320-min-scaled.jpg',
      description: 'Our ongoing corporate initiative integrating zero-liquid-discharge (ZLD) effluent treatment, green chemistry recycling, and ISO 14001 environmental conservation standards.',
      highlights: ['Zero-Liquid Discharge water recycling', '100% lead-free waste segregation', 'Energy-efficient LED and compressed air systems']
    },
    {
      title: 'Annual FCC Fitness Marathon',
      icon: Activity,
      category: 'Employee Well-being',
      image: '/assets/events/Life-at-Fineline-Marathon-1.png',
      description: 'An annual distance running and community fitness event bringing together engineers, operators, and leadership to foster teamwork, endurance, and physical health.',
      highlights: ['10K, 5K and 3K categories', 'Over 200 participants from across Shakti Group', 'Promotes active healthy lifestyle across the workforce']
    },
    {
      title: 'Republic Day & National Celebrations',
      icon: Flag,
      category: 'Community & Culture',
      image: '/assets/events/Life-at-Fineline-Republic-1.png',
      description: 'Marked annually at our GIDC Manjusar headquarters with flag hoisting ceremonies, cultural performances, employee recognition awards, and fellowship gatherings.',
      highlights: ['Long-service awards for veteran technicians', 'Family open-house and factory walk-throughs', 'Celebration of Indian manufacturing excellence']
    }
  ];

  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-circuit-gold/10 border border-circuit-gold/20 text-xs font-mono text-circuit-gold">
          <Activity className="w-3.5 h-3.5" />
          <span>LIFE AT FCC & COMMUNITY ENGAGEMENT</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Safety, Environment & Corporate Culture
        </h1>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          At FCC India, our people are the foundation of our engineering excellence. We invest proactively in employee well-being, rigorous environmental stewardship, and zero-accident safety protocols.
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((ev, i) => {
          const Icon = ev.icon;
          return (
            <div
              key={i}
              className="rounded-2xl bg-substrate-900 border border-substrate-800 hover:border-circuit-gold/40 transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Event Image Banner */}
              <div className="relative h-48 bg-substrate-950 overflow-hidden border-b border-substrate-800">
                <img
                  src={ev.image}
                  alt={ev.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to stylized substrate if image fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-substrate-900 via-transparent to-transparent opacity-60" />
                <span className="absolute top-3 right-3 text-[11px] font-mono text-circuit-gold bg-substrate-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-circuit-gold/30">
                  {ev.category}
                </span>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-circuit-gold/10 border border-circuit-gold/20 flex items-center justify-center text-circuit-gold shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-white leading-snug">
                      {ev.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {ev.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-substrate-800 text-xs font-mono text-slate-400">
                    {ev.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-circuit-gold font-bold">›</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-substrate-800 text-[11px] font-mono text-circuit-gold flex items-center justify-between">
                  <span>Continuous Corporate Program</span>
                  <span className="text-slate-500">Verified Plant Event</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
