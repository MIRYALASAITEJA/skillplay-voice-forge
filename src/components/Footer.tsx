import { Link } from "react-router-dom";
import { Mic } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-skillplay-dark-purple text-white">
      <div className="container mx-auto py-12 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mic className="h-6 w-6 text-skillplay-purple" />
              <span className="font-bold text-xl">SkillPlay</span>
            </div>
            <p className="text-white/70 mb-4">
              Revolutionizing vocational skills training through voice-controlled, gamified learning experiences.
            </p>
            <div className="flex gap-4">
              {/* Social media icons would go here */}
              <a href="#" className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-white/70 hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-white/70 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/dashboard" className="text-white/70 hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link to="/games" className="text-white/70 hover:text-white transition-colors">Voice Games</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-white/70 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/tutorials" className="text-white/70 hover:text-white transition-colors">Tutorials</Link></li>
              <li><Link to="/docs" className="text-white/70 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link to="/support" className="text-white/70 hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-white/70 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 text-center md:flex md:justify-between md:text-left">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <p className="text-white/60 text-sm">
              &copy; {new Date().getFullYear()} SkillPlay. All rights reserved.
            </p>
            <p className="text-white/60 text-sm">
              Made by <span className="text-skillplay-purple font-medium">Sai Teja Miryala</span>
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-white/60">
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
