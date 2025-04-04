
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Play, Volume2 } from "lucide-react";

const DemoSection = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  
  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // This would be replaced with actual speech recognition logic
      setTimeout(() => {
        setTranscript("Connect the blue wire to terminal A");
      }, 1500);
    } else {
      setTranscript("");
    }
  };

  return (
    <section className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience <span className="hero-text-gradient">Voice-Controlled</span> Learning
          </h2>
          <p className="text-lg text-muted-foreground">
            Try our interactive demo to see how SkillPlay uses voice recognition to guide you through learning exercises.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto glass-card p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-video bg-skillplay-dark-purple rounded-lg flex items-center justify-center overflow-hidden">
                <div className="p-4 text-center">
                  <h3 className="text-xl font-medium text-white mb-2">Electrical Wiring Tutorial</h3>
                  <p className="text-white/70 mb-4">Practice connecting components safely</p>
                  
                  <Button variant="outline" className="gap-2 bg-black/20 text-white border-white/20 hover:bg-black/30 hover:text-white">
                    <Play className="h-4 w-4" />
                    Start Tutorial
                  </Button>
                </div>
                
                {/* Visual elements representing the circuit board */}
                <div className="absolute bottom-4 left-4 right-4 h-24 bg-black/30 rounded-md flex items-center justify-center">
                  <div className="text-xs text-white/70">Circuit board visualization would appear here</div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-2">Voice Commands</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Click the microphone button and speak a command to interact with the tutorial.
                </p>
                
                <div className="flex gap-3">
                  <Button 
                    onClick={toggleListening}
                    className={`gap-2 ${isListening ? 'bg-red-500 hover:bg-red-600' : 'btn-gradient'}`}
                  >
                    {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                    {isListening ? 'Stop Listening' : 'Start Listening'}
                  </Button>
                  
                  <Button variant="outline" className="gap-2">
                    <Volume2 className="h-5 w-5" />
                    Help
                  </Button>
                </div>
              </div>
              
              <div className="flex-1 rounded-lg border bg-card p-4 min-h-[150px]">
                <h4 className="text-sm font-medium mb-2">Voice Recognition Output:</h4>
                {transcript ? (
                  <div className="animate-fade-in">
                    <p className="font-mono p-2 bg-muted rounded text-sm">{transcript}</p>
                    
                    <div className="mt-4 p-3 border-l-4 border-skillplay-blue bg-skillplay-blue/10 rounded-r-md">
                      <p className="text-sm">
                        <span className="font-semibold">System Response:</span> Great! Now find the terminal labeled "A" on the circuit board.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-muted-foreground text-sm">
                    {isListening ? (
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-skillplay-purple rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-skillplay-purple rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                          <div className="w-2 h-2 bg-skillplay-purple rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                        </div>
                        <span>Listening...</span>
                      </div>
                    ) : (
                      <span>Click "Start Listening" and speak a command</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
