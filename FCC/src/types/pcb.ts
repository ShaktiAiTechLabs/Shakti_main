export interface PCBProduct {
  id: string;
  name: string;
  slug: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  topImage?: string;
  bottomImage?: string;
  layers: string;
  maxDimensions: string;
  minLineSpacing: string;
  copperThickness: string;
  surfaceFinishes: string[];
  keyApplications: string[];
  highlights: string[];
  specTable: { [key: string]: string };
}

export interface EquipmentItem {
  id: string;
  name: string;
  category: 'machine' | 'cleanroom' | 'qa' | 'process_control';
  tag: string;
  description: string;
  image: string;
  specifications: string[];
  manufacturer?: string;
  capabilityMetric: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  isUpcoming?: boolean;
}

export interface ClientPartner {
  name: string;
  logo: string;
  sector: string;
  origin: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  category: string;
  content: string[];
}

export interface QuoteConfig {
  boardType: string;
  layers: number;
  width: number;
  height: number;
  quantity: number;
  material: string;
  thickness: string;
  copperWeight: string;
  surfaceFinish: string;
  leadTime: string;
}
