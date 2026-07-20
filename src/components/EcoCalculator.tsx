/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Leaf, Info, RefreshCw, Zap, Flame, Compass, Car, Plane, Utensils, Trash2 } from 'lucide-react';

export default function EcoCalculator() {
  const [transport, setTransport] = useState<'car' | 'transit' | 'bike'>('car');
  const [flights, setFlights] = useState<'never' | 'occasional' | 'frequent'>('occasional');
  const [diet, setDiet] = useState<'vegan' | 'vegetarian' | 'moderate' | 'meat'>('moderate');
  const [waste, setWaste] = useState<'zero' | 'regular' | 'excessive'>('regular');

  const calculateFootprint = () => {
    let score = 0;
    
    // Transport
    if (transport === 'car') score += 4.6;
    else if (transport === 'transit') score += 1.4;
    else score += 0.1;

    // Flights
    if (flights === 'frequent') score += 5.5;
    else if (flights === 'occasional') score += 1.8;
    else score += 0.0;

    // Diet
    if (diet === 'meat') score += 2.8;
    else if (diet === 'moderate') score += 1.6;
    else if (diet === 'vegetarian') score += 0.9;
    else score += 0.5;

    // Waste
    if (waste === 'excessive') score += 1.2;
    else if (waste === 'regular') score += 0.6;
    else score += 0.1;

    return parseFloat(score.toFixed(1));
  };

  const footprintVal = calculateFootprint();
  const worldAverage = 4.8;
  const climateTarget = 2.0;

  // Percentage for gauge/chart fill
  const maxScale = 14;
  const currentPct = Math.min((footprintVal / maxScale) * 100, 100);
  const avgPct = (worldAverage / maxScale) * 100;
  const targetPct = (climateTarget / maxScale) * 100;

  const getImpactRating = (score: number) => {
    if (score <= climateTarget) return { label: 'Climate Hero', color: 'text-primary-lime bg-primary-lime/10 border-primary-lime/30' };
    if (score <= worldAverage) return { label: 'Sustainable Citizen', color: 'text-accent-blue bg-accent-blue/10 border-accent-blue/30' };
    if (score <= 8) return { label: 'Modest Footprint', color: 'text-accent-gold bg-accent-gold/10 border-accent-gold/30' };
    return { label: 'High Climate Impact', color: 'text-secondary-purple bg-secondary-purple/10 border-secondary-purple/30' };
  };

  const rating = getImpactRating(footprintVal);

  const getRecommendations = () => {
    const list = [];
    if (transport === 'car') {
      list.push({ title: 'Commute Greenly', text: 'Car pooling, switching to hybrid/EV, or telecommuting 2 days/week offsets 1.2 tons of CO2 annually.' });
    }
    if (flights === 'frequent') {
      list.push({ title: 'Rethink Air Travel', text: 'Replacing one long-haul flight with high-speed rail or virtual attendance saves up to 2 tons of CO2.' });
    }
    if (diet === 'meat' || diet === 'moderate') {
      list.push({ title: 'Plant-Forward Diet', text: 'Moving to vegetarian/vegan options even 3 days a week saves up to 800 kg of carbon annually.' });
    }
    if (waste === 'excessive' || waste === 'regular') {
      list.push({ title: 'Rigorous Composting', text: 'Adding organic composting and zero-plastic packaging reduces landfill methane contributions by 400 kg.' });
    }
    if (list.length === 0) {
      list.push({ title: 'Educate Others', text: 'Your footprint is already near optimal! Share your sustainable practices to multiply your ecological influence.' });
    }
    return list.slice(0, 2);
  };

  return (
    <div className="bg-white rounded-3xl border border-light-grey shadow-lg overflow-hidden">
      <div className="p-6 sm:p-8 bg-gradient-to-r from-primary-dark to-primary-light text-white flex justify-between items-center">
        <div>
          <span className="text-[10px] tracking-widest font-extrabold uppercase text-primary-lime">Interactive Module</span>
          <h3 className="text-xl font-bold mt-1">Ecology Footprint Auditor</h3>
        </div>
        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
          <Zap className="w-5 h-5 text-primary-lime" />
        </div>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side Inputs (Columns: 7) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Daily Transport */}
          <div className="space-y-2.5">
            <label className="text-xs font-bold text-primary-dark/80 uppercase tracking-wider flex items-center gap-2">
              <Car className="w-4 h-4 text-primary-light" />
              <span>1. Daily Commute Route</span>
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setTransport('car')}
                className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                  transport === 'car'
                    ? 'border-primary-light bg-primary-light/5 text-primary-light font-bold shadow-sm'
                    : 'border-light-grey text-primary-dark/75 hover:bg-light-grey/40'
                }`}
              >
                Gasoline Car
              </button>
              <button
                onClick={() => setTransport('transit')}
                className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                  transport === 'transit'
                    ? 'border-primary-light bg-primary-light/5 text-primary-light font-bold shadow-sm'
                    : 'border-light-grey text-primary-dark/75 hover:bg-light-grey/40'
                }`}
              >
                Public Transit
              </button>
              <button
                onClick={() => setTransport('bike')}
                className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                  transport === 'bike'
                    ? 'border-primary-light bg-primary-light/5 text-primary-light font-bold shadow-sm'
                    : 'border-light-grey text-primary-dark/75 hover:bg-light-grey/40'
                }`}
              >
                Walk / Bicycle
              </button>
            </div>
          </div>

          {/* Flights */}
          <div className="space-y-2.5">
            <label className="text-xs font-bold text-primary-dark/80 uppercase tracking-wider flex items-center gap-2">
              <Plane className="w-4 h-4 text-primary-light" />
              <span>2. Annual Flight Volume</span>
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setFlights('never')}
                className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                  flights === 'never'
                    ? 'border-primary-light bg-primary-light/5 text-primary-light font-bold shadow-sm'
                    : 'border-light-grey text-primary-dark/75 hover:bg-light-grey/40'
                }`}
              >
                Zero Flights
              </button>
              <button
                onClick={() => setFlights('occasional')}
                className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                  flights === 'occasional'
                    ? 'border-primary-light bg-primary-light/5 text-primary-light font-bold shadow-sm'
                    : 'border-light-grey text-primary-dark/75 hover:bg-light-grey/40'
                }`}
              >
                1-3 Flights (Short)
              </button>
              <button
                onClick={() => setFlights('frequent')}
                className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                  flights === 'frequent'
                    ? 'border-primary-light bg-primary-light/5 text-primary-light font-bold shadow-sm'
                    : 'border-light-grey text-primary-dark/75 hover:bg-light-grey/40'
                }`}
              >
                Frequent (Long-Haul)
              </button>
            </div>
          </div>

          {/* Dietary Choices */}
          <div className="space-y-2.5">
            <label className="text-xs font-bold text-primary-dark/80 uppercase tracking-wider flex items-center gap-2">
              <Utensils className="w-4 h-4 text-primary-light" />
              <span>3. Dietary Nutrition Intake</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <button
                onClick={() => setDiet('vegan')}
                className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                  diet === 'vegan'
                    ? 'border-primary-light bg-primary-light/5 text-primary-light font-bold'
                    : 'border-light-grey text-primary-dark/75 hover:bg-light-grey/40'
                }`}
              >
                100% Vegan
              </button>
              <button
                onClick={() => setDiet('vegetarian')}
                className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                  diet === 'vegetarian'
                    ? 'border-primary-light bg-primary-light/5 text-primary-light font-bold'
                    : 'border-light-grey text-primary-dark/75 hover:bg-light-grey/40'
                }`}
              >
                Vegetarian
              </button>
              <button
                onClick={() => setDiet('moderate')}
                className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                  diet === 'moderate'
                    ? 'border-primary-light bg-primary-light/5 text-primary-light font-bold'
                    : 'border-light-grey text-primary-dark/75 hover:bg-light-grey/40'
                }`}
              >
                Moderate Meat
              </button>
              <button
                onClick={() => setDiet('meat')}
                className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                  diet === 'meat'
                    ? 'border-primary-light bg-primary-light/5 text-primary-light font-bold'
                    : 'border-light-grey text-primary-dark/75 hover:bg-light-grey/40'
                }`}
              >
                Meat Heavy
              </button>
            </div>
          </div>

          {/* Domestic Waste */}
          <div className="space-y-2.5">
            <label className="text-xs font-bold text-primary-dark/80 uppercase tracking-wider flex items-center gap-2">
              <Trash2 className="w-4 h-4 text-primary-light" />
              <span>4. Domestic Waste & Recycling</span>
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setWaste('zero')}
                className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                  waste === 'zero'
                    ? 'border-primary-light bg-primary-light/5 text-primary-light font-bold shadow-sm'
                    : 'border-light-grey text-primary-dark/75 hover:bg-light-grey/40'
                }`}
              >
                Zero-Waste / Bio
              </button>
              <button
                onClick={() => setWaste('regular')}
                className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                  waste === 'regular'
                    ? 'border-primary-light bg-primary-light/5 text-primary-light font-bold shadow-sm'
                    : 'border-light-grey text-primary-dark/75 hover:bg-light-grey/40'
                }`}
              >
                Standard Sorting
              </button>
              <button
                onClick={() => setWaste('excessive')}
                className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                  waste === 'excessive'
                    ? 'border-primary-light bg-primary-light/5 text-primary-light font-bold shadow-sm'
                    : 'border-light-grey text-primary-dark/75 hover:bg-light-grey/40'
                }`}
              >
                Unsorted Waste
              </button>
            </div>
          </div>

        </div>

        {/* Right Side Visual Results (Columns: 5) */}
        <div className="lg:col-span-5 bg-light-grey/40 border border-light-grey rounded-2xl p-6 flex flex-col justify-between">
          
          {/* Main metric */}
          <div className="text-center space-y-2">
            <div className="text-xs font-extrabold text-primary-dark/50 uppercase tracking-widest">
              Your Annual Carbon Impact
            </div>
            <div className="text-5xl font-black text-primary-dark tracking-tight">
              {footprintVal} <span className="text-xl font-bold text-primary-dark/60">Tons CO₂</span>
            </div>
            <div className={`inline-block py-1 px-3 rounded-full text-[11px] font-bold border ${rating.color}`}>
              {rating.label}
            </div>
          </div>

          {/* Interactive SVG Bar chart comparing */}
          <div className="my-6 space-y-4">
            <div className="space-y-1.5">
              <div className="flex justify-between text-[11px] font-semibold text-primary-dark/80">
                <span>You</span>
                <span className="font-bold">{footprintVal} Tons</span>
              </div>
              <div className="w-full bg-white/70 rounded-full h-3 border border-light-grey overflow-hidden relative">
                <div 
                  className="h-full bg-secondary-purple rounded-full transition-all duration-500" 
                  style={{ width: `${currentPct}%` }}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-[11px] font-semibold text-primary-dark/60">
                <span>World Average</span>
                <span>{worldAverage} Tons</span>
              </div>
              <div className="w-full bg-white/70 rounded-full h-3 border border-light-grey overflow-hidden relative">
                <div 
                  className="h-full bg-accent-blue rounded-full transition-all duration-500" 
                  style={{ width: `${avgPct}%` }}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-[11px] font-semibold text-primary-dark/60">
                <span>Safe Climate Target</span>
                <span className="text-secondary-lime font-bold">{climateTarget} Tons</span>
              </div>
              <div className="w-full bg-white/70 rounded-full h-3 border border-light-grey overflow-hidden relative">
                <div 
                  className="h-full bg-primary-lime rounded-full transition-all duration-500" 
                  style={{ width: `${targetPct}%` }}
                />
              </div>
            </div>
          </div>

          {/* Action Recommendations */}
          <div className="border-t border-light-grey pt-4">
            <h4 className="text-[11px] font-bold text-primary-dark/50 uppercase tracking-wider mb-2.5">
              Top Action Recommendations
            </h4>
            <div className="space-y-3">
              {getRecommendations().map((rec, i) => (
                <div key={i} className="flex gap-2 text-xs">
                  <span className="text-primary-lime font-bold select-none shrink-0">•</span>
                  <div className="space-y-0.5">
                    <span className="font-bold text-primary-dark leading-none">{rec.title}: </span>
                    <span className="text-primary-dark/75 leading-relaxed">{rec.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
