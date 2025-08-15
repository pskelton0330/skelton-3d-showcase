import { Button } from "@/components/ui/button";
import CaseStudyCard from "@/components/CaseStudyCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

const CaseStudies = () => {
  return (
    <div className="py-12">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-background to-muted">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-hero mb-6">Case Studies</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Real-world engineering solutions delivering measurable impact and substantial cost savings. 
              Each case study demonstrates practical applications of 3D design and additive manufacturing in solving critical business challenges.
            </p>
            <Button asChild size="lg" className="btn-cta">
              <Link to="/contact">
                Discuss Your Challenge
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} caseStudy={study} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-section-title mb-8">Combined Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">$900K+</div>
                <p className="text-muted-foreground">Total Cost Savings</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">264</div>
                <p className="text-muted-foreground">Custom Parts Produced</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <p className="text-muted-foreground">Cost Reduction Achieved</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground mt-8">
              These results represent real projects with documented outcomes, 
              demonstrating the tangible value of innovative 3D design solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section-title text-center mb-12">Industries Served</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4">
                <div className="text-lg font-semibold mb-2">HVAC</div>
                <p className="text-sm text-muted-foreground">Legacy equipment support</p>
              </div>
              <div className="p-4">
                <div className="text-lg font-semibold mb-2">Facilities</div>
                <p className="text-sm text-muted-foreground">Maintenance solutions</p>
              </div>
              <div className="p-4">
                <div className="text-lg font-semibold mb-2">Infrastructure</div>
                <p className="text-sm text-muted-foreground">Retrofit projects</p>
              </div>
              <div className="p-4">
                <div className="text-lg font-semibold mb-2">Manufacturing</div>
                <p className="text-sm text-muted-foreground">Critical machinery support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="section-container text-center">
          <h2 className="text-section-title mb-4">Have a similar challenge?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Every engineering challenge is unique, but the principles of innovative problem-solving remain constant. 
            Let's discuss how I can help solve your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">
                Start a Conversation
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;