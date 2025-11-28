import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
  primary?: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface CaseStudy {
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  stats: { label: string; value: string }[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string;
}

export enum FormDataGoal {
  SAVE_TIME = "Save Time",
  SCALE_OUTPUT = "Scale Output",
  FIX_PROCESS = "Fix Broken Process",
  OTHER = "Other"
}

export enum FormDataBudget {
  UNDER_5K = "< €5k",
  FIVE_TO_TEN = "€5k - €10k",
  TEN_PLUS = "€10k+",
}

export enum Department {
  SALES = "Sales",
  MARKETING = "Marketing",
  FINANCE = "Finance",
  OPERATIONS = "Operations",
  SUPPORT = "Support"
}

export interface AgentCase {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  department: Department;
  stats: { label: string; value: string }[];
  tags: string[];
  challenge: string;
  solution: string;
  workflowSteps: { title: string; desc: string; icon: any }[];
  techStack: { name: string; iconUrl?: string; iconComponent?: any }[];
}