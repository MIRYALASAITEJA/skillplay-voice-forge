
import { useState, useEffect, useCallback } from 'react';
import { useToast } from './use-toast';

interface UseVoiceRecognitionProps {
  continuous?: boolean;
  interimResults?: boolean;
  lang?: string;
  onResult?: (transcript: string) => void;
  onError?: (error: string) => void;
  commandList?: string[];
  autoStart?: boolean;
}

interface UseVoiceRecognitionReturn {
  transcript: string;
  isListening: boolean;
  startListening: () => void;
  stopListening: () => void;
  resetTranscript: () => void;
  hasRecognitionSupport: boolean;
  matchedCommand: string | null;
}

const useVoiceRecognition = ({
  continuous = false,
  interimResults = true,
  lang = 'en-US',
  onResult,
  onError,
  commandList = [],
  autoStart = false
}: UseVoiceRecognitionProps = {}): UseVoiceRecognitionReturn => {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);
  const [hasRecognitionSupport, setHasRecognitionSupport] = useState(false);
  const [matchedCommand, setMatchedCommand] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    try {
      // @ts-ignore - Browser API
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        setHasRecognitionSupport(true);
        const recognitionInstance = new SpeechRecognition();
        recognitionInstance.continuous = continuous;
        recognitionInstance.interimResults = interimResults;
        recognitionInstance.lang = lang;
        setRecognition(recognitionInstance);
      }
    } catch (error) {
      setHasRecognitionSupport(false);
      console.error('Speech recognition not supported', error);
      toast({
        title: "Voice Recognition Not Supported",
        description: "Your browser doesn't support speech recognition. Try using Chrome.",
        variant: "destructive"
      });
    }
  }, [continuous, interimResults, lang, toast]);

  useEffect(() => {
    if (autoStart && recognition && hasRecognitionSupport) {
      startListening();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recognition, hasRecognitionSupport, autoStart]);

  const handleRecognitionResult = useCallback((event: SpeechRecognitionEvent) => {
    let currentTranscript = '';
    for (let i = event.resultIndex; i < event.results.length; i++) {
      if (event.results[i].isFinal) {
        currentTranscript += event.results[i][0].transcript;
      }
    }
    
    if (currentTranscript) {
      setTranscript(currentTranscript);
      
      if (onResult) {
        onResult(currentTranscript);
      }
      
      // Check if transcript matches any command
      if (commandList.length > 0) {
        const lowerTranscript = currentTranscript.toLowerCase();
        const matchedCmd = commandList.find(cmd => 
          lowerTranscript.includes(cmd.toLowerCase())
        );
        setMatchedCommand(matchedCmd || null);
      }
    }
  }, [onResult, commandList]);

  const handleRecognitionError = useCallback((event: SpeechRecognitionErrorEvent) => {
    console.error('Speech recognition error', event.error);
    
    if (onError) {
      onError(event.error);
    }
    
    toast({
      title: "Voice Recognition Error",
      description: `Error: ${event.error}. Please try again.`,
      variant: "destructive"
    });
    
    setIsListening(false);
  }, [onError, toast]);

  const startListening = useCallback(() => {
    if (recognition && hasRecognitionSupport) {
      try {
        recognition.start();
        setIsListening(true);
        setTranscript('');
        setMatchedCommand(null);
        
        recognition.onresult = handleRecognitionResult;
        recognition.onerror = handleRecognitionError;
        recognition.onend = () => {
          // Only set to not listening if we're not in continuous mode
          if (!continuous) {
            setIsListening(false);
          } else {
            // If in continuous mode and it somehow ends, restart it
            try {
              recognition.start();
            } catch (e) {
              // Ignore the error, as it's likely because recognition is already started
            }
          }
        };
      } catch (error) {
        console.error('Error starting speech recognition', error);
      }
    }
  }, [recognition, hasRecognitionSupport, continuous, handleRecognitionResult, handleRecognitionError]);

  const stopListening = useCallback(() => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  }, [recognition]);

  const resetTranscript = useCallback(() => {
    setTranscript('');
    setMatchedCommand(null);
  }, []);

  return {
    transcript,
    isListening,
    startListening,
    stopListening,
    resetTranscript,
    hasRecognitionSupport,
    matchedCommand
  };
};

export default useVoiceRecognition;
