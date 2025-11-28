import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, BarChart3, CheckCircle2, Zap, Database, MessageSquare, ArrowRight, User, Euro, FileText, AlertCircle, ShieldCheck, Mail, Search, Send, PenTool, Share2, Layers, BookOpen, Compass, Upload, Calendar, Activity, Eye, TrendingUp, MessageCircle, LayoutDashboard } from 'lucide-react';
import Button from '../components/ui/Button';

// Type definition for the detail data
interface AgentDetailData {
    title: string;
    department: string;
    stats: { label: string; value: string; icon: React.ReactNode }[];
    techStack: { name: string; icon: string }[];
    challenge: string;
    solution: string;
    workflow: { title: string; desc: string; icon: React.ReactNode; color: string }[];
}

const PortfolioDetail: React.FC = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Data Dictionary for Agents
  const agents: Record<string, AgentDetailData> = {
      'ai-sdr-hubspot-enrichment': {
        title: "AI SDR & Enrichment Agent",
        department: "Sales",
        stats: [
            { label: "Hours Saved", value: "20h / week", icon: <Clock size={20} /> },
            { label: "Response Time", value: "< 5 mins", icon: <Zap size={20} /> },
            { label: "Meeting Rate", value: "+15%", icon: <BarChart3 size={20} /> }
        ],
        techStack: [
            { name: "HubSpot", icon: "https://cdn.simpleicons.org/hubspot" },
            { name: "Apollo", icon: "https://cdn.simpleicons.org/apolloio" },
            { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai" },
            { name: "n8n", icon: "https://cdn.simpleicons.org/n8n" },
            { name: "Slack", icon: "https://cdn.simpleicons.org/slack" }
        ],
        challenge: "The sales team was overwhelmed. High-intent leads were slipping through the cracks because SDRs spent 60% of their day manually researching prospects, checking LinkedIn, and copy-pasting data into HubSpot. Response times averaged 4+ hours, giving competitors a chance to swoop in.",
        solution: "We built an autonomous AI Agent that acts as a 24/7 SDR. It monitors inbound leads, instantly enriches their profile using external data sources, qualifies them against the Ideal Customer Profile (ICP), and drafts a hyper-personalized outreach email for the human rep to approve.",
        workflow: [
            { title: "Trigger", desc: "New Lead detected in HubSpot or Webform.", icon: <Zap size={20} className="text-white" />, color: "bg-brand-500" },
            { title: "Enrichment", desc: "Agent queries Apollo API to get company size, revenue, and recent news.", icon: <Database size={20} className="text-white" />, color: "bg-stone-900" },
            { title: "Qualification", desc: "Logic check: If Revenue > $5M and Industry = SaaS -> Tag as 'High Priority'.", icon: <CheckCircle2 size={20} className="text-white" />, color: "bg-brand-500" },
            { title: "Drafting", desc: "GPT-4 reads the prospect's website and writes a personalized opening line.", icon: <MessageSquare size={20} className="text-white" />, color: "bg-stone-900" },
            { title: "Handover", desc: "Slack notification sent to rep with 'Approve Email' button.", icon: <User size={20} className="text-white" />, color: "bg-brand-500" }
        ]
      },
      'finance-invoice-processor': {
        title: "Invoice Processor Agent",
        department: "Finance",
        stats: [
            { label: "Processing Cost", value: "-70%", icon: <Euro size={20} /> },
            { label: "Accuracy", value: "99.9%", icon: <CheckCircle2 size={20} /> },
            { label: "Time Saved", value: "15h / week", icon: <Clock size={20} /> }
        ],
        techStack: [
            { name: "Gmail", icon: "https://cdn.simpleicons.org/gmail" },
            { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai" },
            { name: "Xero", icon: "https://cdn.simpleicons.org/xero" },
            { name: "QuickBooks", icon: "https://cdn.simpleicons.org/quickbooks" },
            { name: "Slack", icon: "https://cdn.simpleicons.org/slack" }
        ],
        challenge: "The finance team was drowning in manual data entry. Every month end, they spent countless hours downloading PDF invoices from emails, manually typing specific figures into the accounting software, and chasing missing details. It was slow, boring, and prone to human error.",
        solution: "We deployed an intelligent Invoice Processor Agent that monitors the inbox 24/7. It uses AI to extract structured data from PDFs (even messy scans), validates the math and VAT rules, checks for duplicates, and syncs perfectly clean records directly to the accounting system.",
        workflow: [
            { title: "Monitor", desc: "Agent monitors your mailbox and automatically recognizes invoices with PDF attachments.", icon: <Zap size={20} className="text-white" />, color: "bg-brand-500" },
            { title: "Extraction", desc: "AI extracts structured data: supplier, invoice #, date, amounts, VAT, and payment info.", icon: <FileText size={20} className="text-white" />, color: "bg-stone-900" },
            { title: "Validation", desc: "Checks for errors, missing fields, duplicates, and applies your business logic (e.g. valid VAT).", icon: <ShieldCheck size={20} className="text-white" />, color: "bg-brand-500" },
            { title: "Sync", desc: "Pushes validated data to Xero/QuickBooks/Moneybird automatically.", icon: <Database size={20} className="text-white" />, color: "bg-stone-900" },
            { title: "Audit", desc: "Logs the action and sends a confirmation or exception alert to Slack.", icon: <AlertCircle size={20} className="text-white" />, color: "bg-brand-500" }
        ]
      },
      'support-ticket-triage': {
        title: "AI Customer Support Agent",
        department: "Support",
        stats: [
            { label: "Ticket Volume", value: "-40%", icon: <MessageSquare size={20} /> },
            { label: "CSAT Score", value: "+15%", icon: <CheckCircle2 size={20} /> },
            { label: "Response Time", value: "< 10 min", icon: <Zap size={20} /> }
        ],
        techStack: [
            { name: "Zendesk", icon: "https://cdn.simpleicons.org/zendesk" },
            { name: "Jira", icon: "https://cdn.simpleicons.org/jira" },
            { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai" },
            { name: "Gmail", icon: "https://cdn.simpleicons.org/gmail" }
        ],
        challenge: "Your support team is drowning in repetitive tickets. High-value issues get buried under a mountain of 'password reset' and 'where is my order' requests, leading to agent burnout and slow response times for critical problems.",
        solution: "We implemented an intelligent Support Triage Agent. It intercepts incoming tickets from Email or Jira, checks previous tickets and documentation for context, and drafts a high-quality response. The human agent simply reviews, approves, and sends.",
        workflow: [
            { title: "Collect", desc: "Collects tickets from Email, Jira, or Helpdesk tools.", icon: <Mail size={20} className="text-white" />, color: "bg-brand-500" },
            { title: "Context", desc: "Agent checks previous conversations and knowledge base for context.", icon: <Search size={20} className="text-white" />, color: "bg-stone-900" },
            { title: "Draft", desc: "AI drafts a helpful, context-aware response for the customer.", icon: <MessageSquare size={20} className="text-white" />, color: "bg-brand-500" },
            { title: "Review", desc: "Human agent reviews the draft. If approved, it is sent automatically.", icon: <User size={20} className="text-white" />, color: "bg-stone-900" },
            { title: "Send", desc: "Response sent to customer and ticket status updated.", icon: <Send size={20} className="text-white" />, color: "bg-brand-500" }
        ]
      },
      'content-repurposing-engine': {
        title: "Content Repurposing Engine",
        department: "Marketing",
        stats: [
            { label: "Content Output", value: "10x", icon: <Layers size={20} /> },
            { label: "Manual Effort", value: "-90%", icon: <Clock size={20} /> },
            { label: "Consistency", value: "100%", icon: <CheckCircle2 size={20} /> }
        ],
        techStack: [
            { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress" },
            { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai" },
            { name: "Notion", icon: "https://cdn.simpleicons.org/notion" },
            { name: "LinkedIn", icon: "https://cdn.simpleicons.org/linkedin/0a66c2" },
            { name: "Slack", icon: "https://cdn.simpleicons.org/slack" }
        ],
        challenge: "Your marketing team writes a great blog post, but then spends hours manually rewriting it for LinkedIn, Twitter, and newsletters. It's a high-effort, low-creativity task that often gets skipped, leaving valuable content gathering dust on your website instead of driving traffic.",
        solution: "We built a Content Repurposing Engine that triggers whenever a new article is published. It reads the content, understands your brand voice, and automatically generates a week's worth of social content—LinkedIn posts, Twitter threads, and newsletter snippets—ready for final approval.",
        workflow: [
            { title: "Ingest", desc: "Agent detects new blog post via RSS feed or CMS webhook.", icon: <FileText size={20} className="text-white" />, color: "bg-brand-500" },
            { title: "Deconstruct", desc: "AI analyzes the article to find the 'Core Idea', 'Best Quotes', and 'Key Takeaways'.", icon: <Search size={20} className="text-white" />, color: "bg-stone-900" },
            { title: "Transform", desc: "Generates platform-specific assets: A 'hooky' Twitter thread and a professional LinkedIn update.", icon: <PenTool size={20} className="text-white" />, color: "bg-brand-500" },
            { title: "Review", desc: "Drafts are pushed to a Notion Content Calendar or Slack for one-click approval.", icon: <Database size={20} className="text-white" />, color: "bg-stone-900" },
            { title: "Publish", desc: "Approved content is scheduled or posted automatically via API.", icon: <Share2 size={20} className="text-white" />, color: "bg-brand-500" }
        ]
      },
      'ai-seo-content-writer': {
        title: "AI SEO Content Writer",
        department: "Marketing",
        stats: [
            { label: "Articles/Mo", value: "+400%", icon: <FileText size={20} /> },
            { label: "SEO Traffic", value: "+200%", icon: <BarChart3 size={20} /> },
            { label: "Cost/Article", value: "-80%", icon: <Euro size={20} /> }
        ],
        techStack: [
            { name: "Semrush", icon: "https://cdn.simpleicons.org/semrush" },
            { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai" },
            { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress" },
            { name: "Slack", icon: "https://cdn.simpleicons.org/slack" }
        ],
        challenge: "Creating consistent, high-quality, SEO-optimized content is a massive bottleneck. Human writers struggle to balance SEO requirements with engaging storytelling, and maintaining a publishing schedule of 4+ articles a week is expensive and difficult to scale.",
        solution: "We deployed an autonomous AI SEO Content Writer. It takes a target keyword, performs deep research on the topic and competitors, learns your specific brand voice, and generates a fully optimized article. It then stages the draft in your CMS for final human approval.",
        workflow: [
            { title: "Trigger", desc: "Agent receives a target keyword from your Semrush list or manual input.", icon: <Zap size={20} className="text-white" />, color: "bg-brand-500" },
            { title: "Research", desc: "Deep dives into the topic, gathering facts and analyzing top-ranking competitors.", icon: <BookOpen size={20} className="text-white" />, color: "bg-stone-900" },
            { title: "Strategy", desc: "Identifies best practices, content gaps, and structural requirements for ranking.", icon: <Compass size={20} className="text-white" />, color: "bg-brand-500" },
            { title: "Drafting", desc: "Writes the full article, strictly adhering to your brand voice and style guidelines.", icon: <PenTool size={20} className="text-white" />, color: "bg-stone-900" },
            { title: "Stage", desc: "Uploads formatted draft to WordPress and notifies editor for final 'Green Light'.", icon: <Upload size={20} className="text-white" />, color: "bg-brand-500" }
        ]
      },
      'ai-google-ads-assistant': {
        title: "AI Google Ads Assistant",
        department: "Marketing",
        stats: [
            { label: "Audit Time", value: "-95%", icon: <Clock size={20} /> },
            { label: "ROAS", value: "+12%", icon: <BarChart3 size={20} /> },
            { label: "Wasted Spend", value: "-15%", icon: <Euro size={20} /> }
        ],
        techStack: [
            { name: "Google Ads", icon: "https://cdn.simpleicons.org/googleads" },
            { name: "n8n", icon: "https://cdn.simpleicons.org/n8n" },
            { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai" },
            { name: "Slack", icon: "https://cdn.simpleicons.org/slack" }
        ],
        challenge: "Every Monday morning, your PPC specialists spend the first 3-4 hours manually digging through campaigns, checking budget pacing, and looking for anomalies. It's a reactive process that eats up valuable strategic thinking time and often misses subtle optimization opportunities.",
        solution: "We built an AI Google Ads Assistant that runs a comprehensive 50-point audit automatically every Monday at 8 AM. It pulls live performance data, analyzes it against historical benchmarks, identifies specific keywords or ads draining budget, and delivers a prioritized 'Optimization Checklist' to the specialist.",
        workflow: [
            { title: "Schedule", desc: "Triggered automatically every Monday at 08:00 AM.", icon: <Calendar size={20} className="text-white" />, color: "bg-brand-500" },
            { title: "Fetch Data", desc: "Agent queries Google Ads API for campaigns, ad groups, and keyword performance.", icon: <Database size={20} className="text-white" />, color: "bg-stone-900" },
            { title: "Analyze", desc: "AI evaluates KPIs (CPA, ROAS, CTR) and flags underperforming assets.", icon: <Search size={20} className="text-white" />, color: "bg-brand-500" },
            { title: "Recommend", desc: "Generates actionable tips: 'Pause Keyword X', 'Increase Bid on Campaign Y'.", icon: <CheckCircle2 size={20} className="text-white" />, color: "bg-stone-900" },
            { title: "Notify", desc: "Sends a concise briefing and action list to the specialist via Slack.", icon: <Send size={20} className="text-white" />, color: "bg-brand-500" }
        ]
      },
      'ai-meta-ads-assistant': {
        title: "AI Meta Ads Assistant",
        department: "Marketing",
        stats: [
            { label: "Audit Time", value: "-3h / week", icon: <Clock size={20} /> },
            { label: "ROAS Impact", value: "+15%", icon: <BarChart3 size={20} /> },
            { label: "Creative Fatigue", value: "Detected Faster", icon: <Activity size={20} /> }
        ],
        techStack: [
            { name: "Meta", icon: "https://cdn.simpleicons.org/meta" },
            { name: "n8n", icon: "https://cdn.simpleicons.org/n8n" },
            { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai" },
            { name: "Slack", icon: "https://cdn.simpleicons.org/slack" }
        ],
        challenge: "Meta (Facebook) Ads require constant creative refreshes. Buyers often miss signs of 'Creative Fatigue' until CPA spikes. Manually checking Hook Rates, Hold Rates, and CTRs across dozens of ad sets daily is exhausting and prone to oversight.",
        solution: "We built an intelligent Meta Ads Assistant that audits your account daily. It goes beyond basic ROI—analyzing creative-level metrics to spot fatigue before it kills performance. It identifies saturation, flags budget inefficiencies, and suggests exactly which ads to kill or scale.",
        workflow: [
            { title: "Schedule", desc: "Runs daily at 07:00 AM to review previous day's data.", icon: <Calendar size={20} className="text-white" />, color: "bg-brand-500" },
            { title: "Fetch Creatives", desc: "Pulls metrics for Ads & Creatives (Spend, CPM, Hook Rate, Hold Rate).", icon: <Database size={20} className="text-white" />, color: "bg-stone-900" },
            { title: "Fatigue Check", desc: "AI compares current CTR/CPA against 7-day rolling average to detect drop-offs.", icon: <Activity size={20} className="text-white" />, color: "bg-brand-500" },
            { title: "Strategy", desc: "Tags ads as 'Fatigued', 'Stable', or 'Scaling Candidate' based on logic.", icon: <TrendingUp size={20} className="text-white" />, color: "bg-stone-900" },
            { title: "Briefing", desc: "Sends a 'Morning Brief' to Slack with Kill/Scale recommendations.", icon: <Send size={20} className="text-white" />, color: "bg-brand-500" }
        ]
      },
      'ai-ga4-assistant': {
        title: "AI GA4 Assistant",
        department: "Marketing",
        stats: [
            { label: "Reporting Time", value: "-90%", icon: <Clock size={20} /> },
            { label: "Data Accessibility", value: "100%", icon: <Database size={20} /> },
            { label: "Ad-hoc Queries", value: "Instant", icon: <Zap size={20} /> }
        ],
        techStack: [
            { name: "Google Analytics 4", icon: "https://cdn.simpleicons.org/googleanalytics" },
            { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai" },
            { name: "n8n", icon: "https://cdn.simpleicons.org/n8n" },
            { name: "Slack", icon: "https://cdn.simpleicons.org/slack" }
        ],
        challenge: "Marketing teams often struggle to find specific data in the complex GA4 interface. Answering simple ad-hoc questions like 'How did organic traffic perform last week vs. the week before?' often requires a data analyst or navigating through multiple confusing menus, slowing down decision-making.",
        solution: "We built a conversational AI GA4 Assistant connected via MCP (Model Context Protocol). Users can simply ask questions in plain English through a chat interface or Slack. The agent interprets the intent, fetches the exact real-time data from GA4, explains the insights, and can even generate custom dashboard views on demand.",
        workflow: [
            { title: "Trigger", desc: "User asks a question via Chatbot or Slack (e.g., 'Show me mobile conversion rates').", icon: <MessageCircle size={20} className="text-white" />, color: "bg-brand-500" },
            { title: "Search", desc: "Agent accesses GA4 via MCP to find the relevant dimensions and metrics.", icon: <Search size={20} className="text-white" />, color: "bg-stone-900" },
            { title: "Analyze", desc: "Processes the data to extract trends, anomalies, or answers.", icon: <BarChart3 size={20} className="text-white" />, color: "bg-brand-500" },
            { title: "Respond", desc: "Returns the answer in natural language with a supporting chart or table.", icon: <MessageSquare size={20} className="text-white" />, color: "bg-stone-900" },
            { title: "Dashboard", desc: "Optionally builds and saves a new Dashboard view for future tracking.", icon: <LayoutDashboard size={20} className="text-white" />, color: "bg-brand-500" }
        ]
      }
  };

  const agentData = slug ? agents[slug] : null;
  
  if (!agentData) {
    return (
        <div className="min-h-screen pt-32 flex flex-col items-center justify-center bg-stone-50 px-4 text-center">
            <h1 className="text-3xl font-bold mb-4 text-stone-900">Case Study Coming Soon</h1>
            <p className="text-stone-600 mb-8">We are documenting this agent. Check back later.</p>
            <Button to="/portfolio">Back to Library</Button>
        </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen">
       {/* Top Nav Back */}
       <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <Link to="/portfolio" className="inline-flex items-center text-stone-500 hover:text-brand-600 font-medium transition-colors mb-8">
            <ArrowLeft size={18} className="mr-2" />
            Back to Agent Library
          </Link>
       </div>

       {/* Hero Section */}
       <section className="pb-16 px-4 sm:px-6 lg:px-8">
           <div className="max-w-7xl mx-auto">
               <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-stone-200/50 border border-stone-100 relative overflow-hidden">
                   {/* Background Decor */}
                   <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                   
                   <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                            <span className="inline-block px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-sm font-bold uppercase tracking-wider w-fit">
                                {agentData.department} Agent
                            </span>
                            {/* Tech Stack Icons */}
                            <div className="flex items-center gap-4 flex-wrap">
                                {agentData.techStack.map((tech, i) => (
                                    <div key={i} className="w-10 h-10 bg-white border border-stone-200 rounded-full flex items-center justify-center p-2 shadow-sm" title={tech.name}>
                                        <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain opacity-80" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-extrabold text-stone-900 mb-12 tracking-tight max-w-4xl">
                            {agentData.title}
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {agentData.stats.map((stat, i) => (
                                <div key={i} className="bg-stone-50 p-6 rounded-3xl border border-stone-100 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-600 shadow-sm border border-stone-100">
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-stone-400 uppercase">{stat.label}</p>
                                        <p className="text-2xl font-bold text-stone-900">{stat.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                   </div>
               </div>
           </div>
       </section>

       {/* Content Split */}
       <section className="pb-24 px-4 sm:px-6 lg:px-8">
           <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
               {/* Left: The Story */}
               <div className="space-y-12">
                   <div>
                       <h2 className="text-3xl font-bold text-stone-900 mb-6">The Challenge</h2>
                       <p className="text-lg text-stone-600 leading-relaxed">
                           {agentData.challenge}
                       </p>
                   </div>
                   <div>
                       <h2 className="text-3xl font-bold text-stone-900 mb-6">The Solution</h2>
                       <p className="text-lg text-stone-600 leading-relaxed">
                           {agentData.solution}
                       </p>
                   </div>
                   
                   <div className="bg-stone-900 text-white p-10 rounded-[2.5rem] relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4">Want an agent like this?</h3>
                            <p className="text-stone-400 mb-8">
                                We can deploy a similar structure for your {agentData.department.toLowerCase()} team in under 2 weeks.
                            </p>
                            <Button 
                                to="/contact" 
                                variant="secondary"
                                className="bg-white text-stone-900 hover:bg-brand-50 hover:text-brand-700 shadow-none border-none"
                            >
                                Book a Demo
                            </Button>
                        </div>
                   </div>
               </div>

               {/* Right: The Workflow */}
               <div>
                   <div className="bg-white rounded-[2.5rem] border border-stone-200 shadow-xl p-8 md:p-12 relative">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-stone-100 text-stone-600 text-sm font-bold mb-10">
                            <Zap size={16} className="mr-2" />
                            Workflow Logic
                        </div>

                        <div className="relative pl-4">
                             {/* Vertical Line */}
                            <div className="absolute top-4 bottom-12 left-[27px] w-0.5 bg-stone-200"></div>

                            <div className="space-y-10">
                                {agentData.workflow.map((step, i) => (
                                    <div key={i} className="relative flex items-start gap-6 group">
                                        <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center shrink-0 shadow-lg relative z-10 ring-4 ring-white group-hover:scale-110 transition-transform duration-300`}>
                                            {step.icon}
                                        </div>
                                        <div className="pt-2">
                                            <h4 className="text-lg font-bold text-stone-900">{step.title}</h4>
                                            <p className="text-stone-600 text-sm leading-relaxed mt-1">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                   </div>
               </div>
           </div>
       </section>
    </div>
  );
};

export default PortfolioDetail;