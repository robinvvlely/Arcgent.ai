import React from 'react';
import { Layout, GitMerge, ShieldCheck, FileCode, CheckCircle2, Zap, FileText } from 'lucide-react';
import Button from '../components/ui/Button';

const WhyAiSop: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-stone-50">
        <div className="absolute top-0 left-0 w-full h-full bg-white/50 pointer-events-none"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-100/40 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent-50/60 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-stone-200 text-stone-600 text-sm font-semibold mb-6 shadow-sm">
                    <FileText className="w-4 h-4 mr-2 text-brand-600" />
                    The Foundation
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold text-stone-900 mb-6 tracking-tight">
                    AI-SOPs: Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600">AI Agent Blueprint</span>
                </h1>
                <p className="text-xl text-stone-600 leading-relaxed">
                    Most companies try to build AI Agents too early—or too messily. AI-SOPs fix that. They’re structured process blueprints designed specifically for AI agents.
                </p>
            </div>
        </div>
      </section>

      {/* Anatomy Section (Grid Layout) */}
      <div className="py-16 bg-stone-50 border-y border-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-stone-900">What’s Inside an AI-SOP?</h2>
                  <p className="text-stone-500 mt-2">The four pillars of a robust AI Agent.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {/* Card 1 */}
                  <div className="bg-white p-8 rounded-[2.5rem] border border-stone-100 hover:shadow-xl hover:border-brand-100 transition-all duration-300 group">
                      <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <Layout size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-stone-900 mb-3">Triggers & Inputs</h3>
                      <p className="text-stone-600 leading-relaxed">
                          We define exactly what starts the process (e.g., "New Email", "Form Submit") and the structured data required to proceed. No ambiguity.
                      </p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white p-8 rounded-[2.5rem] border border-stone-100 hover:shadow-xl hover:border-brand-100 transition-all duration-300 group">
                      <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <GitMerge size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-stone-900 mb-3">Roles & Logic Paths</h3>
                      <p className="text-stone-600 leading-relaxed">
                          Decision trees mapped out clearly: "If client budget &gt; €10k, route to Senior Agent. Else, route to Standard Agent."
                      </p>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white p-8 rounded-[2.5rem] border border-stone-100 hover:shadow-xl hover:border-brand-100 transition-all duration-300 group">
                      <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <ShieldCheck size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-stone-900 mb-3">Edge Cases & Exceptions</h3>
                      <p className="text-stone-600 leading-relaxed">
                          We handle the 10% of chaos that usually breaks bots. Missing data? API down? Unclear intent? We script the fallback protocols.
                      </p>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-white p-8 rounded-[2.5rem] border border-stone-100 hover:shadow-xl hover:border-brand-100 transition-all duration-300 group">
                      <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <FileCode size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-stone-900 mb-3">Builder-Ready Language</h3>
                      <p className="text-stone-600 leading-relaxed">
                          Written for developers and LLMs, not just humans. Instructions are precise, formatted, and ready to be pasted into system prompts.
                      </p>
                  </div>
              </div>
          </div>
      </div>

      {/* Why It Matters (Dark Section) */}
      <div className="bg-stone-900 py-24 text-white relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-stone-800 text-brand-300 text-xs font-bold mb-6 border border-stone-700">
                        <Zap size={14} className="mr-2" />
                        Strategic Advantage
                    </div>
                    <h2 className="text-4xl font-bold mb-6">Why It Matters</h2>
                    <p className="text-stone-400 text-lg leading-relaxed mb-8">
                        Without a blueprint, you are just guessing. With AI-SOPs, your AI Agents become robust assets that grow with your company, independent of any specific employee.
                    </p>
                    <Button to="/contact" variant="primary">Start Your Blueprint</Button>
                </div>

                <div className="grid gap-6">
                    {[
                        { title: "Easier to Maintain", desc: "When logic is documented, debugging is 10x faster." },
                        { title: "Framework Agnostic", desc: "Ready for n8n, Zapier AI, Make, or custom agents." },
                        { title: "Future-Proof", desc: "Scalable and transferable across your team." }
                    ].map((item, i) => (
                        <div key={i} className="flex items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <CheckCircle2 className="text-brand-400 mr-4 mt-1 shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg text-white mb-1">{item.title}</h4>
                                <p className="text-stone-400">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-white text-center">
         <div className="max-w-3xl mx-auto px-4">
             <h2 className="text-3xl font-bold text-stone-900 mb-6">Want to see a real example?</h2>
             <p className="text-lg text-stone-600 mb-10">
                 Curious what a "Builder-Ready" document looks like? We can walk you through a sample AI-SOP.
             </p>
             <Button to="/contact" variant="outline" className="border-stone-300">
                 Book a Walkthrough
             </Button>
         </div>
      </div>
    </div>
  );
};

export default WhyAiSop;