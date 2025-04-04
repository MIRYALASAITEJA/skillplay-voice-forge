
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Headphones, Mic, MicOff, Settings, Volume2, XCircle } from "lucide-react";
import { Link } from "react-router-dom";

const GamePage = () => {
  const [isListening, setIsListening] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [transcript, setTranscript] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isFeedbackPositive, setIsFeedbackPositive] = useState(false);
  const [progress, setProgress] = useState(0);
  
  // Simulate steps in the training module
  const totalSteps = 5;
  
  useEffect(() => {
    // Update progress whenever step changes
    const newProgress = (currentStep / totalSteps) * 100;
    setProgress(newProgress);
  }, [currentStep]);
  
  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // This would be replaced with actual speech recognition logic
      setTimeout(() => {
        // Simulate voice recognition
        const responses = [
          "Connect the red wire to the positive terminal",
          "Insert the wire into slot A",
          "Turn the circuit breaker off",
          "Tighten the connection with a screwdriver",
          "Test the circuit with a voltmeter"
        ];
        
        setTranscript(responses[currentStep - 1]);
        
        // Simulate response checking
        if (currentStep % 2 === 1) {
          setFeedback("Correct! That's the right procedure.");
          setIsFeedbackPositive(true);
        } else {
          setFeedback("Not quite right. Remember to check polarity first.");
          setIsFeedbackPositive(false);
        }
      }, 1500);
    } else {
      setTranscript("");
      setFeedback("");
    }
  };
  
  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      setTranscript("");
      setFeedback("");
      setIsListening(false);
    }
  };
  
  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setTranscript("");
      setFeedback("");
      setIsListening(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Game Header */}
      <div className="bg-skillplay-dark-purple text-white">
        <div className="container mx-auto py-6 px-4 md:px-0">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-white" asChild>
                <Link to="/dashboard">
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              </Button>
              <div>
                <h1 className="text-2xl font-bold">Electrical Safety Training</h1>
                <p className="text-white/70">Module 2: Wiring Connections</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="text-white border-white/20 px-3">
                <Headphones className="h-4 w-4 mr-1" /> Audio Enabled
              </Badge>
              <Button variant="ghost" size="icon" className="text-white">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Progress</span>
              <span>Step {currentStep} of {totalSteps}</span>
            </div>
            <Progress value={progress} className="h-2 bg-white/20" />
          </div>
        </div>
      </div>
      
      {/* Game Content */}
      <div className="container mx-auto py-8 px-4 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Instructions */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Instructions</h2>
                <div className="space-y-4">
                  <p>
                    In this exercise, you'll practice proper wiring connection techniques for a standard electrical outlet.
                  </p>
                  
                  <div className="rounded-lg border p-4 bg-muted/30">
                    <h3 className="font-medium mb-2">Step {currentStep}:</h3>
                    {currentStep === 1 && (
                      <p>Identify and prepare the correct wire for the positive terminal connection.</p>
                    )}
                    {currentStep === 2 && (
                      <p>Connect the wire to the appropriate terminal slot on the outlet.</p>
                    )}
                    {currentStep === 3 && (
                      <p>Ensure power is disconnected before proceeding with additional connections.</p>
                    )}
                    {currentStep === 4 && (
                      <p>Secure all connections with appropriate tools.</p>
                    )}
                    {currentStep === 5 && (
                      <p>Verify your work with proper testing procedures.</p>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Voice Commands:</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="bg-skillplay-purple/10 text-skillplay-purple p-1 rounded">
                          "Connect [wire] to [location]"
                        </span>
                        <span>- To make connections</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-skillplay-purple/10 text-skillplay-purple p-1 rounded">
                          "Turn [object] on/off"
                        </span>
                        <span>- To operate switches</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-skillplay-purple/10 text-skillplay-purple p-1 rounded">
                          "Use [tool] to [action]"
                        </span>
                        <span>- To use tools</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex justify-between pt-4">
                    <Button 
                      variant="outline" 
                      onClick={handlePreviousStep}
                      disabled={currentStep === 1}
                    >
                      Previous
                    </Button>
                    <Button 
                      onClick={handleNextStep}
                      disabled={currentStep === totalSteps}
                    >
                      Next Step
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right column - Interactive Area */}
          <div className="lg:col-span-2">
            {/* Visual interaction area */}
            <div className="aspect-video rounded-lg bg-skillplay-dark-purple overflow-hidden mb-6 relative">
              {/* This would be replaced with actual game visualization */}
              <div className="h-full flex flex-col items-center justify-center p-6 text-white">
                <h3 className="text-xl font-medium mb-2">Electrical Outlet Installation</h3>
                <p className="text-white/70 text-center mb-4">
                  Visual simulation of the wiring task would appear here
                </p>
                
                {/* Sample visual representation */}
                <div className="relative w-full max-w-md h-40 border border-white/20 rounded-lg mt-4">
                  <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 h-4 w-20 bg-red-500 rounded-full"></div>
                  <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 h-8 w-8 rounded-sm bg-white/30 flex items-center justify-center">
                    A
                  </div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-white/50">
                    Wire connection visualization
                  </div>
                </div>
              </div>
            </div>
            
            {/* Voice interaction area */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium">Voice Recognition</h3>
                      
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="gap-1"
                        >
                          <Volume2 className="h-4 w-4" />
                          Help
                        </Button>
                        <Button
                          onClick={toggleListening}
                          className={`gap-2 ${isListening ? 'bg-red-500 hover:bg-red-600' : 'btn-gradient'}`}
                          size="sm"
                        >
                          {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                          {isListening ? 'Stop' : 'Speak'}
                        </Button>
                      </div>
                    </div>
                    
                    <div className="min-h-32 rounded-lg border bg-card">
                      {transcript ? (
                        <div className="p-4">
                          <div className="mb-4">
                            <p className="text-sm text-muted-foreground mb-1">You said:</p>
                            <p className="font-mono p-2 bg-muted rounded text-sm">{transcript}</p>
                          </div>
                          
                          {feedback && (
                            <div className={`mt-4 p-3 border-l-4 rounded-r-md ${
                              isFeedbackPositive 
                                ? 'border-green-500 bg-green-500/10' 
                                : 'border-red-500 bg-red-500/10'
                            }`}>
                              <div className="flex gap-2">
                                {isFeedbackPositive ? (
                                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                                ) : (
                                  <XCircle className="h-5 w-5 text-red-500 shrink-0" />
                                )}
                                <p className="text-sm">{feedback}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="h-full flex items-center justify-center p-8 text-muted-foreground text-sm">
                          {isListening ? (
                            <div className="flex flex-col items-center gap-2">
                              <div className="flex gap-1">
                                <div className="w-2 h-2 bg-skillplay-purple rounded-full animate-pulse"></div>
                                <div className="w-2 h-2 bg-skillplay-purple rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                                <div className="w-2 h-2 bg-skillplay-purple rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                              </div>
                              <span>Listening... Speak your answer</span>
                            </div>
                          ) : (
                            <span>Click "Speak" and give your voice command</span>
                          )}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-4">Your Progress</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Accuracy</span>
                          <span>75%</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Completion</span>
                          <span>{progress.toFixed(0)}%</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                      </div>
                      
                      <div className="pt-2">
                        <h4 className="text-sm font-medium mb-2">Achievements:</h4>
                        <div className="space-y-2">
                          <Badge variant="outline" className="w-full justify-start gap-1 py-1.5 font-normal">
                            <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                            First Command
                          </Badge>
                          <Badge variant="outline" className="w-full justify-start gap-1 py-1.5 font-normal text-muted-foreground">
                            <CheckCircle className="h-3.5 w-3.5 text-muted-foreground" />
                            Complete Module
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
