import React from 'react';
import { Calendar, MapPin, Users, Cpu } from 'lucide-react';

export const CounterStats: React.FC = () => {
  const stats = [
    {
      value: '24+',
      label: 'Years of Operation',
      sub: 'Founded in 2001 (EOU)',
      icon: Calendar
    },
    {
      value: '60,000',
      label: 'Sq. Ft. Fabrication Facility',
      sub: 'GIDC Manjusar, Vadodara',
      icon: MapPin
    },
    {
      value: '5,000+',
      label: 'Sq. Meters / Month Capacity',
      sub: 'High-Volume Scalability',
      icon: Cpu
    },
    {
      value: '1,450+',
      label: 'Enterprise Clients Worldwide',
      sub: 'USA, Europe & India Tier-1s',
      icon: Users
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-substrate-900 border-t border-b border-substrate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div 
              key={i} 
              className="p-6 rounded-xl bg-substrate-950/60 border border-substrate-800 text-center space-y-2 hover:border-circuit-gold/40 transition-colors"
            >
              <div className="w-10 h-10 mx-auto rounded-lg bg-circuit-gold/10 border border-circuit-gold/20 flex items-center justify-center text-circuit-gold mb-3">
                <Icon className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 font-mono">
                {stat.sub}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
