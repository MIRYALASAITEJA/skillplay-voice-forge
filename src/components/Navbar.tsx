
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mic, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleSignIn = () => {
    toast({
      title: "Sign In",
      description: "Sign in functionality will be implemented soon.",
    });
  };

  const handleGetStarted = () => {
    toast({
      title: "Get Started",
      description: "Thank you for your interest! Account creation will be available soon.",
    });
  };

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Mic className="h-6 w-6 text-skillplay-purple" />
          <span className="font-bold text-xl">SkillPlay</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            <Link to="/" className="nav-link-active">Home</Link>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/game" className="nav-link">Game</Link>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" onClick={handleSignIn}>Sign In</Button>
            <Button className="btn-gradient" onClick={handleGetStarted}>Get Started</Button>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-background border-b animate-fade-in">
          <div className="flex flex-col gap-4">
            <Link 
              to="/" 
              className="nav-link-active py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className="nav-link py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/game" 
              className="nav-link py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Game
            </Link>
            <div className="flex flex-col gap-3 pt-2">
              <Button variant="outline" onClick={handleSignIn}>Sign In</Button>
              <Button className="btn-gradient" onClick={handleGetStarted}>Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
