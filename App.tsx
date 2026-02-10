
import React, { useState, useEffect, useCallback } from 'react';
import { AppStep, ExposureSettings } from './types';
import { SCENARIOS, APERTURES, SHUTTER_PRESETS } from './constants';
import Step1EV from './components/Step1EV';
import Step2Aperture from './components/Step2Aperture';
import Step3Shutter from './components/Step3Shutter';
import Step4ISO from './components/Step4ISO';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>('EV');
  const [settings, setSettings] = useState<ExposureSettings>({
    ev: 15,
    aperture: 2.8,
    shutter: '1/1000',
    shutterVal: 1/1000,
    iso: 100
  });

  // Calculation for ISO based on EV, Aperture, and Shutter
  // ISO = (100 * N^2) / (t * 2^EV)
  const calculateISO = useCallback((ev: number, n: number, t: number) => {
    const rawISO = (100 * Math.pow(n, 2)) / (t * Math.pow(2, ev));
    // Round to nearest standard ISO stop (roughly)
    const standardISOs = [50, 100, 200, 400, 800, 1600, 3200, 6400, 12800, 25600, 51200];
    const closest = standardISOs.reduce((prev, curr) => 
      Math.abs(curr - rawISO) < Math.abs(prev - rawISO) ? curr : prev
    );
    return closest;
  }, []);

  useEffect(() => {
    const newIso = calculateISO(settings.ev, settings.aperture, settings.shutterVal);
    setSettings(prev => ({ ...prev, iso: newIso }));
  }, [settings.ev, settings.aperture, settings.shutterVal, calculateISO]);

  const handleNext = () => {
    if (step === 'EV') setStep('APERTURE');
    else if (step === 'APERTURE') setStep('SHUTTER');
    else if (step === 'SHUTTER') setStep('ISO');
    else if (step === 'ISO') setStep('COMPLETE');
  };

  const handleBack = () => {
    if (step === 'APERTURE') setStep('EV');
    else if (step === 'SHUTTER') setStep('APERTURE');
    else if (step === 'ISO') setStep('SHUTTER');
  };

  const reset = () => {
    setStep('EV');
    setSettings({
      ev: 15,
      aperture: 2.8,
      shutter: '1/1000',
      shutterVal: 1/1000,
      iso: 100
    });
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center p-0 md:p-8">
      <div className="w-full max-w-[390px] h-[844px] bg-background-deep text-white overflow-hidden relative border border-white/10 shadow-2xl flex flex-col md:rounded-[3rem] md:border-[8px] md:border-background-charcoal">
        
        {/* Status Bar */}
        <div className="px-8 pt-4 flex justify-between items-center text-[11px] font-medium opacity-80 z-50">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[14px]">signal_cellular_alt</span>
            <span className="material-symbols-outlined text-[14px]">wifi</span>
            <div className="flex items-center border border-white/40 rounded-[2px] px-[1px] h-3 w-5">
              <div className="bg-white h-full w-full rounded-[1px]"></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden flex flex-col">
          {step === 'EV' && (
            <Step1EV 
              ev={settings.ev} 
              onEvChange={(val) => setSettings(s => ({...s, ev: val}))} 
              onNext={handleNext} 
            />
          )}
          {step === 'APERTURE' && (
            <Step2Aperture 
              aperture={settings.aperture} 
              onApertureChange={(val) => setSettings(s => ({...s, aperture: val}))} 
              onNext={handleNext} 
              onBack={handleBack}
            />
          )}
          {step === 'SHUTTER' && (
            <Step3Shutter 
              shutter={settings.shutter}
              shutterVal={settings.shutterVal}
              onShutterChange={(label, val) => setSettings(s => ({...s, shutter: label, shutterVal: val}))}
              onNext={handleNext} 
              onBack={handleBack}
            />
          )}
          {step === 'ISO' && (
            <Step4ISO 
              settings={settings}
              onReset={reset}
              onBack={handleBack}
            />
          )}
        </div>

        {/* iOS Home Indicator */}
        <div className="pb-2 flex justify-center bg-black/50 ios-blur">
          <div className="w-32 h-1 bg-white/20 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
