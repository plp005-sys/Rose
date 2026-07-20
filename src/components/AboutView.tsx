/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Award, Eye, Rocket, Calendar, Users, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';
import { TeamMember } from '../types';

interface AboutViewProps {
  onOpenJoinJourney: () => void;
}

const MILESTONES = [
  { year: '2018', title: 'Grassroots Foundation', desc: 'Ecology NGO was born in a garage with 5 volunteers clearing plastic from local rivers.' },
  { year: '2020', title: '100,000 Saplings Sowed', desc: 'Partnered with state forestries to initiate regional soil rebuilding and drone-assisted seeding.' },
  { year: '2022', title: 'Coastal Care Enforced', desc: 'Successfully lobbied for marine wildlife preservation zones across three municipal coastlines.' },
  { year: '2024', title: 'First Million Metric Tons', desc: 'Officially certified 1M tons of global CO2 sequestered through community action networks.' },
  { year: '2026', title: 'Global Digital Integration', desc: 'Launched active, real-time public ledgers, allowing instant verification of every seed planted.' },
];

const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Evelyn Carter',
    role: 'Chief Conservation Scientist',
    bio: 'Evelyn holds a PhD in Forest Ecology and leads our global tree monitoring and soil health audits.',
    image: '👩‍🔬',
    specialty: 'Mycorrhizal Networks & Soil Health'
  },
  {
    id: '2',
    name: 'Liam Sterling',
    role: 'Director of Coastal Operations',
    bio: 'A marine biologist with 12 years of field experience managing coral reef restorations and ocean cleanup vectors.',
    image: '👨‍✈️',
    specialty: 'Marine Ecosystem Restoration'
  },
  {
    id: '3',
    name: 'Farah Al-Jamil',
    role: 'Head of Advocacy & Policy',
    bio: 'Farah drafts municipal legislation, coordinates green transport lobby groups, and empowers community leaders.',
    image: '👩‍💼',
    specialty: 'Systemic Environmental Policy'
  },
  {
    id: '4',
    name: 'Kenji Sato',
    role: 'Lead Developer & UX Architect',
    bio: 'Kenji builds our transparent public impact ledgers and interactive carbon auditing interfaces.',
    image: '👨‍💻',
    specialty: 'Decentralized Environmental Ledger'
  }
];

export default function AboutView({ onOpenJoinJourney }: AboutViewProps) {
  return (
    <div className="space-y-20 animate-fade-in">
      
      {/* 1. MISSION & VISION HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-primary-light uppercase tracking-wider bg-primary-light/10 border border-primary-light/20 px-3.5 py-1 rounded-full">
          Who We Are
        </span>
        <h2 className="text-4xl font-black text-primary-dark tracking-tight">
          Empowering Grassroots Conservation
        </h2>
        <p className="text-sm sm:text-base text-primary-dark/70 leading-relaxed">
          We believe real, lasting change doesn’t descend from committee drafts. It climbs from soil. We build software and field kits to organize community action seamlessly.
        </p>
      </section>

      {/* 2. DUAL MISSION & VISION BOXES */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Mission */}
        <div className="bg-white border border-light-grey rounded-3xl p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary-lime/10 text-secondary-lime flex items-center justify-center">
              <Rocket className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="text-xl font-bold text-primary-dark">Our Absolute Mission</h3>
            <p className="text-xs sm:text-sm text-primary-dark/70 leading-relaxed">
              To lower the barriers of entry to active ecological stewardship. We equip everyday citizens with the metrics, seeds, and templates needed to repair local ecosystems without waiting for external mandates.
            </p>
          </div>
          <div className="text-[11px] font-bold text-secondary-lime uppercase tracking-widest mt-6">
            Action-first execution
          </div>
        </div>

        {/* Vision */}
        <div className="bg-white border border-light-grey rounded-3xl p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center">
              <Eye className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="text-xl font-bold text-primary-dark">Our Global Vision</h3>
            <p className="text-xs sm:text-sm text-primary-dark/70 leading-relaxed">
              A self-healing, synchronized network of local bio-sanctuaries where citizens actively offset domestic overheads, transforming towns from carbon emitters into thriving carbon-sink forests.
            </p>
          </div>
          <div className="text-[11px] font-bold text-accent-blue uppercase tracking-widest mt-6">
            Global carbon synchrony
          </div>
        </div>

      </section>

      {/* 3. ACHIEVEMENTS TIMELINE */}
      <section className="bg-white border border-light-grey rounded-3xl p-6 sm:p-10 shadow-md space-y-8">
        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-bold text-primary-dark tracking-tight flex items-center justify-center sm:justify-start gap-2">
            <Calendar className="w-6 h-6 text-primary-light" />
            <span>Our Journey Milestones</span>
          </h3>
          <p className="text-xs text-primary-dark/65 mt-1">Tracing our growth from local sweeps to a verified global roster.</p>
        </div>

        <div className="relative border-l border-light-grey pl-6 ml-4 space-y-8 py-2">
          {MILESTONES.map((stone, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline bubble */}
              <div className="absolute left-[-31px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-primary-light group-hover:bg-primary-lime transition-all duration-300" />
              
              <div className="space-y-1">
                <span className="text-xs font-black text-primary-light bg-primary-light/10 border border-primary-light/20 px-2.5 py-0.5 rounded-full inline-block">
                  {stone.year}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-primary-dark mt-1">
                  {stone.title}
                </h4>
                <p className="text-xs text-primary-dark/70 leading-relaxed max-w-2xl">
                  {stone.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MEET THE TEAM CORE */}
      <section className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <Users className="w-8 h-8 text-[#ff0d72] mx-auto" />
          <h3 className="text-2xl font-bold text-primary-dark tracking-tight">Our Advisory & Scientist Core</h3>
          <p className="text-xs text-primary-dark/60">Field specialists steering our research campaigns and technical platforms.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member) => (
            <div 
              key={member.id}
              className="bg-[#FAFAF7] border border-light-grey p-5 rounded-2xl flex flex-col justify-between hover:shadow-md hover:border-primary-light/30 transition-all duration-300 transform hover:scale-[1.01]"
            >
              <div className="space-y-4">
                {/* Avatar visual */}
                <div className="w-14 h-14 bg-white border border-light-grey rounded-2xl flex items-center justify-center text-3xl select-none shadow-sm">
                  {member.image}
                </div>
                
                <div className="space-y-0.5">
                  <h4 className="font-bold text-base text-primary-dark leading-tight">{member.name}</h4>
                  <p className="text-xs text-primary-light font-bold">{member.role}</p>
                </div>

                <p className="text-xs text-primary-dark/70 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-light-grey flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-secondary-lime shrink-0" />
                <span className="text-[10px] font-extrabold text-[#420733]/80 uppercase tracking-wider truncate" title={member.specialty}>
                  {member.specialty}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. OVERLAY INVITE PANEL */}
      <section className="bg-primary-dark text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(108,237,21,0.06)_0%,transparent_60%)]" />
        <h3 className="text-2xl sm:text-3xl font-black tracking-tight relative z-10">
          Want to become an active scientific ally?
        </h3>
        <p className="text-sm text-warm-white/70 max-w-xl mx-auto leading-relaxed relative z-10">
          Whether you have a professional forestry credential or want to volunteer 1 hour checking local beach tides, our research cores need your observations.
        </p>
        <div className="relative z-10 pt-2">
          <button
            onClick={onOpenJoinJourney}
            className="px-8 py-3.5 bg-primary-lime text-primary-dark hover:bg-secondary-lime font-black rounded-xl text-xs transition-all shadow-md cursor-pointer inline-flex items-center gap-2"
          >
            <span>Activate My Campaign Journey</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
