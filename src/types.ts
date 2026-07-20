/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId = 'home' | 'about' | 'features' | 'work' | 'contact';

export interface Archetype {
  id: string;
  name: string;
  icon: string;
  description: string;
  primaryAction: string;
  impactMetric: string;
  color: string;
  actions: string[];
}

export interface Pledge {
  id: string;
  name: string;
  text: string;
  category: 'water' | 'energy' | 'waste' | 'community' | 'advocacy';
  timestamp: string;
  avatar: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'marine' | 'forestry' | 'climate' | 'urban';
  description: string;
  location: string;
  status: 'Active' | 'Completed' | 'Upcoming';
  impact: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialty: string;
}
