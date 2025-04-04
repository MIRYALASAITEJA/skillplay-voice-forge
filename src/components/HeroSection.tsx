
import { Button } from "@/components/ui/button";
import { Mic, Headphones, Users, CircleCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const { toast } = useToast();

  const handleDemoClick = () => {
    toast({
      title: "Demo Video",
      description: "Demo video will be available soon!",
    });
  };

  return (
    <section className="pt-32 pb-20 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Master Skills With Your <span className="hero-text-gradient">Voice</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover a new way to learn vocational skills through voice-controlled, 
              interactive games designed to make training engaging and effective.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              <Button size="lg" className="btn-gradient gap-2" asChild>
                <Link to="/game">
                  <Mic className="h-5 w-5" />
                  Try Voice Games
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" onClick={handleDemoClick}>
                Watch Demo
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CircleCheck className="h-4 w-4 text-skillplay-purple" />
                <span>No downloads required</span>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheck className="h-4 w-4 text-skillplay-purple" />
                <span>Works on all devices</span>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheck className="h-4 w-4 text-skillplay-purple" />
                <span>Track your progress</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-scale-in">
            <div className="relative">
              <div className="glass-card p-6 md:p-8 w-full max-w-md">
                <div className="bg-skillplay-dark-purple/50 rounded-lg p-4 mb-4 flex items-center gap-3">
                  <div className="bg-skillplay-purple rounded-full p-2">
                    <Mic className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-white/20 rounded-full w-full animate-pulse"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Headphones className="h-5 w-5 text-skillplay-purple" />
                    <span className="font-medium">Immersive Audio Feedback</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-skillplay-purple" />
                    <span className="font-medium">Personalized Learning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CircleCheck className="h-5 w-5 text-skillplay-purple" />
                    <span className="font-medium">Real-time Progress Tracking</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-skillplay-blue hover:bg-skillplay-blue/90" asChild>
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
