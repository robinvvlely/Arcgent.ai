import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, ArrowRight, BarChart3, Database, MessageSquare, Briefcase } from 'lucide-react';
import Button from '../components/ui/Button';
import { Department, AgentCase } from '../types';

// Mock Data - In a real app this might come from a CMS or separate file
const AGENTS: AgentCase[] = [
  {
    id: "1",
    slug: "ai-sdr-hubspot-enrichment",
    title: "AI SDR & Enrichment",
    shortDesc: "Finds prospects, enriches data via external APIs, qualifies them against ICP, and updates HubSpot automatically.",
    department: Department.SALES,
    stats: [
      { label: "Time Saved", value: "20h / week" },
      { label: "Lead Response", value: "4x Faster" }
    ],
    tags: ["Sales", "HubSpot", "Outbound"],
    challenge: "",
    solution: "",
    workflowSteps: [],
    techStack: []
  },
  {
    id: "2",
    slug: "finance-invoice-processor",
    title: "Invoice Processor Agent",
    shortDesc: "Extracts data from PDF invoices attached to emails, validates against POs in Xero, and drafts payments.",
    department: Department.FINANCE,
    stats: [
      { label: "Processing Cost", value: "-70%" },
      { label: "Accuracy", value: "99.9%" }
    ],
    tags: ["Finance", "Xero", "OCR"],
    challenge: "",
    solution: "",
    workflowSteps: [],
    techStack: []
  },
  {
    id: "3",
    slug: "support-ticket-triage",
    title: "AI Customer Support Agent",
    shortDesc: "Handle support tickets without burnout. Collects tickets, checks context, and drafts responses for human review.",
    department: Department.SUPPORT,
    stats: [
      { label: "Ticket Volume", value: "-40%" },
      { label: "CSAT Score", value: "+15%" }
    ],
    tags: ["Support", "Zendesk", "Jira", "Email"],
    challenge: "",
    solution: "",
    workflowSteps: [],
    techStack: []
  },
  {
    id: "4",
    slug: "content-repurposing-engine",
    title: "Content Repurposing Engine",
    shortDesc: "Takes a single blog post and generates 10+ social assets (LinkedIn, Twitter threads) automatically.",
    department: Department.MARKETING,
    stats: [
      { label: "Output", value: "10x" },
      { label: "Writer Hours", value: "0" }
    ],
    tags: ["Marketing", "Content", "LinkedIn"],
    challenge: "",
    solution: "",
    workflowSteps: [],
    techStack: []
  },
  {
    id: "5",
    slug: "ai-seo-content-writer",
    title: "AI SEO Content Writer",
    shortDesc: "Autonomous writer that researches topics, mimics your brand voice, and drafts SEO-optimized articles for review.",
    department: Department.MARKETING,
    stats: [
      { label: "Articles/Mo", value: "+400%" },
      { label: "SEO Traffic", value: "+200%" }
    ],
    tags: ["Marketing", "SEO", "WordPress"],
    challenge: "",
    solution: "",
    workflowSteps: [],
    techStack: []
  },
  {
    id: "6",
    slug: "ai-google-ads-assistant",
    title: "AI Google Ads Assistant",
    shortDesc: "Automates weekly performance audits. Fetches Google Ads data, analyzes KPIs, and sends actionable optimization tips to specialists.",
    department: Department.MARKETING,
    stats: [
      { label: "Audit Time", value: "-2h / week" },
      { label: "ROAS Impact", value: "+12%" }
    ],
    tags: ["Marketing", "Google Ads", "Analytics"],
    challenge: "",
    solution: "",
    workflowSteps: [],
    techStack: []
  },
  {
    id: "7",
    slug: "ai-meta-ads-assistant",
    title: "AI Meta Ads Assistant",
    shortDesc: "Monitors Meta campaigns daily. Detects creative fatigue, analyzes hook rates, and suggests kill/scale actions.",
    department: Department.MARKETING,
    stats: [
      { label: "Audit Time", value: "-3h / week" },
      { label: "Creative Fatigue", value: "-40%" }
    ],
    tags: ["Marketing", "Meta Ads", "Analytics"],
    challenge: "",
    solution: "",
    workflowSteps: [],
    techStack: []
  },
  {
    id: "8",
    slug: "ai-ga4-assistant",
    title: "AI GA4 Assistant",
    shortDesc: "Chat with your analytics. Ask questions in plain English to get instant data, reports, and auto-generated dashboards.",
    department: Department.MARKETING,
    stats: [
      { label: "Reporting Time", value: "-90%" },
      { label: "Data Access", value: "Instant" }
    ],
    tags: ["Marketing", "GA4", "Analytics"],
    challenge: "",
    solution: "",
    workflowSteps: [],
    techStack: []
  }
];

const Portfolio: React.FC = () => {
  const [activeDept, setActiveDept] = useState<Department | "All">("All");

  const filteredAgents = activeDept === "All" 
    ? AGENTS 
    : AGENTS.filter(agent => agent.department === activeDept);

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-100/40 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
             <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-stone-200 text-stone-600 text-sm font-semibold mb-6 shadow-sm">
                <Bot className="w-4 h-4 mr-2 text-brand-600" />
                Agent Library
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-6 tracking-tight">
                Our Built <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600">AI Agents</span>
            </h1>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
                Explore real-world examples of autonomous workflows we've deployed. Filter by department to find your use case.
            </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-12 px-4 sticky top-28 md:top-32 z-30">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3 p-2 bg-white/80 backdrop-blur-lg rounded-2xl border border-stone-100 shadow-sm w-fit mx-auto">
            {["All", ...Object.values(Department)].map((dept) => (
                <button
                    key={dept}
                    onClick={() => setActiveDept(dept as Department | "All")}
                    className={`px-5 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                        activeDept === dept 
                        ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/30' 
                        : 'bg-transparent text-stone-600 hover:bg-stone-100'
                    }`}
                >
                    {dept}
                </button>
            ))}
        </div>
      </section>

      {/* Grid Section */}
      <section className="pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAgents.map((agent) => (
                    <div key={agent.id} className="bg-white rounded-[2.5rem] p-8 border border-stone-100 shadow-xl shadow-stone-200/50 hover:shadow-2xl hover:border-brand-200 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
                        
                        {/* Top Tags */}
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-600 text-xs font-bold uppercase tracking-wider">
                                {agent.department}
                            </span>
                        </div>

                        {/* Title & Desc */}
                        <h3 className="text-2xl font-bold text-stone-900 mb-4 group-hover:text-brand-600 transition-colors">
                            {agent.title}
                        </h3>
                        <p className="text-stone-600 mb-8 leading-relaxed flex-grow">
                            {agent.shortDesc}
                        </p>

                        {/* Stats Row */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {agent.stats.map((stat, i) => (
                                <div key={i} className="bg-stone-50 p-3 rounded-2xl border border-stone-100">
                                    <p className="text-xs text-stone-400 uppercase font-bold mb-1">{stat.label}</p>
                                    <p className="text-lg font-bold text-stone-900">{stat.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Footer / CTA */}
                        <div className="mt-auto pt-6 border-t border-stone-100 flex items-center justify-between">
                            <div className="flex -space-x-2">
                                {/* Tech Stack Hints */}
                                {agent.tags.slice(1).map((tag, i) => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-brand-50 border-2 border-white flex items-center justify-center text-[10px] font-bold text-brand-600 shadow-sm" title={tag}>
                                        {tag.slice(0, 1)}
                                    </div>
                                ))}
                            </div>
                            <Link to={`/portfolio/${agent.slug}`} className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-brand-600 transition-colors shadow-lg shadow-stone-900/20">
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA */}
       <section className="bg-white border-t border-stone-100 py-24">
         <div className="max-w-4xl mx-auto px-4 text-center">
             <h2 className="text-4xl font-bold text-stone-900 mb-6">Don't see what you need?</h2>
             <p className="text-xl text-stone-600 mb-10">
                 These are just examples. We build custom agents tailored to your specific workflow.
             </p>
             <div className="flex justify-center">
                <Button to="/contact" className="shadow-xl shadow-brand-500/20">
                    Discuss Your Custom Agent
                </Button>
             </div>
         </div>
      </section>
    </div>
  );
};

export default Portfolio;