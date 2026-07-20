/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Check, Sparkles, User, Mail, Compass, Calendar, Award, 
  ArrowRight, ArrowLeft, Printer, Clock, Leaf, Droplet, Zap, CheckCircle2 
} from 'lucide-react';
import { Archetype } from '../types';

interface JoinJourneyProps {
  onClose?: () => void;
  embedMode?: boolean;
}

const ARCHETYPES: Archetype[] = [
  {
    id: 'forestry',
    name: 'Forest Guardian',
    icon: 'leaf',
    description: 'You protect terrestrial biomes, restore depleted soils, and advocate for urban tree canopies to sequester carbon.',
    primaryAction: 'Reforestation & Soil Vitality',
    impactMetric: 'Offset 50kg CO2 per planted tree annually',
    color: 'border-secondary-lime bg-secondary-lime/5 text-secondary-lime text-primary-lime',
    actions: [
      'Plant 3 native tree saplings in your community',
      'Adopt a strict digital paperless policy in your workspace',
      'Support sustainable forestry certifications when buying wood/paper',
      'Map local invasive species using conservation apps'
    ]
  },
  {
    id: 'marine',
    name: 'Coastal Protector',
    icon: 'droplet',
    description: 'You safeguard ocean biomes, clear river networks of microplastics, and champion marine wildlife sanctuaries.',
    primaryAction: 'Ocean Cleansing & Marine Health',
    impactMetric: 'Prevent up to 120 single-use plastics from entering waterways monthly',
    color: 'border-accent-blue bg-accent-blue/5 text-accent-blue',
    actions: [
      'Eliminate single-use plastic water bottles entirely',
      'Organize or join a local riverway or beach trash sweep',
      'Purchase strictly certified ocean-friendly seafood products',
      'Audit your household cosmetics to ensure zero synthetic microplastics'
    ]
  },
  {
    id: 'advocate',
    name: 'Climate Advocate',
    icon: 'zap',
    description: 'You audit household energy metrics, champion renewable infrastructure, and lobby local councils for eco-friendly policies.',
    primaryAction: 'Municipal Rerouting & Smart Auditing',
    impactMetric: 'Reduce domestic carbon overhead by up to 22% immediately',
    color: 'border-accent-gold bg-accent-gold/5 text-accent-gold',
    actions: [
      'Transition household lighting to high-efficiency LED nodes',
      'Draft a formal solar expansion petition for your town council',
      'Switch home or business utilities to 100% renewable grid providers',
      'Enforce compostable waste routing at your workplace or school'
    ]
  }
];

export default function JoinJourney({ onClose, embedMode = false }: JoinJourneyProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedArch, setSelectedArch] = useState<Archetype>(ARCHETYPES[0]);
  const [selectedActions, setSelectedActions] = useState<string[]>([ARCHETYPES[0].actions[0]]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [hours, setHours] = useState('2');
  const [committed, setCommitted] = useState(false);

  const handleSelectArch = (arch: Archetype) => {
    setSelectedArch(arch);
    setSelectedActions([arch.actions[0]]); // default first action
  };

  const handleToggleAction = (action: string) => {
    setSelectedActions(prev => 
      prev.includes(action) 
        ? prev.filter(a => a !== action) 
        : [...prev, action]
    );
  };

  const handleNextStep = () => {
    if (step < 4) {
      setStep((prev) => (prev + 1) as any);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep((prev) => (prev - 1) as any);
    }
  };

  const handleCommit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      setCommitted(true);
      setStep(4);
    }
  };

  const printBlueprint = () => {
    window.print();
  };

  return (
    <div className={`w-full ${embedMode ? '' : 'max-w-4xl mx-auto bg-warm-white rounded-3xl border border-light-grey shadow-2xl p-6 sm:p-10 relative overflow-hidden'}`}>
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-lime/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-light/5 rounded-full filter blur-3xl pointer-events-none" />

      {/* Close button if modal */}
      {onClose && !embedMode && (
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-primary-dark/50 hover:text-primary-dark p-2 rounded-full hover:bg-light-grey transition-all"
        >
          ✕
        </button>
      )}

      {/* Header & Steps Nav */}
      <div className="mb-8 relative z-10">
        <div className="flex items-center gap-2 text-primary-light font-bold text-xs uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span>Interactive Journey Wizard</span>
        </div>
        <h2 className="text-3xl font-bold text-primary-dark tracking-tight">
          Join Our Environmental Journey
        </h2>
        <p className="text-sm text-primary-dark/70 mt-1">
          Every massive ecological milestone starts with standard daily commits. Chart your personalized path below.
        </p>

        {/* Progress bar */}
        <div className="mt-8">
          <div className="flex justify-between text-xs font-semibold text-primary-dark/60 mb-2">
            <span>Step {step} of 4</span>
            <span>
              {step === 1 && "Choose Archetype"}
              {step === 2 && "Configure Actions"}
              {step === 3 && "Personal Details"}
              {step === 4 && "Your Activist Blueprint"}
            </span>
          </div>
          <div className="w-full bg-light-grey h-2.5 rounded-full overflow-hidden">
            <div 
              className="bg-primary-lime h-full transition-all duration-500 rounded-full" 
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Step Panels */}
      <div className="relative z-10 min-h-[350px] flex flex-col justify-between">
        
        {/* STEP 1: SELECT ARCHETYPE */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="text-sm text-primary-dark/80 font-medium">
              Select the environmental persona that matches your passion:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ARCHETYPES.map((arch) => {
                const isSelected = selectedArch.id === arch.id;
                return (
                  <div
                    key={arch.id}
                    onClick={() => handleSelectArch(arch)}
                    className={`border-2 rounded-2xl p-5 cursor-pointer transition-all hover:shadow-md duration-300 relative flex flex-col justify-between h-full ${
                      isSelected 
                        ? 'border-primary-light ring-2 ring-primary-light/10 bg-warm-white' 
                        : 'border-light-grey bg-white hover:border-primary-light/40'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className={`p-3 rounded-xl ${
                          arch.id === 'forestry' ? 'bg-primary-lime/10 text-secondary-lime' :
                          arch.id === 'marine' ? 'bg-accent-blue/10 text-accent-blue' :
                          'bg-accent-gold/10 text-accent-gold'
                        }`}>
                          {arch.icon === 'leaf' && <Leaf className="w-6 h-6 stroke-[2.2]" />}
                          {arch.icon === 'droplet' && <Droplet className="w-6 h-6 stroke-[2.2]" />}
                          {arch.icon === 'zap' && <Zap className="w-6 h-6 stroke-[2.2]" />}
                        </div>
                        {isSelected && (
                          <span className="bg-primary-light text-white p-1 rounded-full text-xs">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-lg text-primary-dark">{arch.name}</h3>
                      <p className="text-xs text-primary-dark/70 leading-relaxed">
                        {arch.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-light-grey text-[11px] font-semibold text-primary-light/80">
                      Primary: {arch.primaryAction}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: CONFIGURE ACTIONS */}
        {step === 2 && (
          <div className="space-y-5">
            <div className="flex items-center gap-3 bg-primary-light/5 border border-primary-light/15 p-4 rounded-xl">
              <Compass className="w-5 h-5 text-primary-light shrink-0" />
              <p className="text-xs text-primary-dark/80 leading-relaxed">
                You selected the <strong className="text-primary-light font-bold">{selectedArch.name}</strong> archetype. Select the specific environmental actions you commit to performing:
              </p>
            </div>

            <div className="space-y-3">
              {selectedArch.actions.map((action, idx) => {
                const isChecked = selectedActions.includes(action);
                return (
                  <div
                    key={idx}
                    onClick={() => handleToggleAction(action)}
                    className={`p-4 border rounded-xl flex items-center justify-between cursor-pointer transition-all ${
                      isChecked 
                        ? 'border-primary-lime bg-primary-lime/5' 
                        : 'border-light-grey bg-white hover:bg-light-grey/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                        isChecked ? 'bg-primary-lime border-primary-lime text-primary-dark' : 'border-primary-dark/30 bg-white'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className="text-xs font-semibold text-primary-dark/95">{action}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {selectedActions.length === 0 && (
              <p className="text-xs text-secondary-purple font-medium italic">
                * Please select at least one action to continue.
              </p>
            )}
          </div>
        )}

        {/* STEP 3: DETAILS FORM */}
        {step === 3 && (
          <form onSubmit={handleCommit} className="space-y-5 max-w-lg mx-auto w-full">
            <div className="text-center space-y-1">
              <Award className="w-8 h-8 text-accent-gold mx-auto animate-bounce" />
              <h3 className="font-bold text-lg text-primary-dark">Almost there! Customize your Blueprint</h3>
              <p className="text-xs text-primary-dark/60">We will finalize your personalized Eco-Impact checklist.</p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-primary-dark/80 block">Your Name</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 w-4 h-4 text-primary-dark/40" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="E.g., Jane Doe"
                    className="w-full bg-white border border-light-grey focus:border-primary-light focus:ring-1 focus:ring-primary-light text-xs text-primary-dark rounded-xl pl-10 pr-4 py-3 outline-none transition-all placeholder-primary-dark/30"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-primary-dark/80 block">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3 w-4 h-4 text-primary-dark/40" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E.g., jane@example.com"
                    className="w-full bg-white border border-light-grey focus:border-primary-light focus:ring-1 focus:ring-primary-light text-xs text-primary-dark rounded-xl pl-10 pr-4 py-3 outline-none transition-all placeholder-primary-dark/30"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-primary-dark/80 block">
                  Weekly Time Commitment: <span className="text-primary-light font-bold">{hours} Hours</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  className="w-full h-2 bg-light-grey rounded-lg appearance-none cursor-pointer accent-primary-light"
                />
                <div className="flex justify-between text-[10px] text-primary-dark/50 font-semibold">
                  <span>1 Hr (Micro Action)</span>
                  <span>5 Hrs (Active Ally)</span>
                  <span>10 Hrs (Dedicated Lead)</span>
                </div>
              </div>
            </div>
          </form>
        )}

        {/* STEP 4: BLUEPRINT CERTIFICATE */}
        {step === 4 && (
          <div className="space-y-6">
            
            {/* Celebration Card */}
            <div className="bg-white border-2 border-dashed border-primary-lime rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-sm" id="printable-blueprint">
              {/* Ribbon Graphic */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none">
                <div className="absolute top-4 right-[-24px] transform rotate-45 bg-primary-lime text-primary-dark text-[9px] font-bold py-1 px-8 text-center uppercase tracking-wide">
                  Activist
                </div>
              </div>

              <div className="space-y-6">
                
                {/* Header */}
                <div className="text-center space-y-1 border-b border-light-grey pb-5">
                  <div className="inline-flex items-center justify-center p-1.5 bg-primary-lime/10 text-secondary-lime rounded-full mb-2">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-widest text-primary-dark">
                    Eco-Impact Blueprint
                  </h3>
                  <p className="text-[10px] text-primary-dark/50 font-bold uppercase tracking-wider">
                    Ecology NGO Roster &bull; Code ID: {Math.floor(100000 + Math.random() * 900000)}
                  </p>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-primary-dark/50 font-bold uppercase">Activist Name</div>
                      <div className="text-lg font-bold text-primary-light mt-0.5">{name || 'Dedicated Supporter'}</div>
                    </div>
                    <div>
                      <div className="text-xs text-primary-dark/50 font-bold uppercase">Chosen Environmental Persona</div>
                      <div className="text-sm font-bold text-primary-dark mt-0.5 flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-secondary-lime inline-block" />
                        {selectedArch.name}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-primary-dark/50 font-bold uppercase">Weekly Commitment</div>
                      <div className="text-sm font-bold text-primary-dark mt-0.5 flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-primary-light" />
                        {hours} Hours / Week
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-primary-dark/50 font-bold uppercase">Actions Pledged</div>
                      <ul className="mt-1 space-y-1.5 text-xs text-primary-dark/85 font-semibold">
                        {selectedActions.map((action, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-secondary-lime text-[14px] shrink-0 leading-none">✔</span>
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-primary-lime/10 border border-primary-lime/30 p-3 rounded-xl">
                      <div className="text-[10px] text-primary-dark/60 font-bold uppercase">Estimated Environmental Offsets</div>
                      <p className="text-xs font-bold text-primary-dark mt-1 leading-normal">
                        {selectedArch.impactMetric}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Seal stamp */}
                <div className="pt-4 border-t border-light-grey flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary-lime" />
                    <span className="text-xs text-primary-dark/70 font-semibold italic">Officially activated eco-pact</span>
                  </div>
                  <div className="text-[10px] text-primary-dark/40 font-bold font-mono">
                    TIMESTAMP: {new Date().toLocaleDateString()}
                  </div>
                </div>

              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-light-grey/45 p-4 rounded-xl border border-light-grey">
              <span className="text-xs text-primary-dark/75 font-semibold text-center sm:text-left">
                Your blueprint has been stored locally. Let's make an impact together!
              </span>
              <button
                onClick={printBlueprint}
                className="px-4 py-2 bg-primary-dark text-white rounded-xl text-xs font-bold hover:bg-primary-light transition-all flex items-center gap-2 cursor-pointer shrink-0"
              >
                <Printer className="w-4 h-4" />
                Print Blueprint
              </button>
            </div>
          </div>
        )}

        {/* Action Controls */}
        <div className="mt-8 pt-6 border-t border-light-grey flex justify-between items-center relative z-10">
          
          {/* Back button */}
          {step > 1 && step < 4 ? (
            <button
              onClick={handlePrevStep}
              className="px-5 py-2.5 bg-light-grey hover:bg-light-grey/80 text-primary-dark font-bold rounded-xl text-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          ) : (
            <div /> // dummy
          )}

          {/* Forward button */}
          {step === 1 && (
            <button
              onClick={handleNextStep}
              className="px-6 py-3 bg-primary-light hover:bg-secondary-purple text-white font-bold rounded-xl text-xs shadow-md transition-all flex items-center gap-1.5 ml-auto cursor-pointer"
            >
              Next: Configure Actions
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {step === 2 && (
            <button
              onClick={handleNextStep}
              disabled={selectedActions.length === 0}
              className="px-6 py-3 bg-primary-light hover:bg-secondary-purple text-white font-bold rounded-xl text-xs shadow-md transition-all flex items-center gap-1.5 ml-auto cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next: Personal Commit
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {step === 3 && (
            <button
              onClick={handleCommit}
              disabled={!name.trim() || !email.trim()}
              className="px-6 py-3 bg-primary-lime hover:bg-secondary-lime text-primary-dark font-extrabold rounded-xl text-xs shadow-md transition-all flex items-center gap-1.5 ml-auto cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Activate My Blueprint
              <Check className="w-4 h-4 stroke-[3]" />
            </button>
          )}

          {step === 4 && (
            <button
              onClick={() => {
                setStep(1);
                setCommitted(false);
                setName('');
                setEmail('');
                if (onClose) onClose();
              }}
              className="px-6 py-3 bg-primary-lime text-primary-dark font-bold rounded-xl text-xs shadow-md hover:bg-secondary-lime transition-all ml-auto cursor-pointer"
            >
              Done / Start Over
            </button>
          )}

        </div>

      </div>
    </div>
  );
}
