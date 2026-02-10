
import { Scenario } from './types';

export const SCENARIOS: Scenario[] = [
  {
    id: 'sun',
    name: 'Bright Sunlight',
    subtitle: 'ISO 100 REFERENCE',
    description: 'Standard daylight conditions with high contrast shadows. Optimal for low noise and maximum dynamic range.',
    ev: 15,
    icon: 'wb_sunny',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJWmXj8HdJPVBze39LRJheJS82kZqVnuo_GHkB2Tuh6BFnY3wbQJWXMnbkCSuat9cEZ_CQB0RHADZsl-8nfwIeYjdwqpFdznE9qjYXSW_IxcwExQJJ7SFTZvmYgs8s4q3TAqpYnC7sLmdQx24BI_bqHxDyGdwkmgkRChzbD0gWFU_hnGBB34FIvlcCwQ7s9McNk9AXvR1K2NFn_mzELdtg5tsSCaky2cCLDEri4yG9r8flXuFJWCMGJiJoYs3UadmbCQL6o9KyZk4'
  },
  {
    id: 'cloud',
    name: 'Cloudy Sky',
    subtitle: 'SOFT DIFFUSED LIGHT',
    description: 'Overcast conditions providing soft, even light. Good for portraits but lower overall illumination.',
    ev: 12,
    icon: 'filter_drama',
    imageUrl: 'https://picsum.photos/seed/cloudy/800/400'
  },
  {
    id: 'indoor',
    name: 'Indoor Bright',
    subtitle: 'ARTIFICIAL ILLUMINATION',
    description: 'Well-lit interiors with large windows or studio lights. Requires moderate ISO or wide apertures.',
    ev: 8,
    icon: 'lightbulb',
    imageUrl: 'https://picsum.photos/seed/indoor/800/400'
  }
];

export const APERTURES = [1.4, 2.0, 2.8, 4.0, 5.6, 8.0, 11, 16, 22];

export const SHUTTER_PRESETS = [
  { label: '1/4000', value: 1/4000, desc: 'Extreme Fast' },
  { label: '1/2000', value: 1/2000, desc: 'Max Freeze' },
  { label: '1/1000', value: 1/1000, desc: 'Action' },
  { label: '1/500', value: 1/500, desc: 'Sports' },
  { label: '1/250', value: 1/250, desc: 'Standard' },
  { label: '1/125', value: 1/125, desc: 'Handheld' },
  { label: '1/60', value: 1/60, desc: 'Slow' },
  { label: '1/30', value: 1/30, desc: 'Blur' },
  { label: '1/15', value: 1/15, desc: 'Motion' }
];

export const MOTION_TARGETS = [
  { id: 'race', name: 'Race Car', speed: 'Very Fast', icon: 'sports_motorsports', shutter: '1/2000' },
  { id: 'bird', name: 'Bird', speed: 'Fast', icon: 'flutter_dash', shutter: '1/1000' },
  { id: 'run', name: 'Running', speed: 'Med-Fast', icon: 'directions_run', shutter: '1/500' },
  { id: 'walk', name: 'Walking', speed: 'Slow', icon: 'directions_walk', shutter: '1/125' }
];
