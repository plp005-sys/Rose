/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Leaf, Mail, Heart, Github, Globe, RefreshCw, CheckCircle2 } from 'lucide-react';
import { PageId } from '../types';
import imgEcologyLogo from '../assets/images/regenerated_image_1783720672973.png';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: () => void;
}

const ECO_TIPS = [
  "Unplug electronics that aren't in use to save phantom energy waste.",
  "Composting organic scraps reduces methane emissions from landfills.",
  "Using a cold laundry cycle saves up to 90% of your washing machine's electricity.",
  "Planting native flowers supports local bees, butterflies, and essential pollinators.",
  "Carrying a reusable canvas bag prevents hundreds of plastic bags from entering ecosystems.",
  "Reducing meat intake even one day a week (like Meatless Monday) conserves thousands of gallons of water.",
];

export default function Footer({ onNavigate, onOpenDonate }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [tipIndex, setTipIndex] = useState(0);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 5000);
    }
  };

  const cycleTip = () => {
    setTipIndex((prev) => (prev + 1) % ECO_TIPS.length);
  };

  return (
    <footer className="animated-footer-bg text-white font-medium pt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <div 
              onClick={() => onNavigate('home')} 
              className="flex flex-col items-center gap-2 cursor-pointer mb-6"
            >
              <img 
                src={imgEcologyLogo} 
                alt="The Elephant Rose Foundation Logo" 
                referrerPolicy="no-referrer"
                className="h-12 sm:h-14 w-auto" 
              />
              <div className="text-center leading-tight -mt-1">
                <span className="font-script text-[24px] font-normal tracking-wide text-white">The Elephant Rose</span><br />
                <span className="font-serif text-[11px] uppercase tracking-widest font-bold text-white mt-0.5 block">Foundation</span>
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">
              About
            </h4>
            <ul className="space-y-3">
              <li><button onClick={() => onNavigate('about')} className="hover:opacity-70 transition-all text-white/80 font-semibold">Who We Are</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:opacity-70 transition-all text-white/80 font-semibold">Our Story</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:opacity-70 transition-all text-white/80 font-semibold">Gallery</button></li>
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">
              Service
            </h4>
            <ul className="space-y-3">
              <li><button onClick={() => onNavigate('features')} className="hover:opacity-70 transition-all text-white/80 font-semibold">Nature</button></li>
              <li><button onClick={onOpenDonate} className="hover:opacity-70 transition-all text-white/80 font-semibold">Donation</button></li>
              <li><button onClick={() => onNavigate('work')} className="hover:opacity-70 transition-all text-white/80 font-semibold">Action</button></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">
              Policies
            </h4>
            <ul className="space-y-3">
              <li><button onClick={() => onNavigate('contact')} className="hover:opacity-70 transition-all text-white/80 font-semibold">Terms & Conditions</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:opacity-70 transition-all text-white/80 font-semibold">Service</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:opacity-70 transition-all text-white/80 font-semibold">Destination</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm text-white/80 font-semibold">
              <li className="flex items-center gap-2">
                <div className="w-5 flex justify-center"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
                Chicago, USA
              </li>
              <li className="flex items-center gap-2">
                <div className="w-5 flex justify-center"><Mail className="w-4 h-4" /></div>
                Greenrise@Gmail.Com
              </li>
              <li className="flex items-center gap-2">
                <div className="w-5 flex justify-center"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
                5511515-5555
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Base */}
      <div className="bg-[#62f507] py-4 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[#420733] font-bold text-sm">
        <div>
          © 2026  The Elephant Rose Foundation. All Rights Reserved.
        </div>
        <div className="flex gap-4">
          <a href="#" className="w-7 h-7 rounded-full bg-white text-[#62f507] flex justify-center items-center hover:opacity-80 transition-all">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="#" className="w-7 h-7 rounded-full bg-white text-[#62f507] flex justify-center items-center hover:opacity-80 transition-all">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="#" className="w-7 h-7 rounded-full bg-white text-[#62f507] flex justify-center items-center hover:opacity-80 transition-all">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
          </a>
          <a href="#" className="w-7 h-7 rounded-full bg-white text-[#62f507] flex justify-center items-center hover:opacity-80 transition-all">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
