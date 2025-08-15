import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "react-router-dom";
import { Cog, Wrench, Cpu, FileText, Lightbulb, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Reverse-engineering & CAD model creation",
      description: "Transform obsolete parts into precise digital models for rapid reproduction using advanced 3D scanning and measurement techniques.",
      benefits: [
        "Rapid, drop-in replacements for obsolete parts",
        "Precise dimensional accuracy with 3D scanning technology",
        "Parametric CAD models for easy modifications and optimization"
      ],
      Icon: Cog
    },
    {
      title: "DfAM redesign & weight optimisation", 
      description: "Optimize designs specifically for additive manufacturing processes, enhancing performance while reducing material usage and weight.",
      benefits: [
        "Lighter, stronger parts designed specifically for 3D printing",
        "Enhanced structural features and improved material efficiency",
        "Ready-in-24h rapid prototyping capabilities for quick validation"
      ],
      Icon: Wrench
    },
    {
      title: "Short-run FDM production (PLA → CF-Nylon)",
      description: "Professional-grade production runs using advanced materials from basic PLA to high-strength carbon fiber reinforced nylon.",
      benefits: [
        "Bridge gap between prototype and mass production efficiently", 
        "High-strength carbon fiber nylon capabilities for demanding applications",
        "Cost-effective small batch manufacturing with quick turnaround"
      ],
      Icon: Cpu
    },
    {
      title: "Technical documentation & SOP creation",
      description: "Comprehensive documentation packages for manufacturing, assembly, and quality control processes to ensure consistent results.",
      benefits: [
        "Detailed assembly and installation instructions with visual guides",
        "Quality control procedures and material specifications", 
        "Training materials and SOPs for technical staff and operators"
      ],
      Icon: FileText
    },
    {
      title: "Innovative solution consulting",
      description: "Practical, cost-cutting engineering solutions rooted in two decades of hands-on maintenance and troubleshooting experience.",
      benefits: [
        "Field-tested engineering solutions that actually work in real conditions",
        "Strategic cost reduction approaches and process optimization",
        "Expert consultation on legacy equipment challenges and modernization"
      ],
      Icon: Lightbulb
    }
  ];

  return (
    <div className="py-12">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-background to-muted">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-hero mb-6">Expert Services</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive 3D design and additive manufacturing solutions backed by 20+ years of field experience in maintaining and upgrading critical systems.
            </p>
            <Button asChild size="lg" className="btn-cta">
              <Link to="/contact">
                Request Service Quote
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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

      {/* Process Section */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section-title text-center mb-12">My Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Assessment</h3>
                <p className="text-sm text-muted-foreground">
                  Initial consultation to understand your specific challenge and determine if 3D printing is the optimal solution.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Design</h3>
                <p className="text-sm text-muted-foreground">
                  Reverse-engineer or create new designs optimized for additive manufacturing and your specific requirements.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Prototype</h3>
                <p className="text-sm text-muted-foreground">
                  Rapid prototyping within 24-48 hours to validate fit, form, and function before final production.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Deliver</h3>
                <p className="text-sm text-muted-foreground">
                  Final parts with complete documentation, enabling you to reproduce or modify the solution as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Capabilities */}
      <section className="py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section-title text-center mb-12">Materials & Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Available Materials</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>PLA:</strong> Rapid prototyping and non-structural applications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>ASA:</strong> UV-resistant outdoor applications and chemical resistance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>PETG:</strong> Chemical resistance and transparency requirements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Carbon Fiber Nylon:</strong> High-strength structural applications</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Technical Capabilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Layer resolution: 0.1mm to 0.3mm</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Build volume: Up to 300mm x 300mm x 400mm</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Precision dimensional accuracy: ±0.1mm</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Complex geometries and internal structures</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="section-container text-center">
          <h2 className="text-section-title mb-4">Ready to start your project?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Whether you need rapid prototyping, obsolete part replacement, or innovative design solutions, 
            I'm here to help you achieve your goals efficiently and cost-effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">
                Get Started Today
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;