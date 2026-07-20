/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Compass, Eye, MapPin, Award, CheckCircle2, AlertCircle, Clock, Sparkles } from 'lucide-react';
import { Project } from '../types';
import ImpactCharts from './ImpactCharts';

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Great Barrier Reef Resiliency',
    category: 'marine',
    description: 'Direct transplanting of heat-tolerant micro-fragmented coral plugs onto bleached structures to catalyze natural regeneration.',
    location: 'Cairns, Australia',
    status: 'Active',
    impact: '12,000 coral plugs transplanted',
    image: '🌊'
  },
  {
    id: '2',
    title: 'Amazon Basin Canopy Rebuilding',
    category: 'forestry',
    description: 'High-diversity drone-assisted seed planting of native mahogany and cacao species in areas depleted by illegal cattle logging.',
    location: 'Pará, Brazil',
    status: 'Active',
    impact: '48,000 native saplings verified',
    image: '🌳'
  },
  {
    id: '3',
    title: 'Kyoto Urban Cool-Roof Micro-Canopies',
    category: 'urban',
    description: 'Conversion of multi-tier corporate office rooftops into native micro-forest gardens to reduce summer urban heat-island effect.',
    location: 'Kyoto, Japan',
    status: 'Completed',
    impact: '14 corporate cool roofs cooled',
    image: '🏢'
  },
  {
    id: '4',
    title: 'Pacific Coast Marine Trash Sieve Deployment',
    category: 'marine',
    description: 'Installation of passive shoreline trash barriers utilizing floating kelp-replicas to entrap ocean microplastics without harming wildlife.',
    location: 'Oregon, USA',
    status: 'Upcoming',
    impact: 'Est. 15 Tons plastic / year cap',
    image: '⚓'
  },
  {
    id: '5',
    title: 'Freiburg School Solar Grid Transition',
    category: 'climate',
    description: 'Retrofitting public municipal school structures with bilateral smart solar modules and grid storage batteries.',
    location: 'Freiburg, Germany',
    status: 'Completed',
    impact: '100% renewable power on 8 schools',
    image: '⚡'
  },
  {
    id: '6',
    title: 'Sahara Green Wall Drone Seed Sowing',
    category: 'forestry',
    description: 'Autonomous aerial seeding of drought-resistant acacia and desert date seeds along desertified boundaries to rebuild soil buffers.',
    location: 'Senegal, Africa',
    status: 'Upcoming',
    impact: 'Est. 120,000 hectares buffer',
    image: '🐪'
  }
];

export default function WorkView() {
  const [filter, setFilter] = useState<'all' | 'marine' | 'forestry' | 'climate' | 'urban'>('all');

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="space-y-20 animate-fade-in">
      
      {/* 1. SECTION INTRO */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-primary-light uppercase tracking-wider bg-primary-light/10 border border-primary-light/20 px-3.5 py-1 rounded-full">
          Our Impact Work
        </span>
        <h2 className="text-4xl font-black text-primary-dark tracking-tight">
          Field Operations Dashboard & Ledger
        </h2>
        <p className="text-sm sm:text-base text-primary-dark/70 leading-relaxed">
          We operate with transparent field parameters. Below you can audit our global budget allocations, carbon offsets, and explore ongoing environmental campaigns in real-time.
        </p>
      </section>

      {/* 2. EMBEDDED IMPACT CHARTS DASHBOARD */}
      <section className="space-y-6 pt-2">
        <div className="text-center sm:text-left space-y-0.5 max-w-lg">
          <span className="text-[10px] tracking-widest font-extrabold uppercase text-primary-light">Financial & Carbon Audit</span>
          <h3 className="text-xl font-bold text-primary-dark">Global Conservation Metrics</h3>
        </div>
        <ImpactCharts />
      </section>

      {/* 3. FILTERABLE PROJECT GRID */}
      <section className="space-y-8 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-light-grey pb-4">
          <div>
            <h3 className="text-xl font-bold text-primary-dark flex items-center gap-1.5">
              <Compass className="w-5.5 h-5.5 text-secondary-lime" />
              <span>Active Field Campaigns</span>
            </h3>
            <p className="text-xs text-primary-dark/60 mt-0.5">Explore geocoded projects and checked impact metrics.</p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Fields' },
              { id: 'marine', label: 'Marine 🌊' },
              { id: 'forestry', label: 'Forests 🌳' },
              { id: 'climate', label: 'Climate ⚡' },
              { id: 'urban', label: 'Urban 🏢' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-primary-dark text-white shadow-sm scale-102'
                    : 'bg-white border border-light-grey text-primary-dark/80 hover:bg-light-grey/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-[#FAFAF7] border border-light-grey p-5 rounded-2xl flex flex-col justify-between hover:shadow-md hover:border-primary-light/20 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5 text-xs text-primary-dark/50 font-bold font-mono">
                    <MapPin className="w-3.5 h-3.5 text-primary-light" />
                    <span>{project.location}</span>
                  </div>
                  
                  {/* Status label */}
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                    project.status === 'Active' ? 'bg-primary-lime/10 text-secondary-lime border border-primary-lime/30' :
                    project.status === 'Completed' ? 'bg-accent-blue/10 text-accent-blue border border-accent-blue/20' :
                    'bg-accent-gold/15 text-accent-gold border border-accent-gold/30'
                  }`}>
                    {project.status === 'Active' && <CheckCircle2 className="w-3 h-3" />}
                    {project.status === 'Completed' && <CheckCircle2 className="w-3 h-3 stroke-[3]" />}
                    {project.status === 'Upcoming' && <Clock className="w-3 h-3" />}
                    {project.status}
                  </span>
                </div>

                {/* Cover representation */}
                <div className="w-full h-32 bg-white rounded-xl flex items-center justify-center text-4xl select-none shadow-inner border border-light-grey">
                  {project.image}
                </div>

                <div className="space-y-1">
                  <h4 className="font-extrabold text-base text-primary-dark tracking-tight leading-tight">
                    {project.title}
                  </h4>
                  <p className="text-xs text-primary-dark/70 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Verified Impact */}
              <div className="mt-6 pt-3.5 border-t border-light-grey/60 flex items-center justify-between text-[11px] font-bold">
                <span className="text-primary-dark/45 uppercase tracking-wider flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-accent-gold" />
                  Impact Yield
                </span>
                <span className="text-primary-light bg-primary-light/5 px-2 rounded-md">{project.impact}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-primary-dark/45 font-semibold italic text-xs">
            No projects found in this category. Check back soon for new field audits!
          </div>
        )}
      </section>

    </div>
  );
}
