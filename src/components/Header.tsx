import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo-icon.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-nav-gradient backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={logoIcon} alt="Data-Centric AI" className="w-8 h-8" />
            <span className="text-xl font-bold text-foreground">
              Data-Centric AI Community
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Button variant="ghost" className="text-foreground hover:text-primary transition-smooth">
              Discord
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary transition-smooth">
              Github
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary transition-smooth">
              Learn More
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;