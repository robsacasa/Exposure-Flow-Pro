
import React from 'react';
import { ExposureSettings } from '../types';

interface Step4ISOProps {
  settings: ExposureSettings;
  onReset: () => void;
  onBack: () => void;
}

const Step4ISO: React.FC<Step4ISOProps> = ({ settings, onReset, onBack }) => {
  const getNoiseStatus = (iso: number) => {
    if (iso <= 400) return { label: 'Clean', color: 'text-emerald-500', bar: 'bg-emerald-500', width: '33%' };
    if (iso <= 1600) return { label: 'Grainy', color: 'text-yellow-500', bar: 'bg-yellow-500', width: '66%' };
    return { label: 'High Noise', color: 'text-primary', bar: 'bg-primary', width: '100%' };
  };

  const status = getNoiseStatus(settings.iso);

  return (
    <div className="flex-1 flex flex-col bg-background-deep overflow-y-auto hide-scrollbar">
      <header className="p-6 pt-12">
        <div className="flex items-center justify-between mb-2">
          <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-background-charcoal">
            <span className="material-icons text-white text-xl">chevron_left</span>
          </button>
          <div className="text-[10px] font-bold tracking-widest uppercase text-zinc-500">Step 4 of 4</div>
          <div className="w-10 h-10 flex items-center justify-center">
            <span className="material-icons text-primary">check_circle</span>
          </div>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mt-4 text-white">Final ISO Balance Flow</h1>
        <p className="text-sm text-zinc-400 mt-1">Exposure FLOW successfully closed.</p>
      </header>

      <main className="flex-1 px-6 space-y-6 pb-40">
        <section className="relative overflow-hidden bg-background-charcoal border border-zinc-800 rounded-2xl p-8 flex flex-col items-center justify-center shadow-2xl">
          <div className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Flow Summary</div>
          <div className="text-7xl font-bold text-primary flex items-baseline tracking-tighter">
            <span className="text-white text-3xl mr-2 font-medium">ISO</span>
            {settings.iso}
          </div>
          <div className="mt-6 px-4 py-1.5 bg-primary text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-lg shadow-primary/20">
            Balanced
          </div>
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 blur-3xl rounded-full"></div>
        </section>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-background-charcoal p-4 rounded-xl border border-zinc-800 text-center">
            <span className="material-symbols-outlined text-primary text-lg mb-1">exposure</span>
            <span className="text-[10px] uppercase text-zinc-500 font-bold block mb-1">EV Value</span>
            <span className="text-lg font-bold text-white">{settings.ev}</span>
          </div>
          <div className="bg-background-charcoal p-4 rounded-xl border border-zinc-800 text-center">
            <span className="material-symbols-outlined text-primary text-lg mb-1">camera</span>
            <span className="text-[10px] uppercase text-zinc-500 font-bold block mb-1">Aperture</span>
            <span className="text-lg font-bold text-white">f/{settings.aperture.toFixed(1)}</span>
          </div>
          <div className="bg-background-charcoal p-4 rounded-xl border border-zinc-800 text-center">
            <span className="material-symbols-outlined text-primary text-lg mb-1">shutter_speed</span>
            <span className="text-[10px] uppercase text-zinc-500 font-bold block mb-1">Shutter</span>
            <span className="text-lg font-bold text-white">{settings.shutter}</span>
          </div>
        </div>

        <section className="space-y-4 bg-background-charcoal p-5 rounded-2xl border border-zinc-800">
          <div className="flex justify-between items-end">
            <div className="flex items-center gap-2">
              <span className="material-icons text-primary text-sm">grain</span>
              <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Sensor Noise Meter</h2>
            </div>
            <span className={`text-[10px] font-bold uppercase ${status.color} bg-white/5 px-2 py-0.5 rounded`}>
              {status.label}
            </span>
          </div>
          <div className="h-3 w-full bg-zinc-900 rounded-full overflow-hidden flex p-0.5">
            <div className={`h-full rounded-full transition-all duration-1000 ${status.bar}`} style={{ width: status.width }}></div>
          </div>
          <div className="flex justify-between text-[10px] font-bold text-zinc-500 tracking-tighter">
            <span className={settings.iso <= 400 ? 'text-emerald-500' : ''}>CLEAN</span>
            <span className={settings.iso > 400 && settings.iso <= 1600 ? 'text-yellow-500' : ''}>GRAINY</span>
            <span className={settings.iso > 1600 ? 'text-primary' : ''}>HIGH NOISE</span>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 px-1">Live Grain Preview</h2>
          <div className="relative aspect-video rounded-2xl overflow-hidden group ring-1 ring-zinc-800">
            <img 
              alt="Camera Sensor Preview" 
              className="w-full h-full object-cover grayscale-[0.2]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDLHJAI1AHjdJK8DZCjn34XjYFFM9ESCPwdhObkYX2hdahMXuIltPvDBarsJ7HF-D8SwVkS7EqPIo20hmw5dfJkVEeS-6_I4JLjRoxCboOA3mCgw0Gk4UYSbBxW4-RFN28Tyuqv6yURb2KQwfyAA-F1Eof7h_Qwlatnqr8CuWjhOgBTHz_9hr8JeF08MsQg6A8OrP9PV37QtvAEOgUwjA0tlzwkbiWZ8Au6S6NaMweUqakMNPRhBwwP-mHLg3rCBT51TQMqkhv8L4" 
            />
            {/* Grain Overlay simulation */}
            <div 
              className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30"
              style={{ 
                backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)',
                opacity: settings.iso / 10000 
              }}
            ></div>
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/80 ios-blur border border-white/10 rounded-lg text-[10px] font-bold text-white flex items-center tracking-widest">
              <span className="material-icons text-[14px] mr-1.5 text-primary">zoom_in</span> 400% CROP
            </div>
            <div className="absolute bottom-4 right-4 flex items-center space-x-2 bg-black/60 px-3 py-1.5 rounded-full ios-blur border border-white/5">
              <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(255,59,48,0.8)]"></div>
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">Live Flow Simulation</span>
            </div>
          </div>
          <p className="text-[11px] text-zinc-500 leading-relaxed px-1">
            Based on the <span className="text-white font-medium">Exposure FLOW</span> methodology at <span className="text-primary font-bold">ISO {settings.iso}</span>, 
            noise is {settings.iso > 1600 ? 'significantly present' : 'manageable'} and consistent with high-end digital sensor responses.
          </p>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-6 bg-gradient-to-t from-background-deep via-background-deep to-transparent pt-10 z-50">
        <button className="w-full bg-primary active:bg-red-700 text-white font-black py-5 rounded-2xl shadow-2xl shadow-primary/30 flex items-center justify-center space-x-3 active:scale-[0.97] transition-all">
          <span className="material-icons">check_circle</span>
          <span className="uppercase tracking-[0.2em] text-sm">Capture Simulation</span>
        </button>
        <div className="mt-4 text-center">
          <button 
            onClick={onReset}
            className="text-[10px] font-black text-zinc-600 uppercase tracking-widest hover:text-white transition-colors"
          >
            Reset Exposure FLOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4ISO;
