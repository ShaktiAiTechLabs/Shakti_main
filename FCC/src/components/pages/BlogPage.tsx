import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import { BlogPost } from '../../types/pcb';

interface BlogPageProps {
  blogs: BlogPost[];
  onOpenRfq: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ blogs, onOpenRfq }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  if (selectedPost) {
    return (
      <div className="py-12 px-4 md:px-8 max-w-4xl mx-auto space-y-8">
        <button
          onClick={() => setSelectedPost(null)}
          className="inline-flex items-center gap-2 text-xs font-mono text-circuit-gold hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all technical articles</span>
        </button>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
            <span className="text-circuit-gold px-2 py-0.5 rounded bg-circuit-gold/10 border border-circuit-gold/20">
              {selectedPost.category}
            </span>
            <span>{selectedPost.date}</span>
            <span>•</span>
            <span>{selectedPost.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {selectedPost.title}
          </h1>
        </div>

        <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed space-y-6 pt-6 border-t border-substrate-800">
          {selectedPost.content.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Article Footer CTA */}
        <div className="p-6 rounded-xl bg-substrate-900 border border-circuit-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4 mt-12">
          <div>
            <h4 className="text-sm font-bold text-white">Have a project requiring these specifications?</h4>
            <p className="text-xs text-slate-400">Our application engineers are available for Gerber reviews.</p>
          </div>
          <button
            onClick={onOpenRfq}
            className="px-5 py-2.5 rounded-lg bg-circuit-gold text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-circuit-amber transition-all"
          >
            Request Instant Quote
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-circuit-gold/10 border border-circuit-gold/20 text-xs font-mono text-circuit-gold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>PCB ENGINEERING & MANUFACTURING INSIGHTS</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Technical Knowledge Hub
        </h1>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          Deep-dive technical whitepapers on high-density interconnects, DFM design rules, UL flammability compliance, and strategic electronics manufacturing in India.
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((b) => (
          <div
            key={b.id}
            onClick={() => {
              setSelectedPost(b);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="p-6 rounded-2xl bg-substrate-900 border border-substrate-800 hover:border-circuit-gold/50 transition-all flex flex-col justify-between space-y-6 cursor-pointer group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-circuit-gold bg-circuit-gold/10 px-2.5 py-0.5 rounded border border-circuit-gold/20">
                  {b.category}
                </span>
                <span className="text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{b.readTime}</span>
                </span>
              </div>

              <h2 className="text-xl font-bold text-white group-hover:text-circuit-gold transition-colors leading-snug">
                {b.title}
              </h2>

              <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                {b.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-substrate-800 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">{b.date}</span>
              <span className="text-circuit-gold font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Read Whitepaper</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
