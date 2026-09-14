import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe2, 
  Send, 
  Clock, 
  ShieldCheck, 
  Check,
  Building2
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: 'PCB Quote & Technical Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: 'PCB Quote & Technical Inquiry',
        message: ''
      });
    }, 4000);
  };

  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-circuit-gold/10 border border-circuit-gold/20 text-xs font-mono text-circuit-gold">
          <Mail className="w-3.5 h-3.5" />
          <span>DIRECT ENGINEERING & SALES CONTACT</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Connect with Our Engineering Desk
        </h1>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          Whether you need a quick quote on 10-layer HDI prototypes or high-volume contract pricing for defense programs, our technical team is ready to respond.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Information & Facilities (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Manufacturing Facility */}
          <div className="p-6 rounded-2xl bg-substrate-900 border border-substrate-800 space-y-3">
            <div className="flex items-center gap-2.5 text-circuit-gold font-mono text-xs font-bold uppercase">
              <Building2 className="w-4 h-4" />
              <span>Fabrication Headquarters & Plant</span>
            </div>
            <h3 className="text-lg font-bold text-white">
              Fine Circuits and Components Pvt. Ltd.
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Plot No: E/8, (EPIE), GIDC, Manjusar,<br />
              Taluka: Savli, District: Vadodara - 391 775,<br />
              Gujarat, India.
            </p>
            <div className="pt-3 border-t border-substrate-800 space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-circuit-gold shrink-0" />
                <a href="tel:+919998972055" className="hover:text-circuit-gold hover:underline">
                  +91 9998972055
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-circuit-gold shrink-0" />
                <a href="mailto:fcc.sales@fccindia.com" className="hover:text-circuit-gold hover:underline">
                  fcc.sales@fccindia.com
                </a>
              </div>
            </div>
          </div>

          {/* North American Division */}
          <div className="p-6 rounded-2xl bg-substrate-900 border border-substrate-800 space-y-3">
            <div className="flex items-center gap-2.5 text-signal-cyan font-mono text-xs font-bold uppercase">
              <Globe2 className="w-4 h-4" />
              <span>North America Division</span>
            </div>
            <h3 className="text-lg font-bold text-white">
              FCC Electronics
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Elk Grove Village, Illinois, United States.<br />
              Serving US Defense, Telecom, and Industrial OEMs with localized customer support and consignment inventory.
            </p>
          </div>

          {/* Operational Hours */}
          <div className="p-6 rounded-2xl bg-substrate-950 border border-substrate-800 space-y-2 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2 text-white font-bold mb-1">
              <Clock className="w-4 h-4 text-circuit-gold" />
              <span>Engineering Desk Hours:</span>
            </div>
            <div>Monday – Saturday: 08:30 – 19:30 IST</div>
            <div>US Timezone Coverage: 08:00 – 17:00 CST via FCC Electronics</div>
            <div className="text-circuit-gold pt-1">
              24/7 Production Shifts active at Vadodara plant.
            </div>
          </div>
        </div>

        {/* Interactive Contact Form (7 Cols) */}
        <div className="lg:col-span-7 bg-substrate-900 border border-substrate-750 rounded-2xl p-6 md:p-8 shadow-2xl">
          <h2 className="text-xl font-bold text-white mb-1">
            Send a Technical or Sales Inquiry
          </h2>
          <p className="text-xs text-slate-400 mb-6 font-sans">
            Please fill out the form below. All technical submissions are reviewed under strict NDA.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-substrate-850 border border-substrate-700 text-white focus:outline-none focus:border-circuit-gold text-xs font-sans"
                />
              </div>

              <div>
                <label className="block text-slate-300 uppercase tracking-wider mb-1.5">
                  Corporate Email *
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-substrate-850 border border-substrate-700 text-white focus:outline-none focus:border-circuit-gold text-xs font-sans"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 uppercase tracking-wider mb-1.5">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  required
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  placeholder="e.g. Amphenol / BEL"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-substrate-850 border border-substrate-700 text-white focus:outline-none focus:border-circuit-gold text-xs font-sans"
                />
              </div>

              <div>
                <label className="block text-slate-300 uppercase tracking-wider mb-1.5">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  placeholder="+91 / +1 ..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-substrate-850 border border-substrate-700 text-white focus:outline-none focus:border-circuit-gold text-xs font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 uppercase tracking-wider mb-1.5">
                Inquiry Topic
              </label>
              <select
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-substrate-850 border border-substrate-700 text-white focus:outline-none focus:border-circuit-gold text-xs"
              >
                <option value="PCB Quote & Technical Inquiry">PCB Quote & Technical Inquiry</option>
                <option value="High-Density Multilayer Fabrication">High-Density Multilayer Fabrication</option>
                <option value="Teflon / RF Microwave Substrates">Teflon / RF Microwave Substrates</option>
                <option value="Metal Clad (MCPCB) Lighting & Power">Metal Clad (MCPCB) Lighting & Power</option>
                <option value="Vendor Registration / Government Tender">Vendor Registration / Government Tender</option>
                <option value="Careers & Employment">Careers & Employment</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 uppercase tracking-wider mb-1.5">
                Message & Project Specifications *
              </label>
              <textarea
                rows={4}
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Include layer count, board dimensions, target quantity, material requirements, or any specific IPC standards..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-substrate-850 border border-substrate-700 text-white focus:outline-none focus:border-circuit-gold text-xs font-sans"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-lg bg-circuit-gold text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-circuit-copper transition-all shadow-[0_0_20px_rgba(102,143,55,0.3)] flex items-center justify-center gap-2 active:scale-[0.99]"
            >
              <span>Transmit Message to FCC Sales Desk</span>
              <Send className="w-4 h-4" />
            </button>

            {submitted && (
              <div className="p-3 rounded-lg bg-signal-emerald/10 border border-signal-emerald/30 text-signal-emerald text-xs font-mono text-center animate-in fade-in">
                ✓ Message received! An FCC Sales & Application Engineer will contact you within 4 business hours.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
