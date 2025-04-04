
import { Link } from "react-router-dom";
import { Mic, Facebook, Twitter, Linkedin, Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-skillplay-dark-purple to-black text-white">
      <div className="container mx-auto py-16 px-4 md:px-0">
        {/* Top wave decoration */}
        <div className="w-full h-12 -mt-12 mb-8 overflow-hidden">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0.00,49.99 C150.00,150.00 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z" 
                  className="fill-skillplay-dark-purple">
            </path>
          </svg>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-skillplay-purple to-skillplay-blue flex items-center justify-center">
                <Mic className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">SkillPlay</span>
            </div>
            <p className="text-white/70 mb-6 max-w-xs">
              Revolutionizing vocational skills training through voice-controlled, gamified learning experiences.
            </p>
            <div className="flex gap-4">
              {/* Social media icons */}
              <a href="#" className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-skillplay-purple/70 transition-colors">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-skillplay-purple/70 transition-colors">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-skillplay-purple/70 transition-colors">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-skillplay-purple/70 transition-colors">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 border-b border-white/10 pb-2 inline-flex">
              <span className="relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-[2px] after:bg-skillplay-purple">Product</span>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-white/70 hover:text-white transition-colors hover:pl-1 inline-block">Features</Link></li>
              <li><Link to="/pricing" className="text-white/70 hover:text-white transition-colors hover:pl-1 inline-block">Pricing</Link></li>
              <li><Link to="/dashboard" className="text-white/70 hover:text-white transition-colors hover:pl-1 inline-block">Dashboard</Link></li>
              <li><Link to="/games" className="text-white/70 hover:text-white transition-colors hover:pl-1 inline-block">Voice Games</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 border-b border-white/10 pb-2 inline-flex">
              <span className="relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-[2px] after:bg-skillplay-purple">Resources</span>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-white/70 hover:text-white transition-colors hover:pl-1 inline-block">Blog</Link></li>
              <li><Link to="/tutorials" className="text-white/70 hover:text-white transition-colors hover:pl-1 inline-block">Tutorials</Link></li>
              <li><Link to="/docs" className="text-white/70 hover:text-white transition-colors hover:pl-1 inline-block">Documentation</Link></li>
              <li><Link to="/support" className="text-white/70 hover:text-white transition-colors hover:pl-1 inline-block">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 border-b border-white/10 pb-2 inline-flex">
              <span className="relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-[2px] after:bg-skillplay-purple">Company</span>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-white/70 hover:text-white transition-colors hover:pl-1 inline-block">About Us</Link></li>
              <li><Link to="/careers" className="text-white/70 hover:text-white transition-colors hover:pl-1 inline-block">Careers</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors hover:pl-1 inline-block">Contact</Link></li>
              <li><Link to="/privacy" className="text-white/70 hover:text-white transition-colors hover:pl-1 inline-block">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 md:flex md:justify-between md:items-center">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <p className="text-white/60 text-sm">
              &copy; {new Date().getFullYear()} SkillPlay. All rights reserved.
            </p>
            <p className="text-white/60 text-sm flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> by 
              <span className="text-skillplay-purple font-medium">Sai Teja Miryala</span> and 
              <span className="text-skillplay-purple font-medium">Sai Koushik</span>
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-white/60">
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link></li>
              <li>
                <a href="mailto:contact@skillplay.io" className="hover:text-white transition-colors flex items-center gap-1">
                  <Mail className="h-3 w-3" /> Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
