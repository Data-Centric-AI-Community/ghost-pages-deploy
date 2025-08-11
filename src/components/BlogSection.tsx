import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Introducing the Data-Centric AI Community",
      description: "A place to discuss data quality for data science.",
      href: "https://venturebeat.com/2022/02/22/ydata-launches-data-centric-ai-community-for-data-scientists/"
    },
    {
      title: "From model-centric to data-centric",
      description: "A new paradigm for AI development — focused on data quality.",
      href: "https://towardsdatascience.com/from-model-centric-to-data-centric-4beb8ef50475"
    },
    {
      title: "Pandas Profiling for Quicker Data Understanding",
      description: "Read your data? Pause. Generate the Pandas Profiling report first.",
      href: "https://towardsdatascience.com/pandas-profiling-for-quicker-data-understanding-83bb9fc6719f"
    },
    {
      title: "Synthetic Time-Series Data: A GAN approach",
      description: "Generate synthetic sequential data with TimeGAN.",
      href: "https://towardsdatascience.com/synthetic-time-series-data-a-gan-approach-869a984f2239"
    },
    {
      title: "How to Validate the Quality of Your Synthetic Data",
      description: "A tutorial on how you can combine ydata-synthetic with great expectations.",
      href: "https://towardsdatascience.com/how-to-validate-the-quality-of-your-synthetic-data-34503eba6da"
    },
    {
      title: "Versioning and Labeling — Better Together",
      description: "Data labeling and data versioning provide a rock solid bedrock to build your machine learning models on now and in the future.",
      href: "https://towardsdatascience.com/versioning-and-labeling-better-together-2dd7d4fe8bd9"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Want to learn more?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <div key={index} className="group">
              <div className="bg-card border border-border rounded-xl p-6 h-full shadow-minimal hover:shadow-soft transition-smooth">
                <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-smooth">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {post.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-primary hover:text-primary/80 font-medium"
                  asChild
                >
                  <a href={post.href} target="_blank" rel="noopener noreferrer">
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;