import { Button } from "@/components/ui/button";
import { Github, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Floating geometric elements with blue tints */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-12 h-12 border-2 border-primary/20 rotate-45 animate-float"></div>
        <div className="absolute top-40 right-20 w-8 h-8 border-2 border-blue-500/25 rotate-12 animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border-2 border-blue-400/15 rotate-45 animate-pulse-subtle"></div>
        <div className="absolute top-1/2 right-1/3 w-6 h-6 border-2 border-indigo-500/30 rotate-90 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-10 h-10 border-2 border-sky-500/20 rotate-12 animate-float-delayed"></div>
      </div>
      
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Welcome to
            <br />
            the <span className="text-primary">Data-Centric AI</span> Community
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Are you intrigued by the possibilities of Data-Centric AI, and you want more?
            <br />
            Join like-minded experts, thought-leaders and peers at the Data-Centric Community!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Join us on Discord
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 text-primary px-8 py-4 text-lg">
              <Github className="w-5 h-5 mr-2" />
              Join us on Github
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;