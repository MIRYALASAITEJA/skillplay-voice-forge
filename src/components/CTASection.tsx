
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-skillplay-purple/90 to-skillplay-blue/90 p-8 md:p-12">
          {/* Background decorative elements */}
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/10 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Skills Training?
              </h2>
              <p className="text-white/80 max-w-xl">
                Join thousands of learners mastering vocational skills through voice-controlled interactive exercises.
                Get started today and experience the future of learning.
              </p>
              
              {/* Social proof */}
              <div className="mt-6 flex flex-wrap items-center gap-3 justify-center md:justify-start">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-10 w-10 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-xs text-white font-medium">
                      {['JD', 'KL', 'RM', 'TS'][i]}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-white">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-white" />
                    ))}
                  </div>
                  <span className="text-sm">
                    <span className="font-bold">4.9</span>/5 from over 2,000 users
                  </span>
                </div>
              </div>
            </div>
            
            <div>
              <Button size="lg" className="gap-2 bg-white text-skillplay-purple hover:bg-white/90">
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
