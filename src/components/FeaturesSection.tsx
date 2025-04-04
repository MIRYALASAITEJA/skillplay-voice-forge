
import { Mic, BarChart, Target, BookOpen, Gamepad, Globe } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Voice Interaction",
    description: "Control games and exercises using just your voice, making learning hands-free and intuitive."
  },
  {
    icon: BarChart,
    title: "Progress Tracking",
    description: "Monitor your improvement with detailed analytics and personalized feedback on your performance."
  },
  {
    icon: Target,
    title: "Skill-Focused",
    description: "Content designed specifically for vocational training with real-world applications."
  },
  {
    icon: BookOpen,
    title: "Personalized Learning",
    description: "Adaptive pathways that adjust to your skill level and learning style for optimal results."
  },
  {
    icon: Gamepad,
    title: "Gamified Experience",
    description: "Earn badges, compete on leaderboards, and level up as you master new skills."
  },
  {
    icon: Globe,
    title: "Accessible Anywhere",
    description: "Cloud-based platform works on any device with a microphone and internet connection."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-skillplay-light-purple/30">
      <div className="container mx-auto px-4 md:px-0">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Learning Reimagined Through <span className="hero-text-gradient">Voice Technology</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform combines cutting-edge voice recognition with engaging game mechanics to create 
            an effective learning experience for vocational training.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-flex p-2 rounded-lg bg-skillplay-purple/10">
                <feature.icon className="h-6 w-6 text-skillplay-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
