/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, Sparkles, Anchor, Compass, Heart, Leaf, HelpCircle, ArrowRight } from 'lucide-react';
import EcoCalculator from './EcoCalculator';

const CAMPAIGNS = [
  {
    id: 'coastal',
    title: 'Coastal Care & Marine Biology',
    icon: 'anchor',
    desc: 'We map tidal zones, organize beach sweeps, and fund sea turtle and coral preservation nurseries along highly vulnerable coastlines.',
    metric: '150,000kg+ plastics cleared',
    color: 'bg-accent-blue/10 border-accent-blue/20 text-accent-blue'
  },
  {
    id: 'forestry',
    title: 'Forest Reforestation & Urban Canopy',
    icon: 'leaf',
    desc: 'We construct seedling drones and deliver organic sapling buckets to households, fostering urban micro-canopies to combat localized heat-island effects.',
    metric: '2.5M+ native seeds planted',
    color: 'bg-primary-lime/10 border-primary-lime/30 text-secondary-lime'
  },
  {
    id: 'energy',
    title: 'Climate Action & Energy Audits',
    icon: 'compass',
    desc: 'We draft template letters for municipalities, lobby school boards for solar arrays, and provide smart energy monitors to public schools.',
    metric: '120 school grids upgraded',
    color: 'bg-accent-gold/10 border-accent-gold/30 text-accent-gold'
  }
];

export default function FeaturesView() {
  return (
    <div className="space-y-20 animate-fade-in">
      
      {/* 1. FEATURES INTRO */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-primary-light uppercase tracking-wider bg-primary-light/10 border border-primary-light/20 px-3.5 py-1 rounded-full">
          Core Features
        </span>
        <h2 className="text-4xl font-black text-primary-dark tracking-tight">
          Systemic Programs, Local Operations
        </h2>
        <p className="text-sm sm:text-base text-primary-dark/70 leading-relaxed">
          We don't just advocate; we build functional physical and digital toolkits. Our campaigns operate with native, auditable indicators so you see exactly where action hits soil.
        </p>
      </section>

      {/* 2. THREE MAJOR CAMPAIGN CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CAMPAIGNS.map((item) => (
          <div 
            key={item.id}
            className="bg-white border border-light-grey rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-primary-light/20 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.color}`}>
                {item.icon === 'anchor' && <Anchor className="w-5.5 h-5.5" />}
                {item.icon === 'leaf' && <Leaf className="w-5.5 h-5.5" />}
                {item.icon === 'compass' && <Compass className="w-5.5 h-5.5" />}
              </div>
              <h3 className="font-extrabold text-lg text-primary-dark tracking-tight leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-primary-dark/70 leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-light-grey flex items-center justify-between text-[11px] font-bold">
              <span className="text-primary-dark/45 uppercase tracking-wider">Campaign Yield</span>
              <span className="text-primary-light bg-primary-light/5 px-2.5 py-1 rounded-md">{item.metric}</span>
            </div>
          </div>
        ))}
      </section>

      {/* 3. THE CARBON AUDITOR WIDGET (Focal Point) */}
      <section className="space-y-8 pt-6">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <HelpCircle className="w-8 h-8 text-primary-light mx-auto" />
          <h3 className="text-2xl font-black text-primary-dark tracking-tight">Audit Your Personal Impact</h3>
          <p className="text-xs text-primary-dark/65">
            Use our interactive calculation model below to benchmark your annual emissions against global thresholds.
          </p>
        </div>

        {/* Embbed Eco Calculator widget */}
        <div className="max-w-4xl mx-auto">
          <EcoCalculator />
        </div>
      </section>

      {/* 4. EXPLANATIVE SECTION: THE THREE RS GRID */}
      <section className="bg-[#FAFAF7] border border-light-grey rounded-3xl p-8 sm:p-12 space-y-8">
        <div className="text-center sm:text-left space-y-1">
          <h4 className="font-bold text-primary-dark text-lg">Systematic Auditing Protocol</h4>
          <p className="text-xs text-primary-dark/60">How we translate domestic actions into international carbon ledger credits.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <div className="text-2xl font-black text-secondary-lime">01. Log</div>
            <h5 className="font-bold text-sm text-primary-dark">Verify Activity</h5>
            <p className="text-xs text-primary-dark/70 leading-relaxed">
              Log activities (composting, switching utility grids, planting saplings) directly on our localized web-apps or coordinates.
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-black text-accent-blue">02. Quantify</div>
            <h5 className="font-bold text-sm text-primary-dark">Calculate Credits</h5>
            <p className="text-xs text-primary-dark/70 leading-relaxed">
              Our automated carbon calculators cross-reference local EPA registries to convert volunteer hours and plantings into metrics.
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-black text-accent-gold">03. Reforest</div>
            <h5 className="font-bold text-sm text-primary-dark">Deploy Capital</h5>
            <p className="text-xs text-primary-dark/70 leading-relaxed">
              Corporate sponsorships are allocated automatically to match citizen credits, buying saplings or coral plugs in real-time.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
