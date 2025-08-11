import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DefinitionSection from "@/components/DefinitionSection";
import FeaturesSection from "@/components/FeaturesSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <DefinitionSection />
      <FeaturesSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
