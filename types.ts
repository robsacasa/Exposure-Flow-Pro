
export type AppStep = 'EV' | 'APERTURE' | 'SHUTTER' | 'ISO' | 'COMPLETE';

export interface ExposureSettings {
  ev: number;
  aperture: number;
  shutter: string;
  shutterVal: number; // numerical representation
  iso: number;
}

export interface Scenario {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  ev: number;
  icon: string;
  imageUrl: string;
}
