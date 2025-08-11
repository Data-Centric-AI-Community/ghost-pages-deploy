import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import dataProfilingIcon from "@/assets/data-profiling-icon.png";
import syntheticDataIcon from "@/assets/synthetic-data-icon.png";
import dataLabelingIcon from "@/assets/data-labeling-icon.png";

const FeaturesSection = () => {
  const features = [
    {
      icon: dataProfilingIcon,
      title: "Data Profiling",
      description: "Understanding the existing data is the first step. Profile your data in a few lines of code.",
      linkText: "Explore your data with ydata-profiling!",
      href: "https://github.com/ydataai/ydata-profiling"
    },
    {
      icon: syntheticDataIcon,
      title: "Synthetic Data",
      description: "Synthetic data is artificially created data that keeps the original data properties, ensuring its business value while being privacy compliant.",
      linkText: "Expand your data with ydata-synthetic!",
      href: "https://github.com/ydataai/ydata-synthetic"
    },
    {
      icon: dataLabelingIcon,
      title: "Data Labeling",
      description: "Isn't it one of your biggest pain points in data quality? The DCAI Community cultivates meaningful discussions around this and other topics!",
      linkText: "Coming soon",
      href: "#"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            The Data-Centric AI Community is the place to discuss data quality for data science.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-feature-gradient border border-border rounded-xl p-8 h-full shadow-minimal hover:shadow-soft transition-smooth">
                <div className="text-center mb-6">
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-16 h-16 mx-auto mb-4 grayscale opacity-80 group-hover:opacity-100 transition-smooth"
                  />
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {feature.href !== "#" ? (
                  <Button 
                    variant="outline" 
                    className="w-full mt-6 group-hover:bg-primary/5 border-primary/20"
                    asChild
                  >
                    <a href={feature.href} target="_blank" rel="noopener noreferrer">
                      {feature.linkText}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                ) : (
                  <div className="w-full mt-6 py-2 text-center text-muted-foreground italic">
                    {feature.linkText}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;