import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Stay updated on Discord
        </h2>
        <p className="text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
          Join the Data-Centric AI Community on Discord and be part of the conversation!
        </p>
        
        <Button 
          size="lg" 
          variant="secondary"
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4 text-lg shadow-soft"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Join Discord
        </Button>
      </div>
    </footer>
  );
};

export default Footer;