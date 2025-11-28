import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
               <div className="bg-brand-600 p-1.5 rounded-lg text-white">
                  <Logo size={20} className="text-white" />
                </div>
              <span className="text-xl font-bold text-white">Arcgent</span>
            </Link>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              We turn manual chaos into scalable, AI-driven workflows.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="mailto:hello@arcgent.eu" className="text-slate-400 hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/portfolio" className="text-sm hover:text-brand-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="text-sm hover:text-brand-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-brand-400 transition-colors">Book Audit</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/how-we-work" className="text-sm hover:text-brand-400 transition-colors">How We Work</Link></li>
              <li><Link to="/services" className="text-sm hover:text-brand-400 transition-colors">Services</Link></li>
              <li><Link to="/why-ai-sops" className="text-sm hover:text-brand-400 transition-colors">Why AI-SOPs</Link></li>
            </ul>
          </div>

          {/* Legal / Location */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Global</h3>
            <p className="text-sm text-slate-400 mb-4">We work remote all over the world.</p>
            <div className="pt-4 border-t border-slate-800">
               <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} Arcgent BV. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;