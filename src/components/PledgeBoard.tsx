/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, MessageSquare, Heart, Award, Shield, User, Globe, PenTool, CheckCircle } from 'lucide-react';
import { Pledge } from '../types';

const INITIAL_PLEDGES: Pledge[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    text: 'I pledge to stop buying all single-use plastic water bottles and carry my stainless steel flask everywhere.',
    category: 'water',
    timestamp: '2 hours ago',
    avatar: '👩‍🌾'
  },
  {
    id: '2',
    name: 'Marcus Vance',
    text: 'I pledge to swap my commute to bicycling twice a week, cutting down over 400kg of greenhouse gases.',
    category: 'energy',
    timestamp: '5 hours ago',
    avatar: '🚴‍♂️'
  },
  {
    id: '3',
    name: 'Lin Wei',
    text: 'I pledge to strictly route all food wastes to our backyard compost bin instead of municipal standard trash.',
    category: 'waste',
    timestamp: 'Yesterday',
    avatar: '🧑‍🍳'
  },
  {
    id: '4',
    name: 'Emily Thompson',
    text: 'I pledge to lead a monthly native tree planting circle in our public municipal park this autumn.',
    category: 'community',
    timestamp: '2 days ago',
    avatar: '🌿'
  }
];

const CATEGORY_STYLES = {
  water: { label: 'Water Conservation', bg: 'bg-accent-blue/15 text-accent-blue border-accent-blue/30', badge: '💧' },
  energy: { label: 'Energy Auditing', bg: 'bg-accent-gold/15 text-accent-gold border-accent-gold/40', badge: '⚡' },
  waste: { label: 'Waste Rerouting', bg: 'bg-secondary-purple/10 text-secondary-purple border-secondary-purple/30', badge: '♻️' },
  community: { label: 'Community Sowing', bg: 'bg-primary-lime/10 text-secondary-lime border-primary-lime/30', badge: '🌿' },
  advocacy: { label: 'Active Lobbying', bg: 'bg-primary-light/10 text-primary-light border-primary-light/30', badge: '📢' },
};

const AVATARS = ['🌿', '💧', '🦊', '🌍', '🚴‍♂️', '🌻', '🦁', '🦉', '🌊'];

export default function PledgeBoard() {
  const [pledges, setPledges] = useState<Pledge[]>(INITIAL_PLEDGES);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [category, setCategory] = useState<keyof typeof CATEGORY_STYLES>('community');
  const [avatar, setAvatar] = useState(AVATARS[0]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && text.trim()) {
      const newPledge: Pledge = {
        id: Date.now().toString(),
        name: name.trim(),
        text: text.trim(),
        category,
        timestamp: 'Just now',
        avatar
      };
      setPledges([newPledge, ...pledges]);
      setName('');
      setText('');
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* Pledge Form (Columns: 4) */}
      <div className="lg:col-span-4 bg-white border border-light-grey rounded-3xl p-6 sm:p-8 shadow-md">
        <div className="flex items-center gap-2 text-primary-light font-bold text-xs uppercase tracking-wider mb-2">
          <PenTool className="w-4 h-4" />
          <span>Write Your Commitment</span>
        </div>
        <h3 className="text-xl font-bold text-primary-dark">Eco-Action Pledge</h3>
        <p className="text-xs text-primary-dark/65 mt-1 mb-6 leading-relaxed">
          Make your small action visible. Join the community directory of ecological agreements.
        </p>

        {submitted ? (
          <div className="bg-primary-lime/10 border border-primary-lime/30 text-primary-dark p-5 rounded-2xl space-y-3 text-center animate-pulse-slow">
            <CheckCircle className="w-8 h-8 text-secondary-lime mx-auto" />
            <h4 className="font-bold text-sm">Pledge Registered!</h4>
            <p className="text-xs text-primary-dark/80">
              Your commitment has been pinned to the public wall. Thank you for taking action!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Name */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-extrabold uppercase text-primary-dark/60 tracking-wider">Your Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="E.g., Leo Wilder"
                className="w-full bg-light-grey/40 border border-light-grey focus:border-primary-light focus:ring-1 focus:ring-primary-light text-xs text-primary-dark rounded-xl px-4 py-3 outline-none transition-all"
              />
            </div>

            {/* Avatar picker */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-extrabold uppercase text-primary-dark/60 tracking-wider block">Choose Avatar Icon</label>
              <div className="flex flex-wrap gap-2 pt-1">
                {AVATARS.map((av) => (
                  <button
                    key={av}
                    type="button"
                    onClick={() => setAvatar(av)}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg transition-all border ${
                      avatar === av 
                        ? 'bg-primary-light/10 border-primary-light scale-110 shadow-sm' 
                        : 'bg-light-grey/30 border-light-grey hover:bg-light-grey/70'
                    }`}
                  >
                    {av}
                  </button>
                ))}
              </div>
            </div>

            {/* Category */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-extrabold uppercase text-primary-dark/60 tracking-wider block">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full bg-light-grey/40 border border-light-grey focus:border-primary-light focus:ring-1 focus:ring-primary-light text-xs text-primary-dark rounded-xl px-4 py-3 outline-none cursor-pointer transition-all font-semibold"
              >
                {Object.entries(CATEGORY_STYLES).map(([key, style]) => (
                  <option key={key} value={key} className="font-semibold text-primary-dark">
                    {style.badge} {style.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Pledge text */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-extrabold uppercase text-primary-dark/60 tracking-wider">Your Pledge Commitment</label>
              <textarea
                required
                rows={3}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write a clear, realistic action (e.g., 'I pledge to start taking cold showers to reduce boiler gas usage...')"
                className="w-full bg-light-grey/40 border border-light-grey focus:border-primary-light focus:ring-1 focus:ring-primary-light text-xs text-primary-dark rounded-xl px-4 py-3 outline-none transition-all placeholder-primary-dark/45 resize-none leading-relaxed"
                maxLength={140}
              />
              <div className="text-right text-[10px] text-primary-dark/40 font-semibold">
                {text.length}/140 characters
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-primary-lime text-primary-dark font-extrabold rounded-xl text-xs shadow-md hover:bg-secondary-lime transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Publish Eco-Pledge</span>
              <Sparkles className="w-3.5 h-3.5" />
            </button>

          </form>
        )}
      </div>

      {/* Bulletin Board (Columns: 8) */}
      <div className="lg:col-span-8 space-y-6">
        <div className="flex justify-between items-center border-b border-light-grey pb-3">
          <div>
            <h4 className="font-extrabold text-primary-dark text-lg flex items-center gap-2">
              <Globe className="w-5 h-5 text-secondary-lime" />
              <span>Collective Pledge Registry</span>
            </h4>
            <p className="text-xs text-primary-dark/50 mt-0.5">Real commitments from activists worldwide.</p>
          </div>
          <span className="text-xs bg-primary-light/10 text-primary-light border border-primary-light/20 font-bold px-3 py-1 rounded-full">
            {pledges.length} Total Pledges
          </span>
        </div>

        {/* Pledges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pledges.map((pledge) => {
            const style = CATEGORY_STYLES[pledge.category] || CATEGORY_STYLES.community;
            return (
              <div
                key={pledge.id}
                className="bg-white border border-light-grey p-5 rounded-2xl shadow-sm relative flex flex-col justify-between hover:shadow-md transition-all duration-300 transform hover:scale-[1.01] overflow-hidden"
              >
                {/* Decorative bottom glow */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-light/10 to-primary-lime/10" />

                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl select-none" role="img" aria-label="avatar">{pledge.avatar}</span>
                      <div>
                        <div className="font-bold text-xs text-primary-dark">{pledge.name}</div>
                        <div className="text-[9px] text-primary-dark/40 font-semibold font-mono uppercase">{pledge.timestamp}</div>
                      </div>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold border ${style.bg}`}>
                      {style.badge} {style.label}
                    </span>
                  </div>

                  {/* Card Text */}
                  <p className="text-xs font-semibold text-primary-dark/90 leading-relaxed italic">
                    "{pledge.text}"
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-4 pt-3 border-t border-light-grey flex items-center justify-between text-[10px] text-primary-dark/40 font-bold">
                  <span className="flex items-center gap-1 text-primary-light">
                    <Award className="w-3.5 h-3.5 text-accent-gold" />
                    Verified Pledge
                  </span>
                  <span className="flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-secondary-lime" />
                    Active Pact
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {pledges.length === 0 && (
          <div className="text-center py-12 text-primary-dark/40 font-semibold italic text-xs">
            No pledges logged yet. Write the first commitment!
          </div>
        )}
      </div>

    </div>
  );
}
