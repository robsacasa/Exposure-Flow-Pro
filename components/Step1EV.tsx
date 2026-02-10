
import React from 'react';
import { SCENARIOS } from '../constants';

interface Step1EVProps {
  ev: number;
  onEvChange: (ev: number) => void;
  onNext: () => void;
}

const Step1EV: React.FC<Step1EVProps> = ({ ev, onEvChange, onNext }) => {
  const currentScenario = SCENARIOS.find(s => Math.abs(s.ev - ev) < 1) || SCENARIOS[0];

  return (
    <div className="flex-1 flex flex-col">
      <header className="px-6 pt-8 pb-4">
        <div className="flex justify-between items-center mb-8">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-ui-grey">
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">01 / 05</div>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-ui-grey">
            <span className="material-symbols-outlined text-xl text-white/60">help</span>
          </button>
        </div>
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Exposure Value</h1>
          <p className="text-xs text-white/50 uppercase tracking-widest font-medium">Ambient Light Assessment</p>
        </div>
      </header>

      <main className="flex-1 flex flex-col justify-between py-6 px-6 relative">
        <div className="text-center pt-4">
          <div className="inline-flex flex-col items-center">
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] mb-2">Measured Index</span>
            <div className="flex items-baseline gap-2">
              <span className="text-7xl font-bold tracking-tighter italic text-white">{ev}</span>
              <span className="text-xl font-bold text-primary italic">EV</span>
            </div>
          </div>
        </div>

        <div className="bg-background-charcoal border-l-4 border-primary p-5 shadow-xl relative overflow-hidden transition-all duration-300">
          <div className="absolute -top-4 -right-4 opacity-[0.05] scale-150">
            <span className="material-symbols-outlined text-9xl">{currentScenario.icon}</span>
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10">
                <span className="material-symbols-outlined text-primary text-2xl">{currentScenario.icon}</span>
              </div>
              <div>
                <h3 className="font-bold text-base tracking-wide uppercase">{currentScenario.name}</h3>
                <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{currentScenario.subtitle}</p>
              </div>
            </div>
            <p className="text-xs text-white/60 leading-relaxed font-light">
              {currentScenario.description}
            </p>
          </div>
        </div>

        {/* Dial UI - Simplified for selection */}
        <div className="relative w-full py-10 flex flex-col items-center">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-primary z-20">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary transform rotate-45"></div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary transform rotate-45"></div>
          </div>
          <div className="w-full overflow-x-auto hide-scrollbar dial-gradient snap-x snap-mandatory flex px-[45%]">
            <div className="flex items-end gap-6 py-4">
              {[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(val => (
                <button 
                  key={val} 
                  onClick={() => onEvChange(val)}
                  className={`flex flex-col items-center transition-all duration-300 snap-center min-w-[40px] ${ev === val ? 'opacity-100 scale-110' : 'opacity-30 scale-90'}`}
                >
                  <div className={`w-0.5 bg-white mb-2 ${ev === val ? 'h-12 bg-primary' : 'h-6 bg-white/50'}`}></div>
                  <span className={`text-xs font-bold font-mono ${ev === val ? 'text-primary' : 'text-white'}`}>{val}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-sm overflow-hidden h-28 border border-white/10 group relative">
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          <img alt="Simulation" className="w-full h-full object-cover transition-opacity duration-500" src={currentScenario.imageUrl} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
          <div className="absolute bottom-2 left-3 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
            <span className="text-[9px] text-white/70 font-bold uppercase tracking-[0.2em]">Real-time simulation</span>
          </div>
        </div>
      </main>

      <footer className="p-6 bg-background-charcoal border-t border-white/5">
        <button 
          onClick={onNext}
          className="w-full py-5 bg-primary text-white font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 active:brightness-90 transition-all"
        >
          Lock Exposure
          <span className="material-symbols-outlined text-lg">check_circle</span>
        </button>
      </footer>
    </div>
  );
};

export default Step1EV;
