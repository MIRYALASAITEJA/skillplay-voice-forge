
import { Button } from "@/components/ui/button";
import { Mic, Headphones, Users, CircleCheck, SparklesIcon, Gem, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const { toast } = useToast();
  const [isTyping, setIsTyping] = useState(true);
  const [typedText, setTypedText] = useState("");
  const fullText = "Master Skills With Your Voice";
  
  useEffect(() => {
    if (isTyping) {
      if (typedText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setTypedText(fullText.slice(0, typedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
      }
    }
  }, [typedText, isTyping, fullText]);

  const handleDemoClick = () => {
    toast({
      title: "Demo Video",
      description: "Preparing immersive demo experience...",
    });
    
    // Scroll to demo section
    const demoSection = document.getElementById('demo-section');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 md:px-0 overflow-hidden relative">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-skillplay-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-skillplay-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {typedText}
              <span className={`${isTyping ? 'inline-block' : 'hidden'} w-1 h-12 bg-skillplay-purple ml-1 animate-pulse`}></span>
              <span className="hero-text-gradient block mt-1">AI-Powered Learning</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Discover a new way to learn vocational skills through voice-controlled, 
              interactive games designed to make training engaging and effective.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              <Button size="lg" className="btn-3d gap-2 glow-purple" asChild>
                <Link to="/game">
                  <Mic className="h-5 w-5" />
                  Try Voice Games
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 hover:bg-skillplay-purple/5" onClick={handleDemoClick}>
                <Zap className="h-5 w-5 text-skillplay-purple" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-x-6 gap-y-4 pt-4 text-sm">
              <div className="flex items-center gap-2 bg-white/5 p-2 rounded-full pl-1 pr-3 shadow-sm">
                <div className="h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CircleCheck className="h-4 w-4 text-green-500" />
                </div>
                <span>No downloads required</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 p-2 rounded-full pl-1 pr-3 shadow-sm">
                <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <CircleCheck className="h-4 w-4 text-blue-500" />
                </div>
                <span>Works on all devices</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 p-2 rounded-full pl-1 pr-3 shadow-sm">
                <div className="h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <CircleCheck className="h-4 w-4 text-purple-500" />
                </div>
                <span>Track your progress</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-scale-in">
            <div className="relative">
              <div className="glass-card-premium p-6 md:p-8 w-full max-w-md">
                <div className="absolute -right-3 -top-3 bg-gradient-to-r from-skillplay-purple to-skillplay-blue text-white text-xs font-bold px-2 py-1 rounded-full">
                  BETA
                </div>
                
                <div className="space-y-1 mb-6">
                  <h3 className="text-xl font-semibold">Voice Assistant</h3>
                  <p className="text-sm text-muted-foreground">Your personal learning companion</p>
                </div>
                
                <div className="bg-skillplay-dark-purple/50 rounded-lg p-4 mb-6 flex items-center gap-3 pulse-border">
                  <div className="bg-gradient-to-r from-skillplay-purple to-skillplay-blue rounded-full p-2">
                    <Mic className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-white/20 rounded-full w-full animate-pulse"></div>
                    <div className="h-2 bg-white/10 rounded-full w-3/4 mt-1"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white">
                      <Headphones className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Immersive Audio</h4>
                      <p className="text-xs text-muted-foreground">Real-time audio feedback enhances learning</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
                      <Users className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Personalized Learning</h4>
                      <p className="text-xs text-muted-foreground">AI adapts to your unique learning style</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white">
                      <Gem className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Skill Mastery</h4>
                      <p className="text-xs text-muted-foreground">Track progress with detailed analytics</p>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full mt-6 bg-gradient-to-r from-skillplay-blue to-skillplay-blue/80 hover:opacity-90 shimmer" asChild>
                  <Link to="/dashboard">
                    Start Learning
                  </Link>
                </Button>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 rounded-full h-32 w-32 bg-skillplay-purple/30 blur-2xl top-0 -left-10"></div>
              <div className="absolute -z-10 rounded-full h-40 w-40 bg-skillplay-blue/20 blur-3xl bottom-0 -right-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
