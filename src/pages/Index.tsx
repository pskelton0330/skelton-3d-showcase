import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CaseStudyCard from "@/components/CaseStudyCard";
import ServiceCard from "@/components/ServiceCard";
import { Cog, Wrench, Cpu, FileText, Lightbulb, ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import heroImage from "@/assets/hero-engineering.jpg";

const Index = () => {
  const services = [
    {
      title: "Reverse-engineering & CAD model creation",
      description: "Transform obsolete parts into precise digital models for rapid reproduction",
      benefits: [
        "Rapid, drop-in replacements for obsolete parts",
        "Precise dimensional accuracy with 3D scanning",
        "Parametric CAD models for easy modifications"
      ],
      Icon: Cog
    },
    {
      title: "DfAM redesign & weight optimisation", 
      description: "Optimize designs specifically for additive manufacturing processes",
      benefits: [
        "Lighter, stronger parts designed for 3D printing",
        "Enhanced structural features and material efficiency",
        "Ready-in-24h rapid prototyping capabilities"
      ],
      Icon: Wrench
    },
    {
      title: "Short-run FDM production (PLA → CF-Nylon)",
      description: "Professional-grade production runs using advanced materials",
      benefits: [
        "Bridge gap between prototype and mass production", 
        "High-strength carbon fiber nylon capabilities",
        "Cost-effective small batch manufacturing"
      ],
      Icon: Cpu
    },
    {
      title: "Technical documentation & SOP creation",
      description: "Comprehensive documentation for manufacturing and assembly processes",
      benefits: [
        "Detailed assembly and installation instructions",
        "Quality control procedures and specifications", 
        "Training materials for technical staff"
      ],
      Icon: FileText
    },
    {
      title: "Innovative solution consulting",
      description: "Practical, cost-cutting ideas rooted in two decades of maintenance experience",
      benefits: [
        "Field-tested engineering solutions that work",
        "Cost reduction strategies and optimization",
        "Expert consultation on legacy equipment challenges"
      ],
      Icon: Lightbulb
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background to-muted py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={heroImage} 
            alt="3D Engineering Design" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="section-container relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-hero mb-6">
              <span className="gradient-text">3D Innovation</span> & Design Concepts
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              I save organizations time and money by redesigning obsolete parts, slashing lead times,
              and delivering custom solutions that don't exist on the open market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-cta">
                <Link to="/contact">
                  Request a Quote
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-4">Expert Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive 3D design and additive manufacturing solutions backed by 20+ years of field experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                benefits={service.benefits}
                Icon={service.Icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-muted">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-4">Featured Case Studies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world solutions delivering measurable impact and substantial cost savings
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} caseStudy={study} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/case-studies">
                View All Case Studies
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="section-container text-center">
          <h2 className="text-section-title mb-4">Ready to Solve Your Engineering Challenge?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Whether you're dealing with obsolete parts, need custom solutions, or want to optimize existing designs,
            I'm here to help you save time and money with proven engineering expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">
                Get Started Today
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;