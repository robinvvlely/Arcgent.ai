import React from 'react';
import { ArrowUpRight, BarChart3, Clock, Euro } from 'lucide-react';
import Button from '../components/ui/Button';

const CaseStudies: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl font-extrabold text-stone-900 mb-6 tracking-tight">Real Results. Real ROI.</h1>
            <p className="text-xl text-stone-600 leading-relaxed">
                Business owners care about time and money saved, not node configurations. Here is the proof.
            </p>
        </div>

        <div className="space-y-16">
            {/* Case Study 1 */}
            <div className="bg-white rounded-[2.5rem] shadow-xl shadow-stone-200/50 overflow-hidden lg:flex border border-stone-100 hover:shadow-2xl transition-shadow">
                <div className="lg:w-2/5 bg-stone-900 p-12 text-white flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full blur-[80px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
                    <div className="text-sm font-bold text-brand-400 uppercase tracking-widest mb-4 relative z-10">Marketing Agency</div>
                    <h3 className="text-3xl font-bold mb-8 relative z-10">AI Agent for Client Reporting</h3>
                    <div className="space-y-6 relative z-10">
                         <div className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10">
                            <Clock className="text-brand-400 mr-4" size={24} />
                            <span className="font-bold text-xl">90% Time Saved</span>
                         </div>
                         <div className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10">
                            <Euro className="text-brand-400 mr-4" size={24} />
                            <span className="font-bold text-xl">€20k / yr Saved</span>
                         </div>
                    </div>
                </div>
                <div className="lg:w-3/5 p-12">
                    <h4 className="text-2xl font-bold text-stone-900 mb-4">The Challenge</h4>
                    <p className="text-stone-600 mb-8 text-lg leading-relaxed">
                        Account managers were spending 10 hours/week manually pulling data from GA4, Meta Ads, and LinkedIn into spreadsheets, then writing summary emails. It was prone to error and expensive.
                    </p>
                    <h4 className="text-2xl font-bold text-stone-900 mb-4">The Solution</h4>
                    <p className="text-stone-600 mb-8 text-lg leading-relaxed">
                        We built an n8n workflow that:
                        <br/>1. Fetches data via API on the 1st of the month.
                        <br/>2. Aggregates it into a structured JSON.
                        <br/>3. Uses GPT-4 to analyze trends ("Why did CPC go up?").
                        <br/>4. Generates a branded PDF and drafts the email for the Account Manager to review.
                    </p>
                    <div className="pt-8 border-t border-stone-100 flex items-center justify-between">
                         <span className="text-sm font-medium text-stone-500 uppercase tracking-wide">Mid-sized Digital Agency (Germany)</span>
                    </div>
                </div>
            </div>

             {/* Case Study 2 */}
            <div className="bg-white rounded-[2.5rem] shadow-xl shadow-stone-200/50 overflow-hidden lg:flex border border-stone-100 hover:shadow-2xl transition-shadow">
                <div className="lg:w-2/5 bg-brand-700 p-12 text-white flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500 rounded-full blur-[80px] opacity-20 -translate-x-1/2 translate-y-1/2"></div>
                    <div className="text-sm font-bold text-brand-200 uppercase tracking-widest mb-4 relative z-10">E-Commerce SME</div>
                    <h3 className="text-3xl font-bold mb-8 relative z-10">Intelligent Customer Support Triage</h3>
                    <div className="space-y-6 relative z-10">
                         <div className="flex items-center p-4 bg-white/10 rounded-xl border border-white/10">
                            <BarChart3 className="text-brand-200 mr-4" size={24} />
                            <span className="font-bold text-xl">24/7 Response</span>
                         </div>
                         <div className="flex items-center p-4 bg-white/10 rounded-xl border border-white/10">
                            <ArrowUpRight className="text-brand-200 mr-4" size={24} />
                            <span className="font-bold text-xl">40% Less Tickets</span>
                         </div>
                    </div>
                </div>
                <div className="lg:w-3/5 p-12">
                    <h4 className="text-2xl font-bold text-stone-900 mb-4">The Challenge</h4>
                    <p className="text-stone-600 mb-8 text-lg leading-relaxed">
                        Customer support was overwhelmed by repetitive questions ("Where is my order?", "How do I return?"), preventing them from handling complex issues.
                    </p>
                    <h4 className="text-2xl font-bold text-stone-900 mb-4">The Solution</h4>
                    <p className="text-stone-600 mb-8 text-lg leading-relaxed">
                        We implemented an AI Agent connected to their Shopify backend.
                        The agent checks the order status via API. If it's a simple query, it answers instantly. If it requires human intervention (e.g., damaged goods), it drafts a ticket in Zendesk with a summary and sentiment analysis.
                    </p>
                    <div className="pt-8 border-t border-stone-100 flex items-center justify-between">
                         <span className="text-sm font-medium text-stone-500 uppercase tracking-wide">Fashion Retailer (Netherlands)</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-24 text-center">
             <h3 className="text-3xl font-bold text-stone-900 mb-6">Want results like these?</h3>
             <Button to="/contact">Discuss Your Use Case</Button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;