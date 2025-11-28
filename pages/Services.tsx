import React from 'react';
import { Search, Server, FileText, Users, Check, Zap, UserCheck, Presentation } from 'lucide-react';
import Button from '../components/ui/Button';

const ServiceCard: React.FC<{ 
    title: string; 
    icon: React.ReactNode; 
    description: string; 
    features: string[];
    highlight?: boolean; 
    badge?: string;
}> = ({ title, icon, description, features, highlight, badge }) => (
    <div className={`relative p-10 rounded-[2.5rem] flex flex-col h-full transition-all duration-500 group overflow-hidden ${
        highlight 
            ? 'bg-gradient-to-br from-brand-900 to-stone-900 text-white shadow-2xl shadow-stone-900/20 ring-1 ring-white/10' 
            : 'bg-white border border-stone-100 hover:border-brand-200 hover:shadow-xl hover:shadow-stone-200/40'
    }`}>
        {/* Background Gradients for Highlight Card */}
        {highlight && (
            <>
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-500/30 transition-colors"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 group-hover:bg-accent-500/20 transition-colors"></div>
            </>
        )}

        {badge && (
            <div className="absolute top-8 right-8 inline-flex items-center px-3 py-1 rounded-full bg-brand-500 text-white text-xs font-bold shadow-lg shadow-brand-500/30 animate-pulse">
                <Zap size={12} className="mr-1.5 fill-current" />
                {badge}
            </div>
        )}

        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm relative z-10 transition-transform duration-500 group-hover:scale-110 ${
            highlight 
                ? 'bg-white/10 text-brand-300 border border-white/10 backdrop-blur-sm' 
                : 'bg-stone-50 text-brand-600 border border-stone-100'
        }`}>
            {icon}
        </div>

        <h3 className={`text-2xl font-bold mb-4 relative z-10 ${highlight ? 'text-white' : 'text-stone-900'}`}>{title}</h3>
        <p className={`mb-10 flex-grow leading-relaxed relative z-10 text-lg ${highlight ? 'text-stone-300' : 'text-stone-600'}`}>
            {description}
        </p>
        
        <div className={`p-6 rounded-2xl relative z-10 ${highlight ? 'bg-white/5 border border-white/5' : 'bg-stone-50/50 border border-stone-100'}`}>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 ${highlight ? 'text-brand-300' : 'text-stone-400'}`}>
                Includes
            </h4>
            <ul className="space-y-4">
                {features.map((feature, i) => (
                    <li key={i} className={`flex items-start text-sm font-medium ${highlight ? 'text-stone-200' : 'text-stone-700'}`}>
                        <div className={`mt-0.5 mr-3 p-0.5 rounded-full ${highlight ? 'bg-brand-500/20 text-brand-300' : 'bg-brand-50 text-brand-600'}`}>
                            <Check size={14} strokeWidth={3} />
                        </div>
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const Services: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-white/50 pointer-events-none"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-100/40 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent-50/60 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-stone-200 text-stone-600 text-sm font-semibold mb-6 shadow-sm">
                    <Server className="w-4 h-4 mr-2 text-brand-600" />
                    Our Expertise
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold text-stone-900 mb-6 tracking-tight">
                    What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600">Deliver</span>
                </h1>
                <p className="text-xl text-stone-600 leading-relaxed">
                    Comprehensive AI Agent solutions. We don't just build bots; we build the infrastructure for your company to scale with AI.
                </p>
            </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Discovery */}
                <ServiceCard 
                    title="Process Discovery & Opportunity Mapping"
                    icon={<Search size={32} />}
                    description="You can't automate what you don't understand. We run workshops and audits to uncover and define high-impact workflows."
                    features={[
                        "In-depth workflow audit & diagrams",
                        "Identification of friction points",
                        "AI Agent ROI calculation",
                        "Strategic Implementation Roadmap"
                    ]}
                />

                {/* Development (Highlighted) */}
                <ServiceCard 
                    title="AI Agent Development"
                    icon={<Server size={32} />}
                    description="The engine room. We build custom workflows in n8n enhanced with AI (GPT-4, Claude) that integrate seamlessly with your stack."
                    features={[
                        "Custom n8n Workflow Architecture",
                        "Multi-Agent Orchestration & Logic",
                        "API Integration (CRM, ERP, Email, Slack)",
                        "Rigorous Testing & Error Handling"
                    ]}
                    highlight
                    badge="Most Popular"
                />

                {/* Documentation */}
                <ServiceCard 
                    title="AI-SOP Documentation"
                    icon={<FileText size={32} />}
                    description="Clear, structured, reusable SOPs designed specifically for AI Agents. The bridge between human strategy and AI execution."
                    features={[
                        "Structured Prompts for LLMs",
                        "Edge case definition & handling",
                        "Decision logic mapping",
                        "Future-proof process blueprints"
                    ]}
                />

                {/* Training */}
                <ServiceCard 
                    title="Team Training & AI Literacy"
                    icon={<Users size={32} />}
                    description="We don't gatekeep. We teach your team to own, manage, and evolve the systems we build so you aren't dependent on us forever."
                    features={[
                        "System Handover workshops",
                        "Maintenance & Debugging training",
                        "Prompt engineering basics",
                        "n8n System administration"
                    ]}
                />

                {/* 1:1 Coaching */}
                <ServiceCard 
                    title="1:1 Coaching"
                    icon={<UserCheck size={32} />}
                    description="Work directly with an AI Agent strategist to review your workflows, design AI-ready processes, and build your capabilities. Ideal for founders, operators, and consultants who want guidance and accountability."
                    features={[
                        "Workflow Design Reviews",
                        "AI-Readiness Assessment",
                        "Strategic Guidance & Accountability",
                        "Direct Access to Strategist"
                    ]}
                />

                {/* In-Company Training */}
                <ServiceCard 
                    title="In-Company Training"
                    icon={<Presentation size={32} />}
                    description="Hands-on sessions tailored to your team and tools. We come into your company (virtually or on-site) to train your staff on AI Agent best practices, AI integration, and using n8n with confidence."
                    features={[
                        "Custom AI Agent Curriculum",
                        "Hands-on n8n Workshops",
                        "AI Integration Best Practices",
                        "Virtual or On-site Delivery"
                    ]}
                />
            </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-white border-t border-stone-100 py-24">
         <div className="max-w-4xl mx-auto px-4 text-center">
             <h2 className="text-4xl font-bold text-stone-900 mb-6">Ready to upgrade your operations?</h2>
             <p className="text-xl text-stone-600 mb-10">
                 Start with a Discovery Audit. We'll identify your highest ROI opportunities in 30 minutes.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button to="/contact" className="shadow-xl shadow-brand-500/20">
                    Book Your Free Audit
                </Button>
                <Button to="/how-we-work" variant="outline">
                    See How We Work
                </Button>
             </div>
         </div>
      </section>
    </div>
  );
};

export default Services;