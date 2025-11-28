import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Table, Workflow, Clock, FileText, Server, PenTool, Search, Zap, RefreshCw, Layers, Bot, Database, FileSpreadsheet, Mail, AlertCircle, Magnet, MessageSquare, BarChart3, Cpu } from 'lucide-react';
import Button from '../components/ui/Button';

const Home: React.FC = () => {
  const tools = [
    { name: "Slack", icon: "https://cdn.simpleicons.org/slack" },
    { name: "Google Sheets", icon: "https://cdn.simpleicons.org/googlesheets" },
    { name: "Airtable", icon: "https://cdn.simpleicons.org/airtable" },
    { name: "Notion", icon: "https://cdn.simpleicons.org/notion" },
    { name: "HubSpot", icon: "https://cdn.simpleicons.org/hubspot" },
    { name: "Gmail", icon: "https://cdn.simpleicons.org/gmail" },
    { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai" },
    { name: "Claude", icon: "https://cdn.simpleicons.org/anthropic" },
    { name: "Gemini", icon: "https://cdn.simpleicons.org/googlegemini" },
    { name: "n8n", icon: "https://cdn.simpleicons.org/n8n" },
    { name: "LangGraph", icon: "https://cdn.simpleicons.org/langchain" },
    { name: "Local LLMs", component: <div className="flex items-center gap-2 text-stone-600"><Cpu size={24} /><span className="text-sm font-bold">Local LLMs</span></div> }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="animate-fade-in-up space-y-8 max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-brand-100 text-brand-700 text-sm font-semibold shadow-sm mx-auto">
                <span className="flex h-2 w-2 rounded-full bg-brand-500 mr-3 animate-pulse"></span>
                Intelligent AI Agents for Scale
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-stone-900 tracking-tight leading-[1.1]">
                Turn Manual Processes Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600">AI-Powered Workflows</span>
              </h1>
              <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed font-medium">
                Structure your workflows, add AI where it matters, and let AI Agents handle what holds your business back. Unlock intelligent AI Agents with n8n and AI-SOPs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button to="/contact" className="shadow-2xl shadow-brand-500/20 text-lg px-8 py-4">
                  Book Your Free AI Process Audit
                </Button>
              </div>
            </div>
        </div>
        
        {/* Background blobs */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-[600px] h-[600px] bg-brand-100/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob"></div>
        <div className="absolute bottom-0 left-0 translate-y-24 -translate-x-12 w-[500px] h-[500px] bg-accent-100/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob animation-delay-2000"></div>
      </section>

      {/* Tools / Integrations Section */}
      <section className="py-10 border-y border-stone-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-bold text-stone-400 uppercase tracking-widest mb-8">Powering your workflow with</p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                {tools.map((tool, i) => (
                    <div key={i} className="group flex items-center justify-center transition-all duration-300 opacity-50 grayscale hover:grayscale-0 hover:opacity-100" title={tool.name}>
                        {tool.component ? (
                            tool.component
                        ) : (
                            <img src={tool.icon} alt={tool.name} className="h-6 md:h-8 w-auto object-contain" />
                        )}
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { icon: <Clock size={28} />, title: "Save 100+ Hours", desc: "Per team, per month." },
                    { icon: <CheckCircle2 size={28} />, title: "Clarity First", desc: "No AI Agents before strategy." },
                    { icon: <Server size={28} />, title: "n8n Powered", desc: "Self-hosted or cloud options." },
                    { icon: <FileText size={28} />, title: "AI-Ready Docs", desc: "Structured AI-SOPs." }
                ].map((item, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-stone-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-stone-100 group">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-brand-600 shadow-sm group-hover:scale-110 transition-transform">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-stone-900 mb-2">{item.title}</h3>
                        <p className="text-stone-600">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Mini How It Works */}
      <section className="py-24 bg-stone-900 text-white rounded-[3rem] mx-4 lg:mx-8 mb-8 relative overflow-hidden isolate">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-stone-800 border border-stone-700 text-brand-300 text-sm font-semibold mb-6">
                    <Workflow className="w-4 h-4 mr-2" />
                    The Process
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">From Chaos to Clarity</h2>
                <p className="text-stone-400 max-w-2xl mx-auto text-lg">
                    Five steps to move from manual work to intelligent AI Agents.
                </p>
            </div>

            <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden lg:block absolute top-[3.5rem] left-0 w-full h-1 bg-stone-800 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-brand-600 via-brand-400 to-stone-800 opacity-50"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {[
                        { 
                            step: "01", 
                            title: "Discover", 
                            desc: "Audit processes to find opportunities.",
                            icon: <Search className="w-6 h-6" />
                        },
                        { 
                            step: "02", 
                            title: "Design", 
                            desc: "Structure workflows & remove friction.",
                            icon: <PenTool className="w-6 h-6" />
                        },
                        { 
                            step: "03", 
                            title: "Transform", 
                            desc: "Create the AI-SOP blueprint.",
                            icon: <FileText className="w-6 h-6" />
                        },
                        { 
                            step: "04", 
                            title: "Build", 
                            desc: "Deploy intelligent agents in n8n.",
                            icon: <Zap className="w-6 h-6" />
                        },
                        { 
                            step: "05", 
                            title: "Evolve", 
                            desc: "Monitor, scale, and improve.",
                            icon: <RefreshCw className="w-6 h-6" />
                        }
                    ].map((item, i) => (
                        <div key={i} className="relative group">
                            {/* Node Card */}
                            <div className="bg-stone-800/80 backdrop-blur-md border border-stone-700/50 p-6 xl:p-8 rounded-3xl hover:bg-stone-800 hover:border-brand-500/30 transition-all duration-300 relative z-10 h-full shadow-xl">
                                {/* Number Badge */}
                                <div className="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-brand-900/50 mb-6 group-hover:scale-110 transition-transform duration-300 relative z-20">
                                    {item.step}
                                </div>
                                
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-300 transition-colors">{item.title}</h3>
                                <p className="text-stone-400 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                                
                                {/* Decorative Node Points (To look like n8n nodes) */}
                                <div className="absolute top-[3.5rem] -left-1.5 w-3 h-3 bg-stone-600 rounded-full border border-stone-800 hidden lg:block group-hover:bg-brand-400 transition-colors"></div>
                                <div className="absolute top-[3.5rem] -right-1.5 w-3 h-3 bg-stone-600 rounded-full border border-stone-800 hidden lg:block group-hover:bg-brand-400 transition-colors"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-16 text-center">
                <Button to="/how-we-work" variant="secondary" className="bg-white text-stone-900 hover:bg-brand-50 hover:text-brand-700 border-none font-bold">
                    See the Full Process
                </Button>
            </div>
        </div>
        
        {/* Decorative Gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-stone-900/90 pointer-events-none"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-500/10 rounded-full blur-[100px]"></div>
      </section>

      {/* Services Teaser */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <div>
                    <h2 className="text-4xl font-bold text-stone-900 mb-6">From Manual Chaos to AI Agents</h2>
                    <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                        We don't just automate. We help you understand, structure, and future-proof your operations with AI-ready workflows.
                    </p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center text-stone-800 font-medium">
                            <CheckCircle2 className="text-brand-600 mr-3" /> Process Discovery & Opportunity Mapping
                        </li>
                        <li className="flex items-center text-stone-800 font-medium">
                            <CheckCircle2 className="text-brand-600 mr-3" /> AI Agent Development (n8n)
                        </li>
                        <li className="flex items-center text-stone-800 font-medium">
                            <CheckCircle2 className="text-brand-600 mr-3" /> AI-SOP Documentation
                        </li>
                         <li className="flex items-center text-stone-800 font-medium">
                            <CheckCircle2 className="text-brand-600 mr-3" /> Team Training & AI Literacy
                        </li>
                    </ul>
                    <Button to="/services">
                        Explore Our Services
                    </Button>
                </div>

                {/* Visual Content - Layered Composition */}
                <div className="relative h-[500px] w-full flex items-center justify-center">
                    {/* Background Decor */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-stone-100 to-white rounded-[3rem] -z-20 border border-white/50"></div>

                    {/* Chaos Layer (Background Elements) */}
                    <div className="absolute top-12 left-8 w-48 bg-white p-4 rounded-2xl shadow-lg border border-red-50 transform -rotate-12 opacity-80 transition-transform hover:-rotate-6 duration-500">
                        <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-red-50 rounded-lg text-red-500"><Mail size={16}/></div>
                        <div className="h-2 w-16 bg-stone-200 rounded"></div>
                        </div>
                        <div className="space-y-2">
                        <div className="h-2 w-full bg-stone-100 rounded"></div>
                        <div className="h-2 w-2/3 bg-stone-100 rounded"></div>
                        </div>
                    </div>

                    <div className="absolute bottom-20 left-12 w-56 bg-white p-4 rounded-2xl shadow-lg border border-stone-100 transform -rotate-6 opacity-80 z-0 transition-transform hover:rotate-0 duration-500">
                        <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-stone-100 rounded-lg text-stone-500"><FileSpreadsheet size={16}/></div>
                        <div className="h-2 w-20 bg-stone-200 rounded"></div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                        <div className="h-8 bg-stone-50 rounded"></div>
                        <div className="h-8 bg-stone-50 rounded"></div>
                        <div className="h-8 bg-stone-50 rounded"></div>
                        </div>
                    </div>

                    <div className="absolute top-24 right-10 w-40 bg-white p-4 rounded-2xl shadow-lg border border-orange-50 transform rotate-12 opacity-80 z-0">
                         <div className="flex items-center gap-2 mb-2 text-orange-500 font-bold text-xs">
                             <AlertCircle size={14} />
                             <span>Manual Error</span>
                         </div>
                         <div className="h-2 w-full bg-stone-100 rounded mb-1"></div>
                         <div className="h-2 w-1/2 bg-stone-100 rounded"></div>
                    </div>

                    {/* Clarity Layer (Foreground Main Card) */}
                    <div className="relative z-10 bg-white w-80 md:w-96 rounded-[2rem] shadow-2xl shadow-brand-900/10 border border-stone-100 p-8 animate-float">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-brand-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-500/30">
                                    <Bot size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-stone-900 text-lg">Auto-Report Agent</h4>
                                    <p className="text-xs text-brand-600 font-semibold bg-brand-50 inline-block px-2 py-0.5 rounded-full mt-1">Powered by n8n</p>
                                </div>
                            </div>
                            <div className="px-3 py-1.5 bg-green-50 text-green-700 text-xs font-bold rounded-full flex items-center border border-green-100">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-1.5 animate-pulse"></div>
                                Active
                            </div>
                        </div>

                        <div className="space-y-4">
                            {/* Step 1 */}
                            <div className="flex items-center gap-4 p-3.5 bg-stone-50 rounded-2xl border border-stone-100 transition-colors hover:border-brand-100">
                                <div className="text-stone-400"><Database size={20}/></div>
                                <div className="text-sm font-semibold text-stone-700">Fetch Data</div>
                                <CheckCircle2 size={18} className="ml-auto text-green-500" />
                            </div>
                            {/* Step 2 */}
                            <div className="flex items-center gap-4 p-3.5 bg-stone-50 rounded-2xl border border-stone-100 transition-colors hover:border-brand-100">
                                <div className="text-stone-400"><Zap size={20}/></div>
                                <div className="text-sm font-semibold text-stone-700">AI Analysis (GPT-4)</div>
                                <CheckCircle2 size={18} className="ml-auto text-green-500" />
                            </div>
                            {/* Step 3 */}
                            <div className="flex items-center gap-4 p-3.5 bg-white border-2 border-brand-100 rounded-2xl shadow-sm">
                                <div className="text-brand-600"><Mail size={20}/></div>
                                <div className="text-sm font-bold text-stone-900">Drafting Email...</div>
                                <div className="ml-auto w-5 h-5 border-2 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-stone-100 flex justify-between items-center">
                            <div className="text-xs font-medium text-stone-400 uppercase tracking-wider">Efficiency</div>
                            <div className="font-bold text-stone-900 flex items-center text-sm">
                                <span className="text-green-600 mr-2">+450%</span> 
                                Output
                            </div>
                        </div>
                    </div>
                    
                    {/* Floating Abstract Elements */}
                    <div className="absolute top-1/2 right-10 w-32 h-32 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-10 right-20 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl pointer-events-none"></div>
                </div>
            </div>
        </div>
      </section>

      {/* Why AI-SOPs Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-semibold mb-6">
                <FileText className="w-4 h-4 mr-2" />
                The Secret Sauce
            </div>
            <h2 className="text-4xl font-bold text-stone-900 mb-6">AI-SOPs: Your AI Agent Blueprint</h2>
            <p className="text-xl text-stone-600 leading-relaxed">
              Most companies try to build AI Agents too early—or too messily. AI-SOPs fix that. They’re structured process blueprints designed specifically for AI agents and builders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* What's Inside */}
            <div className="bg-stone-50 rounded-[2.5rem] p-10 border border-stone-100 hover:shadow-xl transition-shadow duration-300">
               <h3 className="text-2xl font-bold text-stone-900 mb-8 flex items-center">
                  <span className="w-12 h-12 bg-white text-brand-600 rounded-2xl flex items-center justify-center mr-4 shadow-sm border border-stone-100">
                    <Layers size={24} />
                  </span>
                  What’s Inside an AI-SOP
               </h3>
               <ul className="space-y-4">
                  {[
                    "Triggers & inputs",
                    "Roles & logic paths",
                    "Edge cases & exceptions",
                    "Step-by-step flow",
                    "Clear builder-ready language"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-stone-700 font-medium text-lg">
                      <CheckCircle2 size={20} className="text-brand-500 mr-3 shrink-0" />
                      {item}
                    </li>
                  ))}
               </ul>
            </div>

            {/* Why It Matters */}
            <div className="bg-stone-900 text-white rounded-[2.5rem] p-10 shadow-2xl shadow-stone-900/10 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full blur-[80px] opacity-20 translate-x-1/2 -translate-y-1/2 group-hover:opacity-30 transition-opacity"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500 rounded-full blur-[80px] opacity-10 -translate-x-1/2 translate-y-1/2 group-hover:opacity-20 transition-opacity"></div>
               
               <h3 className="text-2xl font-bold mb-8 flex items-center relative z-10">
                  <span className="w-12 h-12 bg-white/10 text-brand-300 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm border border-white/10">
                    <Zap size={24} />
                  </span>
                  Why It Matters
               </h3>
               <ul className="space-y-5 relative z-10">
                  {[
                    "Easier to build and maintain",
                    "Ready for any AI agent framework (n8n, Zapier, Make)",
                    "Scalable and transferable across your team",
                    "Future-proof by design"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-stone-300 font-medium text-lg">
                       <CheckCircle2 size={20} className="text-brand-400 mr-3 mt-1 shrink-0" />
                       <span>{item}</span>
                    </li>
                  ))}
               </ul>
            </div>
          </div>

          <div className="text-center">
             <Button to="/why-ai-sops" variant="primary" className="text-lg px-8 py-4">See a Sample SOP</Button>
          </div>
        </div>
      </section>

      {/* What Can AI Agents Do Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                 <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-brand-100 text-brand-700 text-sm font-semibold mb-6 shadow-sm">
                    <Bot className="w-4 h-4 mr-2 text-brand-600" />
                    Use Cases
                </div>
                <h2 className="text-4xl font-bold text-stone-900 mb-6">What Can AI Agents Do?</h2>
                <p className="text-xl text-stone-600 leading-relaxed">
                    Turn repetitive workflows into autonomous systems that think, act, and scale with your business.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Sales Agent */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-stone-100 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300 group hover:-translate-y-1">
                    <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                        <Magnet size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900 mb-2">Sales Agent (SDR)</h3>
                    <p className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-4">Acquisition</p>
                    <p className="text-stone-600 leading-relaxed mb-6">
                        Automatically reach your market. This AI agent finds leads, enriches data, drafts personalized emails, and follows up.
                    </p>
                </div>

                {/* Support Agent */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-stone-100 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300 group hover:-translate-y-1">
                    <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                        <MessageSquare size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900 mb-2">Support Agent</h3>
                    <p className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-4">Retention</p>
                    <p className="text-stone-600 leading-relaxed mb-6">
                        Handle tickets without burnout. Trained on your knowledge base, this agent answers questions, resolves issues, and tags human help.
                    </p>
                </div>

                {/* Reporting Agent */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-stone-100 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300 group hover:-translate-y-1">
                    <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                        <BarChart3 size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900 mb-2">Reporting Agent</h3>
                    <p className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-4">Operations</p>
                    <p className="text-stone-600 leading-relaxed mb-6">
                        Deliver insights without the manual work. This agent pulls data, analyzes performance, generates reports, and sends actionable tips.
                    </p>
                </div>
            </div>
            
             <div className="mt-16 text-center">
                <Button to="/contact" className="shadow-xl shadow-brand-500/20">
                    Map Your First Agent
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;