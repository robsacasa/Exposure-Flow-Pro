
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
      title: "Subject Isolation", 
      text: "The wide f/2.8 aperture uses a shallow depth of field to make your subject pop against the background."
    };
    if (val <= 8) return { 
      title: "Balanced Detail", 
      text: "A versatile choice for street photography, providing clarity while maintaining some focus fall-off."
    };
    return { 
      title: "Deep Focus", 
      text: "Maximizes depth of field. Ideal for landscapes where everything from foreground to background must be sharp."
    };
  };

  const outcome = getOutcome(aperture);

  return (
    <div className="flex-1 flex flex-col">
      <header className="px-6 pt-4 pb-2">
        <div className="flex items-center justify-between mb-4">
          <button onClick={onBack} className="w-10 h-10 rounded-full bg-background-charcoal flex items-center justify-center text-white">
            <span className="material-icons text-xl">arrow_back_ios_new</span>
          </button>
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Step 2 of 5</span>
            <h1 className="text-sm font-bold uppercase tracking-tight text-white">Creative Aperture</h1>
          </div>
          <button className="w-10 h-10 rounded-full bg-background-charcoal flex items-center justify-center text-primary">
            <span className="material-icons text-xl">help_outline</span>
          </button>
        </div>
        <div className="w-full h-1 bg-background-charcoal rounded-full overflow-hidden">
          <div className="w-2/5 h-full bg-primary"></div>
        </div>
      </header>

      <div className="relative flex-1 px-4 mt-2">
        <div className="relative w-full h-[340px] rounded-3xl overflow-hidden shadow-2xl bg-background-charcoal">
          <img 
            className={`w-full h-full object-cover transition-all duration-700 ${aperture <= 2.8 ? 'blur-0' : 'blur-[2px]'}`}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP7DPXg0ZyOFdrDNsQ2lrj3YJPOYQSBx1OFzEY4TU0FdDT1pgRctuL1ng9KRzA965jNrXSRZ0WYX00LHb6ulZgr_VwDZjJIBLKuBGNxkkCpd0S5ygKgQ8voeFaaaQoltUSJjFfLVTODk6jRjTOpxviHludU9twwz1WdSq6E68oZXh8r3AnATE1rZBohc1xkAnNIn2pZZeYyjoqC8G4XvBSA0ctVL7JNFa5FTjXcqBmYPeghZ4awaLs8ummVbjuYHQDe3OqKHLPEZA" 
            alt="Focus Preview"
          />
          {/* Depth of Field Visualization Overlays */}
          <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${aperture <= 2.8 ? 'opacity-0' : 'opacity-30'}`}></div>
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-48 h-64 border-2 border-primary/40 rounded-xl flex items-center justify-center">
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary"></div>
              </div>
            </div>
          </div>
          <div className="absolute top-4 left-4 ios-blur bg-black/60 px-3 py-1.5 rounded-full text-[10px] font-bold text-white flex items-center gap-2 border border-white/10">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#E63946]"></span>
            LIVE SIMULATION
          </div>
          <div className="absolute bottom-4 left-4 ios-blur bg-black/60 px-2 py-1 rounded text-[9px] font-bold text-primary border border-primary/30">
            FOCUS PLANE: ACTIVE
          </div>
        </div>

        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-background-deep rounded-full border-4 border-background-charcoal flex items-center justify-center shadow-2xl z-20">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <svg 
              className="w-full h-full fill-primary/20 stroke-primary stroke-[2px] transition-transform duration-500" 
              viewBox="0 0 100 100"
              style={{ transform: `rotate(${aperture * 10}deg) scale(${1 - (aperture / 40)})` }}
            >
              <circle className="fill-primary" cx="50" cy="50" r="12"></circle>
              <path d="M50 5 L65 40 L95 50 L65 60 L50 95 L35 60 L5 50 L35 40 Z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-background-charcoal/80 ios-blur rounded-t-[3rem] p-6 pt-12 flex flex-col gap-6 border-t border-white/5">
        <div className="text-center">
          <div className="text-[10px] uppercase font-bold text-zinc-500 mb-1 tracking-widest">Active Aperture</div>
          <div className="text-5xl font-bold flex justify-center items-baseline gap-1">
            <span className="text-primary text-3xl italic">f</span>
            <span className="text-white">/{aperture.toFixed(1)}</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center px-2 text-[10px] font-bold text-zinc-400">
            <div className={`flex flex-col items-center gap-1 ${aperture < 4 ? 'text-primary' : ''}`}>
              <span className="material-symbols-outlined text-lg">blur_on</span>
              <span className="tracking-tighter uppercase">Shallow DOF</span>
            </div>
            <div className={`flex flex-col items-center gap-1 ${aperture > 11 ? 'text-primary' : ''}`}>
              <span className="material-symbols-outlined text-lg">grid_view</span>
              <span className="tracking-tighter uppercase">Deep DOF</span>
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
          <div className="flex justify-between px-2 text-[9px] font-bold text-zinc-500">
            {APERTURES.map(val => (
              <span key={val} className={aperture === val ? 'text-primary scale-125' : ''}>{val}</span>
            ))}
          </div>
        </div>

        <div className="bg-background-deep/50 rounded-2xl p-5 border border-white/10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-12 h-12 bg-primary/10 rounded-bl-full flex items-start justify-end p-2">
            <span className="material-symbols-outlined text-primary text-base">auto_awesome</span>
          </div>
          <h3 className="text-xs font-bold text-primary uppercase mb-2">Creative Vision</h3>
          <p className="text-[13px] font-medium leading-relaxed text-white">
            "{outcome.title}" — {outcome.text}
          </p>
        </div>

        <button 
          onClick={onNext}
          className="w-full bg-primary hover:bg-red-600 text-white font-bold py-4 rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center gap-3 transition-all active:scale-95"
        >
          CONTINUE TO SHUTTER
          <span className="material-icons text-sm">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default Step2Aperture;
