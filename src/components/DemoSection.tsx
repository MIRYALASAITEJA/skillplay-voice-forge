
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Play, Volume2, VolumeX, CheckCircle, XCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DemoSection = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [feedback, setFeedback] = useState<null | { correct: boolean; message: string }>(null);
  const [muted, setMuted] = useState(false);
  const { toast } = useToast();
  
  // Expected commands for the demo
  const expectedCommands = [
    "connect the blue wire to terminal a",
    "connect blue wire to terminal a",
    "connect blue wire to a",
    "blue wire to terminal a"
  ];
  
  useEffect(() => {
    let recognition: SpeechRecognition | null = null;
    
    if (isListening) {
      try {
        // @ts-ignore - Browser API
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        
        recognition.onresult = (event: SpeechRecognitionEvent) => {
          const speechResult = event.results[0][0].transcript.toLowerCase();
          setTranscript(speechResult);
          
          // Check if the command matches any expected command
          const isCorrect = expectedCommands.some(cmd => 
            speechResult.includes(cmd) || cmd.includes(speechResult)
          );
          
          if (isCorrect) {
            setFeedback({
              correct: true,
              message: "Great! Now find the terminal labeled 'A' on the circuit board."
            });
            if (!muted) {
              const utterance = new SpeechSynthesisUtterance("Great! Now find the terminal labeled A on the circuit board.");
              window.speechSynthesis.speak(utterance);
            }
          } else {
            setFeedback({
              correct: false,
              message: "Try again. Say: Connect the blue wire to terminal A"
            });
            if (!muted) {
              const utterance = new SpeechSynthesisUtterance("Try again. Say: Connect the blue wire to terminal A");
              window.speechSynthesis.speak(utterance);
            }
          }
          
          // Auto stop listening after processing command
          setIsListening(false);
        };
        
        recognition.onerror = (event: any) => {
          console.error('Speech recognition error', event.error);
          toast({
            title: "Voice Recognition Error",
            description: `Error: ${event.error}. Please try again.`,
            variant: "destructive"
          });
          setIsListening(false);
        };
        
        recognition.start();
        
        toast({
          title: "Listening...",
          description: "Try saying: 'Connect the blue wire to terminal A'",
        });
      } catch (error) {
        console.error('Speech recognition not supported', error);
        toast({
          title: "Not Supported",
          description: "Voice recognition is not supported in your browser.",
          variant: "destructive"
        });
        setIsListening(false);
      }
    }
    
    return () => {
      if (recognition) {
        recognition.abort();
      }
    };
  }, [isListening, muted, toast]);
  
  const toggleListening = () => {
    setIsListening(!isListening);
    if (isListening) {
      setTranscript("");
      setFeedback(null);
    }
  };
  
  const toggleMute = () => {
    setMuted(!muted);
    toast({
      title: muted ? "Audio Enabled" : "Audio Muted",
      description: muted ? "Voice feedback is now on." : "Voice feedback is now off.",
    });
  };
  
  const showHelp = () => {
    toast({
      title: "Voice Commands Help",
      description: "Try saying: 'Connect the blue wire to terminal A' to complete this task.",
    });
    
    if (!muted) {
      const utterance = new SpeechSynthesisUtterance("Try saying: Connect the blue wire to terminal A to complete this task.");
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <section className="py-20 px-4 md:px-0 bg-gradient-to-b from-background to-skillplay-dark-purple/10">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience <span className="hero-text-gradient">Voice-Controlled</span> Learning
          </h2>
          <p className="text-lg text-muted-foreground">
            Try our interactive demo to see how SkillPlay uses voice recognition to guide you through learning exercises.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto glass-card p-6 md:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-video bg-skillplay-dark-purple rounded-lg flex items-center justify-center overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-skillplay-purple/20 to-skillplay-blue/20 opacity-70"></div>
                
                <div className="p-4 text-center relative z-10">
                  <h3 className="text-xl font-medium text-white mb-2">Electrical Wiring Tutorial</h3>
                  <p className="text-white/70 mb-4">Practice connecting components safely</p>
                  
                  <Button variant="outline" className="gap-2 bg-black/20 text-white border-white/20 hover:bg-black/30 hover:text-white group-hover:scale-105 transition-transform">
                    <Play className="h-4 w-4" />
                    Start Tutorial
                  </Button>
                </div>
                
                {/* Visual elements representing the circuit board */}
                <div className="absolute bottom-4 left-4 right-4 h-32 bg-black/30 rounded-md flex items-center justify-center p-3">
                  <div className="w-full h-full relative">
                    {/* Simulated circuit board */}
                    <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 h-8 w-8 bg-gray-800 rounded flex items-center justify-center">
                      <span className="text-white text-xs">A</span>
                    </div>
                    <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 h-8 w-8 bg-gray-800 rounded flex items-center justify-center">
                      <span className="text-white text-xs">B</span>
                    </div>
                    {/* Blue wire */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2 w-1/3 bg-blue-500 rounded-full"></div>
                    {feedback?.correct && (
                      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 h-2 w-1/2 bg-blue-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
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
                    disabled={isListening}
                  >
                    {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                    {isListening ? 'Listening...' : 'Start Listening'}
                  </Button>
                  
                  <Button variant="outline" className="gap-2" onClick={showHelp}>
                    <Volume2 className="h-5 w-5" />
                    Help
                  </Button>
                  
                  <Button variant="outline" className="gap-2" onClick={toggleMute}>
                    {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                    {muted ? 'Unmute' : 'Mute'}
                  </Button>
                </div>
              </div>
              
              <div className="flex-1 rounded-lg border bg-card p-4 min-h-[200px]">
                <h4 className="text-sm font-medium mb-2">Voice Recognition Output:</h4>
                {transcript ? (
                  <div className="animate-fade-in">
                    <p className="font-mono p-3 bg-muted rounded text-sm">{transcript}</p>
                    
                    {feedback && (
                      <div className={`mt-4 p-3 border-l-4 ${feedback.correct ? 'border-green-500 bg-green-500/10' : 'border-red-500 bg-red-500/10'} rounded-r-md`}>
                        <div className="flex items-start gap-2">
                          {feedback.correct ? 
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /> : 
                            <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                          }
                          <p className="text-sm">
                            {feedback.message}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-muted-foreground text-sm">
                    {isListening ? (
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex gap-1">
                          <div className="w-2 h-8 bg-skillplay-purple rounded-full animate-pulse"></div>
                          <div className="w-2 h-6 bg-skillplay-purple rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                          <div className="w-2 h-4 bg-skillplay-purple rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                          <div className="w-2 h-7 bg-skillplay-purple rounded-full animate-pulse" style={{ animationDelay: "0.3s" }}></div>
                          <div className="w-2 h-5 bg-skillplay-purple rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                        </div>
                        <span>Listening...</span>
                      </div>
                    ) : (
                      <span>Click "Start Listening" and speak a command</span>
                    )}
                  </div>
                )}
              </div>
              
              <div className="mt-4 p-4 bg-skillplay-light-purple/20 rounded-lg">
                <h4 className="text-sm font-medium mb-2">Current task:</h4>
                <p className="text-sm">Connect the blue wire to terminal A on the circuit board.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
