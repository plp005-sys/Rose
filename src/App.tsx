/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import FeaturesView from './components/FeaturesView';
import WorkView from './components/WorkView';
import ContactView from './components/ContactView';
import JoinJourney from './components/JoinJourney';
import { Heart, CheckCircle2, Sparkles, AlertCircle, X, ShieldCheck } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  
  // Donate modal state
  const [donateTier, setDonateTier] = useState<15 | 35 | 75 | 150 | 'custom'>(35);
  const [customAmount, setCustomAmount] = useState('');
  const [donateSuccess, setDonateSuccess] = useState(false);
  const [donorName, setDonorName] = useState('');

  // Scroll to top on navigation change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (pageId: PageId) => {
    setCurrentPage(pageId);
  };

  const getDonationImpact = () => {
    const amt = donateTier === 'custom' ? parseFloat(customAmount) || 0 : donateTier;
    if (amt <= 0) return "Supports our general field equipment kits.";
    if (amt < 25) return `Will plant ${Math.floor(amt / 3)} native oak saplings in high-depleted micro-canopies.`;
    if (amt < 60) return `Will secure and sow ${Math.floor(amt / 5)} resilient heat-tolerant coral plugs on coastal reef nurseries.`;
    return `Sponsors ${Math.floor(amt / 12)} high-efficiency smart energy meters for public school grids, saving thousands of carbon overheads annually.`;
  };

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDonateSuccess(true);
    setTimeout(() => {
      setDonateSuccess(false);
      setIsDonateOpen(false);
      setDonorName('');
      setCustomAmount('');
    }, 4500);
  };

  return (
    <div className="animated-bg-mesh min-h-screen flex flex-col relative" id="ecology-app-root">
      
      {/* Moving Ambient Lights */}
      <div className="absolute top-[10%] left-[-100px] w-[500px] h-[500px] ambient-glow-purple rounded-full pointer-events-none z-0" />
      <div className="absolute top-[50%] right-[-100px] w-[600px] h-[600px] ambient-glow-green rounded-full pointer-events-none z-0" />

      {/* Sticky Header */}
      <Header 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
        onOpenDonate={() => setIsDonateOpen(true)}
        onOpenJoinJourney={() => setIsJoinOpen(true)}
      />

      {/* Primary Page Canvas Frame */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 w-full">
        {currentPage === 'home' && (
          <HomeView 
            onNavigate={handleNavigate}
            onOpenJoinJourney={() => setIsJoinOpen(true)}
            onOpenDonate={() => setIsDonateOpen(true)}
          />
        )}
        {currentPage === 'about' && (
          <AboutView 
            onOpenJoinJourney={() => setIsJoinOpen(true)}
          />
        )}
        {currentPage === 'features' && (
          <FeaturesView />
        )}
        {currentPage === 'work' && (
          <WorkView />
        )}
        {currentPage === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenDonate={() => setIsDonateOpen(true)}
      />

      {/* ======================================================= */}
      {/* 1. INTERACTIVE FULL-SCREEN JOIN OUR JOURNEY CTA WIZARD */}
      {/* ======================================================= */}
      {isJoinOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-primary-dark/65 backdrop-blur-sm animate-fade-in">
          <div className="bg-warm-white w-full max-w-4xl rounded-3xl border border-light-grey shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto">
            <JoinJourney onClose={() => setIsJoinOpen(false)} />
          </div>
        </div>
      )}

      {/* ======================================================= */}
      {/* 2. INTERACTIVE DONATION MODAL (TIER CALCULATIONS)      */}
      {/* ======================================================= */}
      {isDonateOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-primary-dark/65 backdrop-blur-sm animate-fade-in">
          <div className="bg-warm-white w-full max-w-md rounded-3xl border border-light-grey shadow-2xl p-6 sm:p-8 relative overflow-hidden">
            
            <button 
              onClick={() => setIsDonateOpen(false)}
              className="absolute top-5 right-5 text-primary-dark/50 hover:text-primary-dark p-2 rounded-full hover:bg-light-grey transition-all"
            >
              ✕
            </button>

            {donateSuccess ? (
              <div className="space-y-4 text-center py-6 animate-pulse-slow">
                <CheckCircle2 className="w-16 h-16 text-secondary-lime mx-auto stroke-[2.5]" />
                <h3 className="font-black text-2xl text-primary-dark tracking-tight">Eco-Donation Received!</h3>
                <p className="text-xs text-primary-dark/80 max-w-sm mx-auto leading-relaxed">
                  Deep thanks, {donorName || 'generous protector'}. Your contribution has been registered on our transparent public impact ledger. Together, we generate profound offsets.
                </p>
                <div className="bg-primary-lime/10 border border-primary-lime/30 p-3.5 rounded-xl text-xs font-bold text-primary-dark leading-snug">
                  {getDonationImpact()}
                </div>
              </div>
            ) : (
              <form onSubmit={handleDonateSubmit} className="space-y-5">
                
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-primary-light font-bold uppercase tracking-wider">
                    <Heart className="w-4 h-4 fill-primary-light/10 text-primary-light" />
                    <span>Conservation Funding Tiers</span>
                  </div>
                  <h3 className="text-2xl font-black text-primary-dark tracking-tight">Support Our Campaigns</h3>
                  <p className="text-xs text-primary-dark/60">Every dollar goes directly into tree plantings, marine grids, and school solar retrofits.</p>
                </div>

                {/* Grid tiers */}
                <div className="grid grid-cols-3 gap-2.5">
                  {[15, 35, 75, 150].map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setDonateTier(tier as any)}
                      className={`py-3.5 rounded-xl border text-sm font-extrabold text-center transition-all cursor-pointer ${
                        donateTier === tier
                          ? 'border-primary-light bg-primary-light/5 text-primary-light scale-102 shadow-inner'
                          : 'border-light-grey bg-white text-primary-dark/80 hover:bg-light-grey/40'
                      }`}
                    >
                      ${tier}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => { setDonateTier('custom'); setCustomAmount(''); }}
                    className={`col-span-2 py-3.5 rounded-xl border text-sm font-extrabold text-center transition-all cursor-pointer ${
                      donateTier === 'custom'
                        ? 'border-primary-light bg-primary-light/5 text-primary-light scale-102 shadow-inner'
                        : 'border-light-grey bg-white text-primary-dark/80 hover:bg-light-grey/40'
                    }`}
                  >
                    Custom Sum
                  </button>
                </div>

                {/* Custom tier field */}
                {donateTier === 'custom' && (
                  <div className="space-y-1 animate-fade-in">
                    <label className="text-[10px] font-extrabold uppercase text-primary-dark/60 tracking-wider">Enter Custom Amount ($)</label>
                    <input
                      type="number"
                      required
                      min="5"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      placeholder="E.g., 250"
                      className="w-full bg-light-grey/40 border border-light-grey focus:border-primary-light focus:ring-1 focus:ring-primary-light text-xs text-primary-dark rounded-xl px-4 py-3 outline-none"
                    />
                  </div>
                )}

                {/* Calculation outcome preview */}
                <div className="bg-light-grey/65 border border-light-grey p-4 rounded-2xl">
                  <div className="text-[10px] font-extrabold text-primary-dark/45 uppercase tracking-wider">Funding Action Outcome</div>
                  <p className="text-xs font-bold text-primary-dark mt-1 leading-normal italic">
                    "{getDonationImpact()}"
                  </p>
                </div>

                {/* Donor details */}
                <div className="space-y-3 pt-1">
                  <div className="space-y-1">
                    <label className="text-[10px] font-extrabold uppercase text-primary-dark/60 tracking-wider">Donor Name</label>
                    <input
                      type="text"
                      required
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      placeholder="E.g., Alexander Humboldt"
                      className="w-full bg-light-grey/40 border border-light-grey focus:border-primary-light focus:ring-1 focus:ring-primary-light text-xs text-primary-dark rounded-xl px-4 py-3 outline-none"
                    />
                  </div>
                </div>

                {/* Submit action */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary-lime text-primary-dark font-black rounded-xl text-xs hover:bg-secondary-lime shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-primary-dark/10" />
                  <span>Transmit Eco-Donation</span>
                </button>

                <div className="flex justify-center items-center gap-1 text-[10px] text-primary-dark/40 font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-secondary-lime" />
                  <span>Fully encrypted 100% transparent audit ledger</span>
                </div>

              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
