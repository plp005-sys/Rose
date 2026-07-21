/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Compass, Leaf, Users, Globe2, ArrowUpRight, Play, Facebook, Twitter, Instagram, Trees } from 'lucide-react'; import { Cast, Subtitles, Settings, ThumbsUp, ThumbsDown, MessageSquare, Bookmark, Share2, MoreHorizontal, Maximize } from 'lucide-react';
import { PageId } from '../types';
import imgHandsPlant from '../assets/images/hands_plant_1783724515576.jpg';
import imgSeaTurtle from '../assets/images/sea_turtle_1783724529622.jpg';
import imgClimateGuardians from '../assets/images/climate_guardians_1783724926774.jpg';
import imgSavannahPlantation from '../assets/images/savannah_plantation_1784543690595.jpg';
import imgBlueHorizon from '../assets/images/blue_horizon_1783724958039.jpg';
import imgTreeHands from '../assets/images/tree_hands_1783725323984.jpg';
import imgPlasticWaste from '../assets/images/plastic_waste_1783725336293.jpg';
import imgSolarFarm from '../assets/images/solar_farm_1783725347158.jpg';
import imgUrbanGreen from '../assets/images/urban_green_1783725359003.jpg';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
  onOpenJoinJourney: () => void;
  onOpenDonate: () => void;
}

export default function HomeView({ onNavigate, onOpenJoinJourney, onOpenDonate }: HomeViewProps) {
  const [isPlayingForestVideo, setIsPlayingForestVideo] = useState(false);
  
  // Real paths to generated assets
  const imgFloatingIsland = "/src/assets/images/floating_island_hero_1783688844703.jpg";
  const imgCoastalCare = "/src/assets/images/coastal_care_orb_1783688861902.jpg";
  const imgGreenLiving = "/src/assets/images/regenerated_image_1783798276861.png";
  const imgClimateAction = "/src/assets/images/climate_action_globe_1783688892235.jpg";

  return (
    <div className="space-y-4">
      
      {/* 1. HERO SECTION (Reference Image Match) */}
      <section className="relative min-h-[600px] lg:min-h-[750px] flex items-center">
        
        {/* Background Video that fades into the right and bottom */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-white z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white z-10" />
          <video
            src="https://ik.imagekit.io/csia005/kling_20260703_VIDEO__4574_0.mp4?updatedAt=1783087085867"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-12 pb-64 lg:pt-20 lg:pb-80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Right Content Column */}
            <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-right flex flex-col items-end">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-right">
                <span className="font-serif text-[#ff0d72]">Join Our Journey;</span><br />
                <span className="font-modern text-[#62f507] font-bold tracking-wider pl-1 pr-2">Small actions,</span><br />
                <span className="font-milky text-[#62f507] font-normal tracking-wider pl-1 pr-2">Big Impact</span>
              </h1>
              
              <p className="text-[15px] sm:text-base text-primary-dark/80 font-medium leading-relaxed max-w-sm text-right">
                Join us in empowering the next generation to appreciate and protect wildlife.
              </p>
              
              <div className="pt-4 flex justify-end">
                <button
                   onClick={() => onNavigate('about')}
                  className="px-8 py-3 bg-[#62f507] hover:bg-[#1bc405] text-[#420733] font-bold rounded-full text-sm transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
                >
                  Our Approach
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 2. THE THREE OVERLAPPING CARDS (Reference Image Match) */}
        <div className="absolute -bottom-24 lg:-bottom-36 left-0 right-0 z-30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Conservation & Environmental Education */}
              <div className="bg-[#62f507]/10 backdrop-blur-md border border-[#62f507]/20 rounded-3xl p-6 sm:pt-8 sm:pb-10 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                <div className="w-28 h-20 rounded-2xl overflow-hidden mb-6 shadow-sm">
                  <img
                    src={imgCoastalCare}
                    alt="Reflective crystal ball on coastal sunset"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-[22px] text-[#ff0d72] tracking-tight mb-2">Conservation & Environmental Education</h3>
                <p className="text-[13px] text-[#ff0d72]/80 font-semibold">Safeguarding our green planet</p>
              </div>

              {/* Card 2: Environmental Education */}
              <div className="bg-gradient-to-b from-[#eef9e4] to-[#e8f5db]/90 rounded-3xl p-6 sm:pt-8 sm:pb-10 flex flex-col items-center text-center transition-transform hover:-translate-y-1 scale-105 shadow-xl relative z-10">
                <div className="w-28 h-20 rounded-2xl overflow-hidden mb-6 shadow-sm">
                  <img
                    src={imgGreenLiving}
                    alt="Glass drop on forest moss"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-[22px] text-[#ff0d72] tracking-tight mb-2">Media & Cinema</h3>
                <p className="text-[13px] text-[#ff0d72]/80 font-semibold">Inspiring stories through Books, Films, Documentaries, Animation & Music</p>
              </div>

              {/* Card 3: Climate Action */}
              <div className="bg-[#62f507]/10 backdrop-blur-md border border-[#62f507]/20 rounded-3xl p-6 sm:pt-8 sm:pb-10 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                <div className="w-28 h-20 rounded-2xl overflow-hidden mb-6 shadow-sm">
                  <img
                    src={imgClimateAction}
                    alt="Earth globe orb on grass"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="font-bold text-[22px] text-[#ff0d72] tracking-tight mb-2">Fundraisers, Merch, Donations & Book Sales</h3>
                <p className="text-[13px] text-[#ff0d72]/80 font-semibold">Programs & Projects available</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. LEADING THE WAY SECTION */}
      <section className="bg-transparent pt-32 pb-12 sm:pt-44 px-6 sm:px-12 mx-4 sm:mx-0">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img 
              src="/src/assets/images/ocean_purple_hue_1783721785941.jpg" 
              alt="Ocean" 
              className="w-full max-w-[300px] h-64 md:h-72 object-cover rounded-tl-[80px] rounded-br-[80px] shadow-sm"
            />
          </div>
          
          {/* Center Content */}
          <div className="w-full md:w-1/3 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#ff0d72] tracking-tight leading-tight">
              A story to inspire
            </h2>
            <p className="text-[14px] md:text-[15px] text-gray-800 font-medium leading-relaxed">
              Through Rosie's journey, we cultivate compassion and awareness about wildlife conservation.
            </p>
            <button className="px-8 py-3 bg-[#bf0a92] hover:bg-[#a1077a] text-white font-bold rounded-full text-sm transition-all duration-300">
              Learn More
            </button>
          </div>
          
          {/* Right Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img 
              src="/src/assets/images/regenerated_image_1783910252408.png" 
              alt="Forest" 
              className="w-full max-w-[300px] h-64 md:h-72 object-cover rounded-tr-[80px] rounded-bl-[80px] shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* 4. MAKING AN IMPACT SECTION */}
      <section className="text-center space-y-12">
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ff0d72] tracking-tight">
            Making an Impact,<br />One Feature at a Time
          </h2>
          <p className="text-[14px] md:text-[15px] text-[#ff0d72] font-medium leading-relaxed">
            Empowering individuals and communities to create a more sustainable world. Together, we're building a greener future, one step at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4">
            <img src="/src/assets/images/climate_purple_1783722533481.jpg" alt="Climate" className="w-full h-64 object-cover rounded-3xl shadow-sm" />
            <h3 className="text-xl font-bold text-black">Climate</h3>
          </div>
          <div className="space-y-4">
            <img src="/src/assets/images/ocean_purple_1783722545724.jpg" alt="Ocean" className="w-full h-64 object-cover rounded-3xl shadow-sm" />
            <h3 className="text-xl font-bold text-black">Ocean</h3>
          </div>
          <div className="space-y-4">
            <img src="/src/assets/images/wildlife_purple_1783722560169.jpg" alt="Wildlife" className="w-full h-64 object-cover rounded-3xl shadow-sm" />
            <h3 className="text-xl font-bold text-black">Wildlife</h3>
          </div>
          <div className="space-y-4">
            <img src="/src/assets/images/forest_purple_1783722569776.jpg" alt="Forests" className="w-full h-64 object-cover rounded-3xl shadow-sm" />
            <h3 className="text-xl font-bold text-black">Forests</h3>
          </div>
          <div className="space-y-4">
            <img src="/src/assets/images/energy_purple_1783722579441.jpg" alt="Energy" className="w-full h-64 object-cover rounded-3xl shadow-sm" />
            <h3 className="text-xl font-bold text-black">Energy</h3>
          </div>
          <div className="space-y-4">
            <img src="/src/assets/images/waste_purple_1783722589867.jpg" alt="Waste" className="w-full h-64 object-cover rounded-3xl shadow-sm" />
            <h3 className="text-xl font-bold text-black">Waste</h3>
          </div>
        </div>
      </section>

      {/* 5. DUAL ACTION COLUMN INFO (REPLACED WITH NEW LAYOUT) */}
      <section className="flex flex-col gap-2 sm:gap-4 pt-16 pb-16 md:pb-24">
        <div className="flex flex-col gap-10 md:gap-16 px-4 sm:px-8 md:px-12 lg:px-20 max-w-6xl mx-auto w-full">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 px-4 pb-2 md:pb-6">
            <h2 className="text-3xl sm:text-5xl font-bold text-[#ff0d72] leading-tight">
              Rebuilding Forests,<br />Restoring Balance
            </h2>
            <p className="text-[#ff0d72] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
              We focus on supporting environmental education and reviving degraded ecosystems to restore harmony between nature and humanity; ensuring a sustainable and thriving environment for all living beings.
            </p>
          </div>

          {/* First Block */}
          <div className="relative flex flex-col md:flex-row items-center justify-center">
            {/* Image Container */}
            <div className="w-full md:w-3/5 lg:w-[60%] z-0">
              <img 
                src={imgHandsPlant} 
                alt="Hands holding a plant" 
                className="w-full h-auto object-cover rounded-[2rem] sm:rounded-[3rem] shadow-lg"
                style={{ aspectRatio: '16/11' }}
              />
            </div>
            
            {/* Overlay Card Container */}
            <div className="w-[90%] md:w-1/2 lg:w-[50%] md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 mt-[-60px] md:mt-0 z-10 flex justify-end">
              <div className="bg-[#bf0a92]/10 backdrop-blur-md border border-[#bf0a92]/20 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden w-full max-w-lg">
                {/* Decorative shapes */}
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/60 rounded-full blur-2xl"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/40 rounded-full blur-xl translate-x-1/2 -translate-y-1/2"></div>
                
                <div className="relative z-10 flex flex-col items-end gap-4 text-right">
                  <h3 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#62f507] leading-tight mb-2">
                    Achieve More,<br />Together
                  </h3>
                  <p className="text-black text-sm sm:text-base max-w-xs font-medium leading-relaxed mb-4">
                    Explore our projects that drive meaningful change and help protect the forests for future generation.
                  </p>
                  <button className="bg-[#bf0a92] text-white font-bold text-sm px-8 py-3 rounded-full hover:bg-[#a1077a] transition-colors shadow-sm">
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Second Block */}
          <div className="relative flex flex-col-reverse md:flex-row items-center justify-center pt-8">
            {/* Overlay Card Container */}
            <div className="w-[90%] md:w-1/2 lg:w-[50%] md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 mt-[-60px] md:mt-0 z-10 flex justify-start">
              <div className="bg-[#bf0a92]/10 backdrop-blur-md border border-[#bf0a92]/20 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden w-full max-w-lg">
                {/* Decorative shapes */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/60 rounded-full blur-2xl"></div>
                <div className="absolute top-0 left-0 w-40 h-40 bg-white/40 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2"></div>
                
                <div className="relative z-10 flex flex-col items-start gap-4">
                  <h3 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#62f507] leading-tight mb-2">
                    One Vision,<br />Many Hands
                  </h3>
                  <p className="text-black text-sm sm:text-base max-w-xs font-medium leading-relaxed mb-4">
                    Our work is dedicated to imparting knowledge of wildlife custodianship and children's environmental education.
                  </p>
                  <button className="bg-[#bf0a92] text-white font-bold text-sm px-8 py-3 rounded-full hover:bg-[#a1077a] transition-colors shadow-sm">
                    View More
                  </button>
                </div>
              </div>
            </div>

            {/* Image Container */}
            <div className="w-full md:w-3/5 lg:w-[60%] z-0 ml-auto">
              <img 
                src={imgSeaTurtle} 
                alt="Sea turtle underwater" 
                className="w-full h-auto object-cover rounded-[2rem] sm:rounded-[3rem] shadow-lg"
                style={{ aspectRatio: '16/11' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. CURRENT INITIATIVES CARDS */}
      <section className="mt-20 md:mt-32 pt-0 pb-16 sm:pb-24 px-4 sm:px-8 md:px-12 lg:px-20 max-w-7xl mx-auto w-full relative z-20">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-8 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ff0d72] leading-tight">
            Current Initiatives
          </h2>
          <p className="text-[#ff0d72] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Our current initiatives focus on environmental education, developmental outreaches, and media projects; from raising awareness for wildlife protection to supporting ecosystems restoration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 lg:gap-12">
          
          {/* Card 1 */}
          <div className="relative pt-6 px-4 pb-10 mt-12 flex flex-col h-full scale-[1.15] sm:scale-[1.20] hover:scale-[1.25] transition-transform duration-500">
            <div className="absolute bottom-0 left-0 right-0 top-32 bg-[#f4f7fe] rounded-[2rem] sm:rounded-[2.5rem] z-0"></div>
            
            <div className="relative z-10 w-full scale-110 sm:scale-[1.15] transition-transform duration-500 hover:scale-[1.20] aspect-square mb-8 rounded-[2.5rem] sm:rounded-[3rem] border-[12px] sm:border-[16px] border-white bg-white overflow-hidden shadow-sm shrink-0">
              <img src={imgClimateGuardians} alt="Climate Guardians" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 flex flex-col items-center text-center px-2 flex-grow">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0c2a2a] mb-2">Developmental Outreach</h3>
              <p className="text-[#0c2a2a] text-xs sm:text-sm font-semibold mb-8">Reaching out to the remote areas for Skills development, Awareness via Media, and Supporting children in Environmental Education.</p>
              <button className="bg-white text-[#0c2a2a] font-bold text-xs sm:text-sm px-8 py-3 rounded-full hover:bg-gray-50 transition-colors shadow-sm w-max mt-auto">
                More
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative pt-6 px-4 pb-10 mt-12 flex flex-col h-full scale-[1.15] sm:scale-[1.20] hover:scale-[1.25] transition-transform duration-500">
            <div className="absolute bottom-0 left-0 right-0 top-32 bg-[#ebfcf3] rounded-[2rem] sm:rounded-[2.5rem] z-0"></div>
            
            <div className="relative z-10 w-full scale-110 sm:scale-[1.15] transition-transform duration-500 hover:scale-[1.20] aspect-square mb-8 rounded-[2.5rem] sm:rounded-[3rem] border-[12px] sm:border-[16px] border-[#FFD700]/30 bg-[#FFD700]/10 backdrop-blur-xl overflow-hidden shadow-lg shrink-0">
              <img src={imgSavannahPlantation} alt="Forests of the Future" className="w-full h-full object-contain" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center px-2 flex-grow">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0c2a2a] mb-2">Environmental Education</h3>
              <p className="text-[#0c2a2a] text-xs sm:text-sm font-semibold mb-8">Custody awareness, Restoring, Replanting</p>
              <button className="bg-white text-[#0c2a2a] font-bold text-xs sm:text-sm px-8 py-3 rounded-full hover:bg-gray-50 transition-colors shadow-sm w-max mt-auto">
                More
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative pt-6 px-4 pb-10 mt-12 flex flex-col h-full scale-[1.15] sm:scale-[1.20] hover:scale-[1.25] transition-transform duration-500">
            <div className="absolute bottom-0 left-0 right-0 top-32 bg-[#f0f3fd] rounded-[2rem] sm:rounded-[2.5rem] z-0"></div>
            
            <div className="relative z-10 w-full scale-110 sm:scale-[1.15] transition-transform duration-500 hover:scale-[1.20] aspect-square mb-8 rounded-[2.5rem] sm:rounded-[3rem] border-[12px] sm:border-[16px] border-white bg-white overflow-hidden shadow-sm shrink-0">
              <img src={imgBlueHorizon} alt="Blue Horizon" className="w-full h-full object-cover" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center px-2 flex-grow">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0c2a2a] mb-2">Blue Horizon</h3>
              <p className="text-[#0c2a2a] text-xs sm:text-sm font-semibold mb-8">Restoring Ocean Health</p>
              <button className="bg-white text-[#0c2a2a] font-bold text-xs sm:text-sm px-8 py-3 rounded-full hover:bg-gray-50 transition-colors shadow-sm w-max mt-auto">
                More
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 8. SAVE OUR FOREST SECTION */}
      <section className="relative w-full py-12 sm:py-24 mb-6 flex items-center justify-center px-4 sm:px-8 lg:px-12 bg-transparent">
        {/* Full Section Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-transparent" />
        </div>

        {/* Center Container / Glassmorphism Video Player */}
        <div className="relative z-10 w-full max-w-[1000px] aspect-[16/9] bg-gradient-to-br from-[#8a2387] via-[#bf0a92] to-[#451859] border border-white/20 rounded-3xl sm:rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-xl pointer-events-none z-0"></div>
          <div className="relative z-10 w-full h-full">
          
          {isPlayingForestVideo ? (
             <div className="relative w-full h-full bg-black">
                <iframe
                  src="https://www.youtube.com/embed/WXhMy0AcLBs?si=zYidE0hyffprmgxs&autoplay=1&mute=0"
                  title="Rosie the African Elephant Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
                <button 
                  onClick={() => setIsPlayingForestVideo(false)}
                  className="absolute top-4 right-4 px-4 py-2 bg-black/60 hover:bg-black/80 text-white text-xs font-bold tracking-wider uppercase rounded-full transition-colors backdrop-blur-md border border-white/20 z-50"
                >
                  Close
                </button>
             </div>
          ) : (
             <div className="w-full h-full flex flex-col p-6 sm:p-10">
                {/* Top Bar */}
                <div className="flex items-center justify-between text-white/90 w-full mb-auto z-10">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm sm:text-base tracking-wide">Rosie the African Elephant Trailer</span>
                  </div>
                  <div className="flex items-center gap-4 sm:gap-6">
                    {/* Toggle switch mock */}
                    <div className="w-10 h-5 sm:w-12 sm:h-6 bg-white/20 rounded-full p-1 border border-white/30 flex items-center shadow-inner cursor-pointer relative">
                       <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full shadow-sm ml-[2px]" />
                       <div className="absolute inset-0 flex items-center justify-end pr-2">
                          <div className="w-[2px] h-[6px] bg-white/70 rounded-full" />
                          <div className="w-[2px] h-[6px] bg-white/70 rounded-full ml-[2px]" />
                       </div>
                    </div>
                    <Cast className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-white transition-colors" />
                    <Subtitles className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-white transition-colors" />
                    <Settings className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div 
                    onClick={() => setIsPlayingForestVideo(true)}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center pointer-events-auto cursor-pointer hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] group"
                  >
                    <div className="w-0 h-0 border-t-[14px] sm:border-t-[18px] border-t-transparent border-l-[22px] sm:border-l-[28px] border-l-white border-b-[14px] sm:border-b-[18px] border-b-transparent ml-2 drop-shadow-lg group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="w-full mt-auto z-10 flex flex-col gap-4">
                  

                  {/* Bottom Controls */}
                  <div className="flex items-center justify-between text-white/90 mt-1">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <a href="https://www.youtube.com/watch?v=WXhMy0AcLBs" target="_blank" rel="noopener noreferrer">
                        <ThumbsUp className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-white transition-colors" />
                      </a>
                      <a href="https://www.youtube.com/watch?v=WXhMy0AcLBs" target="_blank" rel="noopener noreferrer">
                        <ThumbsDown className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-white transition-colors" />
                      </a>
                      <a href="https://www.youtube.com/watch?v=WXhMy0AcLBs#comments" target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-white transition-colors" />
                      </a>
                      <a href="https://www.youtube.com/watch?v=WXhMy0AcLBs" target="_blank" rel="noopener noreferrer">
                        <Bookmark className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-white transition-colors" />
                      </a>
                      <a href="https://www.youtube.com/watch?v=WXhMy0AcLBs" target="_blank" rel="noopener noreferrer">
                        <Share2 className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-white transition-colors" />
                      </a>
                      <a href="https://www.youtube.com/watch?v=WXhMy0AcLBs" target="_blank" rel="noopener noreferrer">
                        <MoreHorizontal className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-white transition-colors" />
                      </a>
                    </div>
                    <Maximize className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-white transition-colors" />
                  </div>
                </div>
             </div>
          )}
          </div>
        </div>
      </section>

      {/* 7. SPOTLIGHT SECTION */}
      <section className="pb-16 sm:pb-24 px-4 sm:px-8 max-w-[1400px] mx-auto w-full">
        <div className="bg-[#f6f8f7] rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#144242] tracking-tight mb-8 sm:mb-12">
            In the Spotlight: Stories That Matter
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Story 1 */}
            <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/9] shadow-sm cursor-pointer">
              <img src={imgTreeHands} alt="Global Reforestation" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex items-end justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl leading-tight text-shadow-sm">
                    Global Reforestation Initiative Hits 1 Million Trees Planted
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm font-medium">January 15, 2024</p>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#144242]" />
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/9] shadow-sm cursor-pointer">
              <img src={imgPlasticWaste} alt="Plastic Waste Legislation" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex items-end justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl leading-tight text-shadow-sm">
                    New Legislation to Curb Plastic Waste Gains Global Support
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm font-medium">March 5, 2024</p>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#144242]" />
                </div>
              </div>
            </div>

            {/* Story 3 */}
            <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/9] shadow-sm cursor-pointer">
              <img src={imgSolarFarm} alt="Largest Solar Farm" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex items-end justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl leading-tight text-shadow-sm">
                    Largest Solar Farm in the Region Goes Operational
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm font-medium">May 20, 2024</p>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#144242]" />
                </div>
              </div>
            </div>

            {/* Story 4 */}
            <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/9] shadow-sm cursor-pointer">
              <img src={imgUrbanGreen} alt="Urban Green Spaces" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex items-end justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl leading-tight text-shadow-sm">
                    Urban Green Spaces Project Transforms Cities Globally
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm font-medium">July 22, 2024</p>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#144242]" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



    </div>
  );
}
