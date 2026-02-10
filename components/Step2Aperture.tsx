
import React from 'react';
import { APERTURES } from '../constants';

interface Step2ApertureProps {
  aperture: number;
  onApertureChange: (a: number) => void;
  onNext: () => void;
  onBack: () => void;
}

const Step2Aperture: React.FC<Step2ApertureProps> = ({ aperture, onApertureChange, onNext, onBack }) => {
  const getOutcome = (val: number) => {
    if (val <= 2.8) return { 
      title: "Maximum Bokeh", 
      text: "The wide f/" + val + " aperture creates a creamy background blur, isolating your subject with professional precision."
    };
    if (val <= 8) return { 
      title: "Standard Definition", 
      text: "A balanced choice for environmental portraits, providing sharp details while maintaining depth separation."
    };
    return { 
      title: "Infinite Focus", 
      text: "Maximizes depth of field. Every element from the foreground to the horizon is rendered in clinical detail."
    };
  };

  const outcome = getOutcome(aperture);

  // Dynamic blur calculation: lower aperture = higher blur
  // Nonlinear scaling for more realistic bokeh feeling
  const blurAmount = Math.max(0, Math.pow((22 - aperture) / 20.6, 1.8) * 20);

  return (
    <div className="flex-1 flex flex-col">
      <header className="px-6 pt-4 pb-2">
        <div className="flex items-center justify-between mb-4">
          <button onClick={onBack} className="w-10 h-10 rounded-full bg-background-charcoal flex items-center justify-center text-white">
            <span className="material-icons text-xl">arrow_back_ios_new</span>
          </button>
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Step 2 of 5</span>
            <h1 className="text-sm font-bold uppercase tracking-tight text-white">Depth of Field Flow</h1>
          </div>
          <button className="w-10 h-10 rounded-full bg-background-charcoal flex items-center justify-center text-primary">
            <span className="material-icons text-xl">help_outline</span>
          </button>
        </div>
        <div className="w-full h-1 bg-background-charcoal rounded-full overflow-hidden">
          <div className="w-2/5 h-full bg-primary transition-all duration-500"></div>
        </div>
      </header>

      <div className="relative flex-1 px-4 mt-2">
        <div className="relative w-full h-[340px] rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/5">
          {/* Background Layer - This gets blurred */}
          <img 
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out"
            style={{ filter: `blur(${blurAmount}px) brightness(0.7)` }}
            src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=800" 
            alt="Simulation Background"
          />
          
          {/* Subject Layer - This stays sharp */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Foreground Subject: A sharp person or object icon/graphic */}
                <div className="z-10 relative flex flex-col items-center">
                   <div className="w-32 h-48 bg-zinc-900/40 rounded-full border border-white/20 ios-blur flex items-center justify-center shadow-2xl transition-transform duration-500 hover:scale-105">
                     <span className="material-symbols-outlined text-6xl text-white opacity-90">person</span>
                   </div>
                   <div className="mt-2 bg-primary px-2 py-0.5 rounded text-[9px] font-bold text-white uppercase tracking-widest shadow-lg">
                     Subject in Focus
                   </div>
                </div>

                {/* Focus frame visualization */}
                <div className="absolute w-48 h-64 border-2 border-primary/30 rounded-xl pointer-events-none">
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary shadow-[0_0_15px_rgba(227,6,19,0.4)]"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary shadow-[0_0_15px_rgba(227,6,19,0.4)]"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary shadow-[0_0_15px_rgba(227,6,19,0.4)]"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary shadow-[0_0_15px_rgba(227,6,19,0.4)]"></div>
                </div>
            </div>
          </div>

          <div className="absolute top-4 left-4 ios-blur bg-black/60 px-3 py-1.5 rounded-full text-[10px] font-bold text-white flex items-center gap-2 border border-white/10 z-20">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#E63946]"></span>
            REAL-TIME OPTICS
          </div>
          
          <div className="absolute bottom-4 left-4 ios-blur bg-black/60 px-3 py-1 rounded text-[9px] font-bold text-white/70 border border-white/10 flex items-center gap-2 z-20">
            <span className="material-symbols-outlined text-[12px] text-primary">lens_blur</span>
            DOF: {aperture <= 2.8 ? 'SHALLOW' : aperture >= 11 ? 'DEEP' : 'MEDIUM'}
          </div>
        </div>

        {/* Floating Dial Icon */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-background-deep rounded-full border-4 border-background-charcoal flex items-center justify-center shadow-2xl z-30">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <svg 
              className="w-full h-full fill-primary/20 stroke-primary stroke-[1.5px] transition-transform duration-700 ease-in-out" 
              viewBox="0 0 100 100"
              style={{ transform: `rotate(${(22-aperture) * 15}deg)` }}
            >
              <circle className="fill-background-deep stroke-primary/30" cx="50" cy="50" r="45"></circle>
              <g className="transition-all duration-500" style={{ transformOrigin: 'center', transform: `scale(${0.2 + (aperture/30)})` }}>
                <path d="M50 10 L80 35 L80 65 L50 90 L20 65 L20 35 Z" fill="none" stroke="currentColor" className="text-primary" strokeWidth="2"></path>
              </g>
              <circle className="fill-primary shadow-lg" cx="50" cy="50" r="4"></circle>
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-background-charcoal/80 ios-blur rounded-t-[3rem] p-6 pt-12 flex flex-col gap-6 border-t border-white/5 mt-4">
        <div className="text-center">
          <div className="text-[10px] uppercase font-bold text-zinc-500 mb-1 tracking-widest">Active Aperture</div>
          <div className="text-5xl font-bold flex justify-center items-baseline gap-1">
            <span className="text-primary text-3xl italic font-serif">f</span>
            <span className="text-white tabular-nums">{aperture.toFixed(1)}</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center px-2 text-[10px] font-bold text-zinc-400">
            <div className={`flex flex-col items-center gap-1 transition-colors ${aperture <= 2.8 ? 'text-primary' : ''}`}>
              <span className="material-symbols-outlined text-lg">blur_on</span>
              <span className="tracking-tighter uppercase">Wide (Bokeh)</span>
            </div>
            <div className={`flex flex-col items-center gap-1 transition-colors ${aperture >= 11 ? 'text-primary' : ''}`}>
              <span className="material-symbols-outlined text-lg">grid_view</span>
              <span className="tracking-tighter uppercase">Narrow (Sharp)</span>
            </div>
          </div>
          
          <div className="px-2">
            <input 
              type="range" 
              className="w-full h-1.5 bg-background-deep rounded-lg appearance-none cursor-pointer accent-primary border border-white/5"
              min="0"
              max={APERTURES.length - 1}
              step="1"
              value={APERTURES.indexOf(aperture)}
              onChange={(e) => onApertureChange(APERTURES[parseInt(e.target.value)])}
            />
          </div>
          <div className="flex justify-between px-2 text-[9px] font-bold text-zinc-500 font-mono">
            {APERTURES.map(val => (
              <span key={val} className={`transition-all ${aperture === val ? 'text-primary scale-125 font-black' : ''}`}>{val}</span>
            ))}
          </div>
        </div>

        <div className="bg-background-deep/50 rounded-2xl p-5 border border-white/10 shadow-lg relative overflow-hidden min-h-[100px]">
          <div className="absolute top-0 right-0 w-12 h-12 bg-primary/10 rounded-bl-full flex items-start justify-end p-2">
            <span className="material-symbols-outlined text-primary text-base">auto_awesome</span>
          </div>
          <h3 className="text-[10px] font-black text-primary uppercase mb-2 tracking-[0.15em]">Visual Quality</h3>
          <p className="text-[13px] font-medium leading-relaxed text-white">
            <span className="text-primary font-bold">"{outcome.title}"</span> — {outcome.text}
          </p>
        </div>

        <button 
          onClick={onNext}
          className="group w-full bg-primary hover:bg-red-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
        >
          <span className="tracking-[0.2em] uppercase text-xs">Lock Aperture</span>
          <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">lock</span>
        </button>
      </div>
    </div>
  );
};

export default Step2Aperture;
