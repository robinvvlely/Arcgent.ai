import React, { useState } from 'react';
import { FormDataGoal, FormDataBudget } from '../types';
import Button from '../components/ui/Button';
import { CheckCircle2, ArrowRight, Calendar, Search, Map, ShieldCheck } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    goal: FormDataGoal.SAVE_TIME,
    budget: FormDataBudget.FIVE_TO_TEN,
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      window.scrollTo(0, 0);
    }, 1500);
  };

  if (status === 'success') {
    return (
        <div className="min-h-screen pt-32 pb-20 bg-stone-50 flex items-center justify-center px-4 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-100/40 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent-50/60 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="bg-white p-12 md:p-16 rounded-[2.5rem] shadow-2xl shadow-stone-200/50 max-w-lg w-full text-center animate-fade-in-up border border-stone-100 relative z-10">
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 text-green-600 shadow-sm border border-green-100">
                    <CheckCircle2 size={48} />
                </div>
                <h2 className="text-3xl font-bold text-stone-900 mb-4">Request Received</h2>
                <p className="text-stone-600 mb-10 text-lg leading-relaxed">
                    Thanks, {formData.name}. We've received your audit request. A strategist will review your details and reach out within 24 hours.
                </p>
                <Button to="/" variant="primary" fullWidth>Back to Home</Button>
            </div>
        </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-stone-50 min-h-screen relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/50 pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-100/40 rounded-full blur-[100px] pointer-events-none animate-blob"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-accent-50/60 rounded-full blur-[100px] pointer-events-none animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Left Column: Value Prop */}
            <div className="lg:pt-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-stone-200 text-stone-600 text-sm font-semibold mb-8 shadow-sm">
                    <Calendar className="w-4 h-4 mr-2 text-brand-600" />
                    Free 30-Minute Consultation
                </div>
                
                <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-6 tracking-tight leading-tight">
                    Let’s Map Your First <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600">AI Agent</span>
                </h1>
                
                <p className="text-lg text-stone-600 mb-12 leading-relaxed">
                    Not sure where to start? Get a free audit to explore your workflows, identify where AI can help, and see what’s possible with n8n.
                </p>
                
                <div className="space-y-6">
                    {/* Benefit 1 */}
                    <div className="flex items-start p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mr-5 shrink-0">
                            <Search size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-stone-900 text-lg mb-1">Process Clarity</h3>
                            <p className="text-stone-600 text-sm">We'll help you spot the manual bottlenecks that are actually costing you money.</p>
                        </div>
                    </div>

                    {/* Benefit 2 */}
                    <div className="flex items-start p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mr-5 shrink-0">
                            <Map size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-stone-900 text-lg mb-1">Strategic Roadmap</h3>
                            <p className="text-stone-600 text-sm">Walk away with 2-3 concrete ideas for high-ROI AI Agents tailored to your business.</p>
                        </div>
                    </div>

                    {/* Benefit 3 */}
                    <div className="flex items-start p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mr-5 shrink-0">
                            <ShieldCheck size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-stone-900 text-lg mb-1">Tech Stack Review</h3>
                            <p className="text-stone-600 text-sm">We'll tell you if your current tools are ready for AI integration or if you need to pivot.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-stone-200/50 overflow-hidden border border-stone-100 relative">
                {/* Form Header Decoration */}
                <div className="h-2 w-full bg-gradient-to-r from-brand-500 via-brand-400 to-accent-500"></div>
                
                <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
                    <h3 className="text-2xl font-bold text-stone-900 mb-6">Tell us about your project</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-stone-500 uppercase tracking-wider ml-1">Full Name</label>
                            <input 
                                required 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all outline-none" 
                                placeholder="Jane Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-stone-500 uppercase tracking-wider ml-1">Work Email</label>
                            <input 
                                required 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all outline-none" 
                                placeholder="jane@company.com"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <label className="text-xs font-bold text-stone-500 uppercase tracking-wider ml-1">Primary Goal</label>
                            <div className="relative">
                                <select 
                                    name="goal" 
                                    value={formData.goal} 
                                    onChange={handleChange}
                                    className="w-full px-4 py-3.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all outline-none appearance-none cursor-pointer"
                                >
                                    {Object.values(FormDataGoal).map((goal) => (
                                        <option key={goal} value={goal}>{goal}</option>
                                    ))}
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
                                    <ArrowRight size={16} className="rotate-90" />
                                </div>
                            </div>
                        </div>

                         <div className="space-y-2">
                            <label className="text-xs font-bold text-stone-500 uppercase tracking-wider ml-1">Budget</label>
                            <div className="relative">
                                <select 
                                    name="budget" 
                                    value={formData.budget} 
                                    onChange={handleChange}
                                    className="w-full px-4 py-3.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all outline-none appearance-none cursor-pointer"
                                >
                                    {Object.values(FormDataBudget).map((budget) => (
                                        <option key={budget} value={budget}>{budget}</option>
                                    ))}
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
                                    <ArrowRight size={16} className="rotate-90" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-stone-500 uppercase tracking-wider ml-1">The Challenge</label>
                        <textarea 
                            required 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4} 
                            className="w-full px-4 py-3.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all outline-none resize-none"
                            placeholder="Describe the manual process you want to replace..."
                        ></textarea>
                    </div>

                    <div className="pt-2">
                        <Button type="submit" variant="primary" fullWidth disabled={status === 'submitting'} className="text-lg py-4 shadow-xl shadow-brand-500/20">
                            {status === 'submitting' ? 'Processing...' : 'Book Free Audit'}
                        </Button>
                        <p className="text-center text-xs text-stone-400 mt-4">
                            No commitment required. 100% confidential.
                        </p>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;