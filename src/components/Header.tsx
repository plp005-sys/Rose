/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Leaf, Menu, X, Heart, Sparkles } from 'lucide-react';
import { PageId } from '../types';
import imgEcologyLogo from '../assets/images/regenerated_image_1783720672973.png';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenDonate: () => void;
  onOpenJoinJourney: () => void;
}

export default function Header({ currentPage, onNavigate, onOpenDonate, onOpenJoinJourney }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'features', label: 'Projects' },
    { id: 'work', label: 'Our Work' },
    { id: 'contact', label: 'Contact' },
  ] as const;

  return (
    <header className="sticky top-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/20 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div 
            onClick={() => { onNavigate('home'); setIsOpen(false); }}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <img 
              src={imgEcologyLogo} 
              alt="Ecology Logo" 
              referrerPolicy="no-referrer"
              className="h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105" 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 lg:space-x-10">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-[15px] font-black transition-all ${
                    isActive 
                      ? 'text-[#62f507]' 
                      : 'text-[#ff0d72]/80 hover:text-[#62f507]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenDonate}
              className="px-6 py-2 bg-[#62f507] hover:bg-[#1bc405] text-[#420733] font-bold rounded-full text-sm transition-all duration-300 cursor-pointer"
            >
              Donate
            </button>
            <button
              onClick={onOpenJoinJourney}
              className="px-6 py-2 bg-[#ff0d72] hover:bg-[#ff0d72] text-white font-bold rounded-full text-sm transition-all duration-300 cursor-pointer"
            >
              Join Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-primary-dark hover:bg-light-grey transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-light-grey bg-warm-white px-4 py-6 space-y-4 shadow-xl animate-fade-in absolute left-0 right-0 z-50">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`text-left px-4 py-3 rounded-xl text-base font-black transition-all ${
                  currentPage === item.id
                    ? 'bg-[#62f507]/10 text-[#62f507] border-l-4 border-[#62f507]'
                    : 'text-[#ff0d72]/80 hover:bg-light-grey hover:text-[#62f507]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="pt-4 border-t border-light-grey flex flex-col gap-3">
            <button
              onClick={() => {
                onOpenDonate();
                setIsOpen(false);
              }}
              className="w-full py-3 bg-[#62f507] text-[#420733] font-bold rounded-xl text-center shadow-sm hover:bg-[#1bc405] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-current opacity-70" />
              Donate to Ecology
            </button>
            <button
              onClick={() => {
                onOpenJoinJourney();
                setIsOpen(false);
              }}
              className="w-full py-3 bg-[#ff0d72] text-white font-bold rounded-xl text-center hover:bg-[#ff0d72] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-white/70" />
              Join Our Journey
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
