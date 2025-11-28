import React from 'react';
import { Search, PenTool, FileText, Zap, RefreshCw, CheckCircle2, Workflow } from 'lucide-react';
import Button from '../components/ui/Button';

const Methodology: React.FC = () => {
  const steps = [
    {
        id: "01",
        title: "Discover & Analyze",
        desc: "We don't guess. We run a structured workshop to audit your current manual processes, identify bottlenecks, and calculate the potential ROI of AI Agents.",
        deliverable: "Audit Report & ROI Roadmap",
        icon: <Search size={28} className="text-white" />,
        color: "bg-brand-500"
    },
    {
        id: "02",
        title: "Design the Process",
        desc: "Building AI Agents breaks bad processes faster. We streamline your workflow first, removing friction and standardizing inputs before we write a single line of code.",
        deliverable: "Optimized Workflow Diagram",
        icon: <PenTool size={28} className="text-white" />,
        color: "bg-stone-900"
    },
    {
        id: "03",
        title: "AI-Ready Transformation",
        desc: "The secret sauce. We translate your human process into an AI-SOP—a structured blueprint containing the logic, prompts, and edge cases your AI agent needs to function autonomously.",
        deliverable: "The AI-SOP Document",
        icon: <FileText size={28} className="text-white" />,
        color: "bg-brand-500"
    },
    {
        id: "04",
        title: "Build & Deploy Agents",
        desc: "We build your custom agents in n8n. We connect your stack (CRM, Email, Slack), implement the AI logic, and rigorously test for reliability.",
        deliverable: "Live n8n AI Agent",
        icon: <Zap size={28} className="text-white" />,
        color: "bg-stone-900"
    },
    {
        id: "05",
        title: "Manage & Evolve",
        desc: "Launch is just day one. We train your team to manage the system, or we stay on to monitor performance and iterate as your business scales.",
        deliverable: "Training & Handover",
        icon: <RefreshCw size={28} className="text-white" />,
        color: "bg-brand-500"
    }
  ];

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
                    <Workflow className="w-4 h-4 mr-2 text-brand-600" />
                    Our Methodology
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold text-stone-900 mb-6 tracking-tight">
                    From Manual Chaos to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600">AI-Driven Clarity</span>
                </h1>
                <p className="text-xl text-stone-600 leading-relaxed">
                    We don’t just automate. We help you understand, structure, and future-proof your operations with AI-ready workflows.
                </p>
            </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        {/* Central Spine Line (Desktop) */}
        <div className="hidden lg:block absolute top-[6rem] bottom-[6rem] left-1/2 w-0.5 bg-gradient-to-b from-brand-200 via-brand-400 to-brand-200 -translate-x-1/2"></div>

        <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
                <div key={step.id} className={`flex flex-col lg:flex-row items-center justify-center w-full group ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                    
                    {/* Content Side */}
                    <div className={`w-full lg:w-1/2 flex ${index % 2 === 0 ? 'lg:justify-end lg:pr-16' : 'lg:justify-start lg:pl-16'} mb-8 lg:mb-0 relative`}>
                        <div className={`bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-stone-200/50 border border-stone-100 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-brand-100 max-w-xl w-full text-left`}>
                            
                            {/* Background Number */}
                            <div className="absolute -right-4 -top-6 text-[10rem] font-extrabold text-stone-50 opacity-100 select-none z-0 text-stone-100/50">
                                {step.id}
                            </div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold mb-4 border border-brand-100 shadow-sm">
                                    <CheckCircle2 size={12} className="mr-1.5" />
                                    Deliverable: {step.deliverable}
                                </div>
                                <h3 className="text-2xl font-bold text-stone-900 mb-4">{step.title}</h3>
                                <p className="text-stone-600 leading-relaxed text-lg">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Center Icon Node */}
                    <div className="relative z-10 flex-shrink-0">
                        <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center shadow-lg shadow-brand-900/10 border-[6px] border-stone-50 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                            {step.icon}
                        </div>
                        {/* Mobile Connector Line */}
                        {index !== steps.length - 1 && (
                            <div className="lg:hidden absolute top-16 left-1/2 w-0.5 h-12 bg-stone-200 -translate-x-1/2"></div>
                        )}
                    </div>

                    {/* Empty Side for Balance */}
                    <div className="hidden lg:block w-1/2"></div>
                </div>
            ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-24 border-t border-stone-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold text-stone-900 mb-6">Stop Skipping Steps.</h2>
              <p className="text-xl text-stone-600 mb-10 leading-relaxed">
                  Most AI Agents fail because people jump straight to the "Build" phase without the "Design" phase. 
                  <br className="hidden md:block"/>
                  Let's do it right.
              </p>
              <Button to="/contact" variant="primary" className="text-lg px-10 py-4 shadow-xl shadow-brand-600/20">
                  Start Step 1: Discovery
              </Button>
          </div>
      </div>

    </div>
  );
};

export default Methodology;