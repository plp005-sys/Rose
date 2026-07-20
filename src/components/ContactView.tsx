/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle, CheckCircle2, MessageCircle } from 'lucide-react';
import PledgeBoard from './PledgeBoard';

export default function ContactView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('Volunteer');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim() && message.trim()) {
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setName('');
        setEmail('');
        setMessage('');
      }, 5000);
    }
  };

  return (
    <div className="space-y-20 animate-fade-in">
      
      {/* 1. SECTION INTRO */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-primary-light uppercase tracking-wider bg-primary-light/10 border border-primary-light/20 px-3.5 py-1 rounded-full">
          Get In Touch
        </span>
        <h2 className="text-4xl font-black text-primary-dark tracking-tight">
          Coordinate with Our Field Camps
        </h2>
        <p className="text-sm sm:text-base text-primary-dark/70 leading-relaxed">
          Whether you want to sponsor a coral sanctuary reef, volunteer for tree nurseries, or ask general ecology questions, our team is active and ready to support.
        </p>
      </section>

      {/* 2. CONTACT COLUMNS CONTAINER */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Coordinates left card (Columns: 5) */}
        <div className="lg:col-span-5 bg-white border border-light-grey rounded-3xl p-6 sm:p-8 shadow-sm space-y-8">
          <div>
            <h3 className="font-bold text-xl text-primary-dark">Ecology NGO Headquarters</h3>
            <p className="text-xs text-primary-dark/60 mt-1">Our offices operate on 100% solar micro-grids with zero paper waste policies.</p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-primary-dark/95">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-primary-lime/10 text-secondary-lime rounded-xl shrink-0">
                <MapPin className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="space-y-0.5">
                <div className="font-bold text-primary-dark">HQ Location Coordinates</div>
                <div className="text-primary-dark/75 leading-relaxed font-semibold">
                  Suite 404, Green Siding Road,<br />
                  Freiburg Core, Baden-Württemberg, Germany
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-accent-blue/10 text-accent-blue rounded-xl shrink-0">
                <Mail className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="space-y-0.5">
                <div className="font-bold text-primary-dark">Email Dispatch Channels</div>
                <div className="text-primary-dark/75 leading-relaxed font-semibold">
                  general@ecology-ngo.org<br />
                  sponsorships@ecology-ngo.org
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-accent-gold/10 text-accent-gold rounded-xl shrink-0">
                <Phone className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="space-y-0.5">
                <div className="font-bold text-primary-dark">Direct Voice Trunkline</div>
                <div className="text-primary-dark/75 leading-relaxed font-semibold">
                  +49 (0) 761 405900 (Mon-Fri 9:00 - 17:00 CET)
                </div>
              </div>
            </div>
          </div>

          {/* Environmental disclosure seal */}
          <div className="border-t border-light-grey pt-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-lime/10 flex items-center justify-center shrink-0">
              🌱
            </div>
            <p className="text-[10px] text-primary-dark/70 leading-normal font-semibold">
              Ecology NGO is registered as a fully exempt non-profit environmental organization under European municipal registries. All receipts are fully tax-deductible.
            </p>
          </div>
        </div>

        {/* Form right card (Columns: 7) */}
        <div className="lg:col-span-7 bg-white border border-light-grey rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-1.5 text-xs text-primary-light font-bold uppercase tracking-wider mb-2">
            <MessageCircle className="w-4 h-4" />
            <span>Encrypted dispatch channel</span>
          </div>
          <h3 className="text-2xl font-black text-primary-dark tracking-tight">Send Inquiry Message</h3>
          <p className="text-xs text-primary-dark/60 mt-1 mb-6">Your query will route directly to specialized campaign captains.</p>

          {sent ? (
            <div className="bg-primary-lime/10 border border-primary-lime/30 text-primary-dark p-8 rounded-2xl text-center space-y-4 animate-pulse-slow">
              <CheckCircle2 className="w-12 h-12 text-secondary-lime mx-auto stroke-[2.5]" />
              <h4 className="font-black text-lg">Message Dispatched!</h4>
              <p className="text-xs text-primary-dark/80 max-w-sm mx-auto leading-relaxed">
                Thank you, {name || 'supporter'}. Your message has successfully routed to our camp. An activist or science advisor will email you back within 24-48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSend} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-extrabold uppercase text-primary-dark/60 tracking-wider">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="E.g., Jane Doe"
                    className="w-full bg-light-grey/40 border border-light-grey focus:border-primary-light focus:ring-1 focus:ring-primary-light text-xs text-primary-dark rounded-xl px-4 py-3.5 outline-none transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-extrabold uppercase text-primary-dark/60 tracking-wider">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E.g., jane@example.com"
                    className="w-full bg-light-grey/40 border border-light-grey focus:border-primary-light focus:ring-1 focus:ring-primary-light text-xs text-primary-dark rounded-xl px-4 py-3.5 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Inquiry Type */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-extrabold uppercase text-primary-dark/60 tracking-wider block">Inquiry Category</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Volunteer', 'Corporate Sponsor', 'Academic/Science', 'Press/Media'].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setType(opt)}
                      className={`py-2 rounded-xl border text-[11px] font-bold text-center transition-all cursor-pointer ${
                        type === opt
                          ? 'border-primary-light bg-primary-light/5 text-primary-light shadow-inner'
                          : 'border-light-grey bg-white text-primary-dark/75 hover:bg-light-grey/30'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-extrabold uppercase text-primary-dark/60 tracking-wider">Your Message</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about yourself, your query, or your corporate alignment..."
                  className="w-full bg-light-grey/40 border border-light-grey focus:border-primary-light focus:ring-1 focus:ring-primary-light text-xs text-primary-dark rounded-xl px-4 py-3.5 outline-none transition-all placeholder-primary-dark/45 resize-none leading-relaxed"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 bg-primary-dark text-white font-extrabold rounded-xl text-xs hover:bg-primary-light shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Dispatch Inquiry</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

      </section>

      {/* 3. COLLECTIVE COMMUNITY PLEDGES (Focal Point) */}
      <section className="space-y-8 pt-6">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <HelpCircle className="w-8 h-8 text-secondary-lime mx-auto" />
          <h3 className="text-2xl font-black text-primary-dark tracking-tight">Our Collective Community Pledges</h3>
          <p className="text-xs text-primary-dark/65">
            Post your personal conservation commitment below to inspire others and pledge active eco-cooperation!
          </p>
        </div>

        {/* Embedded Pledge Board component */}
        <PledgeBoard />
      </section>

    </div>
  );
}
