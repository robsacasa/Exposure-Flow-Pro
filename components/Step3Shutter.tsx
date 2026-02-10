
import React from 'react';
import { MOTION_TARGETS, SHUTTER_PRESETS } from '../constants';

interface Step3ShutterProps {
  shutter: string;
  shutterVal: number;
  onShutterChange: (label: string, val: number) => void;
  onNext: () => void;
  onBack: () => void;
}

const Step3Shutter: React.FC<Step3ShutterProps> = ({ shutter, shutterVal, onShutterChange, onNext, onBack }) => {
  return (
    <div className="flex-1 flex flex-col bg-background-deep">
      <header className="px-6 pt-4 pb-2">
        <div className="flex items-center justify-between mb-4">
          <button onClick={onBack} className="w-10 h-10 rounded-full bg-background-charcoal flex items-center justify-center text-white">
            <span className="material-icons text-xl">arrow_back_ios_new</span>
          </button>
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-widest text-accent-red font-bold mb-1">Step 3 of 5</span>
            <h1 className="text-sm font-bold uppercase tracking-tight text-white">Control Motion Flow</h1>
          </div>
          <button className="w-10 h-10 rounded-full bg-background-charcoal flex items-center justify-center text-accent-red">
            <span className="material-icons text-xl">help_outline</span>
          </button>
        </div>
        <div className="flex gap-2 h-1.5">
          <div className="flex-1 bg-accent-red/30 rounded-full"></div>
          <div className="flex-1 bg-accent-red/30 rounded-full"></div>
          <div className="flex-1 bg-accent-red rounded-full shadow-[0_0_8px_rgba(255,69,58,0.6)]"></div>
          <div className="flex-1 bg-white/10 rounded-full"></div>
          <div className="flex-1 bg-white/10 rounded-full"></div>
        </div>
      </header>

      <div className="px-6 mt-4">
        <p className="text-xs text-white/50 mb-6">Identify your subject speed to determine the "Frozen" shutter baseline.</p>
        
        <div className="grid grid-cols-2 gap-3 mb-8">
          {MOTION_TARGETS.map(target => (
            <button 
              key={target.id}
              onClick={() => {
                const preset = SHUTTER_PRESETS.find(p => p.label === target.shutter);
                if (preset) onShutterChange(preset.label, preset.value);
              }}
              className={`p-4 rounded-2xl flex flex-col items-center gap-2 text-center transition-all border ${shutter === target.shutter ? 'bg-background-charcoal border-accent-red' : 'bg-background-charcoal/40 border-white/5'}`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-1 ${shutter === target.shutter ? 'bg-accent-red/10' : 'bg-white/5'}`}>
                <span className={`material-symbols-outlined text-3xl ${shutter === target.shutter ? 'text-accent-red' : 'text-white/40'}`}>{target.icon}</span>
              </div>
              <span className={`text-xs font-bold uppercase tracking-tighter leading-tight ${shutter === target.shutter ? 'text-white' : 'text-white/60'}`}>{target.name}</span>
              <span className={`text-[9px] font-bold uppercase ${shutter === target.shutter ? 'text-accent-red' : 'text-white/30'}`}>{target.speed}</span>
            </button>
          ))}
        </div>

        <div className="bg-background-charcoal border border-white/10 rounded-3xl p-6 mb-8 relative overflow-hidden">
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-accent-red/5 blur-3xl rounded-full"></div>
          <div className="flex flex-col items-center text-center">
            <span className="text-[10px] font-bold text-accent-red uppercase tracking-widest mb-4">Recommended Flow Baseline</span>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-6xl font-black text-white italic tracking-tighter">{shutter}</span>
              <span className="text-2xl font-bold text-accent-red italic">s</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full mb-6">
              <span className="material-icons text-accent-red text-xs">bolt</span>
              <span className="text-[10px] font-bold text-white/60 uppercase">Maximum Freeze</span>
            </div>
            <div className="w-full h-24 bg-black rounded-xl border border-white/5 overflow-hidden relative flex items-center justify-center">
              <img 
                alt="Motion visual" 
                className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJY5mGvLejNUpeAPcRXPwWvRzXULagJ6U2y1Kzod2RNDK_6WItretqo6mP4xotzAPOF81iszKE9AzBIwwlo8f-AKkAeQtlx7wexi8Hrminf3pG8usNZjD5giEWfTY6-UIZpueaa3LQf5oDuFGXXy_f9X3ZMPwFlF4liS0QdoH4EedqMbkW4GJchwGcPVdmVG7ZX2mOi6mggT65HWltEYRih7uAhvLFMWDfnSgrqcC5kqpiRaBmCrZTnPX7NrTrREfvLACyCaV0xE4" 
              />
              <div className="relative z-10 flex flex-col items-center">
                <div className="h-0.5 w-12 bg-accent-red mb-2 animate-pulse"></div>
                <p className="text-[10px] text-white font-medium uppercase tracking-[0.2em]">Flow Stabilized</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-accent-red/5 border border-accent-red/20 rounded-2xl p-4 flex gap-4">
          <div className="w-10 h-10 rounded-full bg-accent-red/20 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-accent-red">speed</span>
          </div>
          <div>
            <h4 className="text-xs font-bold mb-1 text-white">The "FLOW" Concept</h4>
            <p className="text-[11px] leading-relaxed text-white/60">
              Your selection of <span className="text-white font-bold">{shutter}s</span> provides the optimal baseline to avoid micro-blur for your target subject.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-auto p-6 bg-gradient-to-t from-black via-black/90 to-transparent">
        <button 
          onClick={onNext}
          className="w-full bg-accent-red text-white h-14 rounded-2xl font-bold text-sm shadow-[0_8px_24px_rgba(255,69,58,0.25)] flex items-center justify-center gap-2 active:scale-95 transition-all"
        >
          <span>Lock Baseline</span>
          <span className="material-icons text-sm">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default Step3Shutter;
