import React from 'react';
import { Users, CheckCircle, Globe, Cpu, Linkedin } from 'lucide-react';
import Button from '../components/ui/Button';

const About: React.FC = () => {
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
                    <Users className="w-4 h-4 mr-2 text-brand-600" />
                    Our Team & Vision
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold text-stone-900 mb-6 tracking-tight">
                    Built for Builders. <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600">Trusted by Operators.</span>
                </h1>
                <p className="text-xl text-stone-600 leading-relaxed">
                    Arcgent was founded to bridge the gap between messy manual work and the clean, scalable workflows that AI needs.
                </p>
            </div>
        </div>
      </section>

      {/* Founder / Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl shadow-stone-200/50 border border-stone-100 relative overflow-hidden">
                 {/* Decorative background element */}
                 <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>

                 <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
                    {/* Image Column */}
                    <div className="lg:w-1/3 flex justify-center lg:justify-start">
                        <div className="relative group">
                             <div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-accent-600 rounded-[2rem] rotate-6 opacity-20 scale-105 group-hover:rotate-3 transition-transform duration-500"></div>
                             <img 
                                src="https://media.licdn.com/dms/image/v2/D4E03AQE08QPtyMHjNQ/profile-displayphoto-crop_800_800/B4EZoSlt3MHoAI-/0/1761248469237?e=1766016000&v=beta&t=G4aKA2gkBZzXdc811GwZcNBGPfW9Ch0Ow7CQ9J_bxHU" 
                                alt="Founder of Arcgent" 
                                className="w-72 h-72 lg:w-80 lg:h-80 rounded-[2rem] object-cover border-4 border-white shadow-2xl relative z-10 transform transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-white py-3 px-6 rounded-xl shadow-lg border border-stone-100 z-20">
                                <p className="font-bold text-stone-900 text-sm">Founder</p>
                                <p className="text-brand-600 text-xs font-semibold">Arcgent</p>
                            </div>
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="lg:w-2/3 text-center lg:text-left">
                        <h2 className="text-3xl font-bold text-stone-900 mb-6 flex items-center justify-center lg:justify-start">
                            The Origin Story
                        </h2>
                        <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                            <p>
                                I come from the marketing agency world—so I understand chaos, speed, and the constant pressure to deliver. I saw brilliant teams burning out on manual data entry and "busy work" that should have been handled by AI Agents years ago.
                            </p>
                            <p>
                                But the existing options were broken. Traditional tools were too rigid, and "AI wrappers" were too unpredictable.
                            </p>
                            <p className="font-medium text-stone-900">
                                We created Arcgent to solve this "messy middle."
                            </p>
                            <p>
                                We provide the structure (AI-SOPs) and the tooling (n8n) to make intelligent AI Agents reliable for serious businesses. We don't just write code; we build the infrastructure for your team to scale without adding headcount.
                            </p>
                        </div>
                        
                        <div className="mt-8 flex justify-center lg:justify-start">
                            <Button 
                                href="https://www.linkedin.com/in/robin-van-veen/" 
                                target="_blank" 
                                variant="outline"
                                className="gap-2"
                            >
                                <Linkedin size={18} />
                                Lets connect on LinkedIn
                            </Button>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
      </section>

      {/* Mission / Dark Section */}
      <section className="bg-stone-900 py-24 text-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-900/30 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
              <Cpu className="w-12 h-12 text-brand-400 mx-auto mb-8 animate-pulse" />
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                  "Technology breaks if the process is bad. We fix the flow before we build the bot."
              </h2>
              <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full"></div>
          </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-stone-900">Our Core Values</h2>
                <p className="text-stone-500 mt-2">How we operate and what you can expect.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Value 1 */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-stone-100 hover:shadow-xl hover:border-brand-100 transition-all duration-300 group text-center">
                    <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <CheckCircle size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 mb-3">No Fluff</h3>
                    <p className="text-stone-600 leading-relaxed">
                        Only structured, clear, functional work. We don't sell buzzwords or hype. If AI isn't the right tool for the job, we'll tell you.
                    </p>
                </div>

                {/* Value 2 */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-stone-100 hover:shadow-xl hover:border-brand-100 transition-all duration-300 group text-center">
                    <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <Users size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 mb-3">Client Enablement</h3>
                    <p className="text-stone-600 leading-relaxed">
                        We train your team, not gatekeep. You own your code, your n8n workflows, and your process. We build to hand over.
                    </p>
                </div>

                {/* Value 3 */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-stone-100 hover:shadow-xl hover:border-brand-100 transition-all duration-300 group text-center">
                    <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <Globe size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 mb-3">Global Mindset</h3>
                    <p className="text-stone-600 leading-relaxed">
                        We work remotely with clients worldwide, bringing best-in-class AI Agent standards to any time zone.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 border-t border-stone-100">
        <div className="text-center max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-stone-900 mb-6">Ready to work with us?</h2>
            <Button to="/contact" variant="primary" className="px-8 py-4 text-lg">
                Start With a Discovery Call
            </Button>
        </div>
      </section>

    </div>
  );
};

export default About;