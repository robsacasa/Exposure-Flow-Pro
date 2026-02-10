
import { Scenario } from './types';

export const SCENARIOS: Scenario[] = [
  {
    id: 'starlight',
    name: 'Starlight',
    subtitle: 'EXTREME LOW LIGHT',
    description: 'Deep night conditions with minimal ambient light. Requires long exposures or very high ISO.',
    ev: -6,
    icon: 'star',
    imageUrl: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bcc0?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'moonlight',
    name: 'Full Moonlight',
    subtitle: 'NIGHT EXTERIOR',
    description: 'Typical moonlit landscape. Significant shadow depth but some visible detail.',
    ev: -3,
    icon: 'dark_mode',
    imageUrl: 'https://images.unsplash.com/photo-1532690650605-1ee0c52a6bbd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'candle',
    name: 'Candle Light',
    subtitle: 'WARM GLOW',
    description: 'Soft, intimate illumination. The zero-point reference for low-light photography.',
    ev: 0,
    icon: 'auto_stories',
    imageUrl: 'https://images.unsplash.com/photo-1517400470505-88891f759b79?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'street',
    name: 'Street Lighting',
    subtitle: 'URBAN NIGHT',
    description: 'Modern city lighting or dim indoor settings. A common threshold for handheld shooting.',
    ev: 4,
    icon: 'nightlight',
    imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'indoor',
    name: 'Indoor Bright',
    subtitle: 'ARTIFICIAL ILLUMINATION',
    description: 'Well-lit interiors with large windows or studio lights. Requires moderate ISO or wide apertures.',
    ev: 8,
    icon: 'lightbulb',
    imageUrl: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cloud',
    name: 'Cloudy Sky',
    subtitle: 'SOFT DIFFUSED LIGHT',
    description: 'Overcast conditions providing soft, even light. Good for portraits but lower overall illumination.',
    ev: 12,
    icon: 'filter_drama',
    imageUrl: 'https://images.unsplash.com/photo-1483706600674-e0c87d3fe85b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'sun',
    name: 'Bright Sunlight',
    subtitle: 'ISO 100 REFERENCE',
    description: 'Standard daylight conditions with high contrast shadows. Optimal for low noise and maximum dynamic range.',
    ev: 15,
    icon: 'wb_sunny',
    imageUrl: 'https://images.unsplash.com/photo-1444333509404-9271cef58a1c?q=80&w=800&auto=format&fit=crop'
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
