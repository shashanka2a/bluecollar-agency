export type SectionId = 
  | 'intro'
  | 'roofing'
  | 'hvac'
  | 'plumbing'
  | 'electrical'
  | 'exterior'
  | 'reassemble';

export interface ProjectStat {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  clientName: string;
  description: string;
  stat: string; // e.g. "+62% calls"
  image: string;
}

export interface SectionData {
  id: SectionId;
  label: string;
  headline: string;
  subline: string;
  projects: Project[];
}

export interface ScrollState {
  progress: number;
  activeSection: SectionId;
  sectionIndex: number;
}