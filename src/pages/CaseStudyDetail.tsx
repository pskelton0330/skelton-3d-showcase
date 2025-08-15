import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { getCaseStudyBySlug, caseStudies } from "@/data/caseStudies";
import { Card, CardContent } from "@/components/ui/card";

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = slug ? getCaseStudyBySlug(slug) : null;

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-muted-foreground mb-8">The case study you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/case-studies">
              <ArrowLeft size={20} className="mr-2" />
              Back to Case Studies
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  // Get next case study for navigation
  const currentIndex = caseStudies.findIndex(study => study.slug === slug);
  const nextStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : caseStudies[0];

  return (
    <div className="py-12">
      {/* Header */}
      <section className="py-8">
        <div className="section-container">
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/case-studies">
              <ArrowLeft size={20} className="mr-2" />
              Back to Case Studies
            </Link>
          </Button>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {caseStudy.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-hero mb-6">{caseStudy.title}</h1>
            
            <div className="flex items-center text-muted-foreground mb-8">
              <Calendar size={16} className="mr-2" />
              <time dateTime={caseStudy.datePublished}>
                {new Date(caseStudy.datePublished).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long', 
                  day: 'numeric'
                })}
              </time>
            </div>

            <Card className="bg-accent/10 border-accent/20 mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-accent">Impact</h2>
                <p className="text-lg">{caseStudy.impact}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {caseStudy.imageUrl && (
        <section className="py-8">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img 
                  src={caseStudy.imageUrl}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-8">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ 
                __html: caseStudy.content.replace(/\n/g, '<br />').replace(/### /g, '<h3>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/- /g, '<li>').replace(/<li>/g, '<ul><li>').replace(/<\/li>(?!\s*<li>)/g, '</li></ul>')
              }} />
            </article>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": caseStudy.title,
            "description": caseStudy.summary,
            "datePublished": caseStudy.datePublished,
            "author": {
              "@type": "Person",
              "name": "Patrick Skelton",
              "jobTitle": "Independent Mechanical & Additive Manufacturing Engineer"
            },
            "publisher": {
              "@type": "Organization", 
              "name": "3D Innovation & Design Concepts",
              "url": "https://3dinnovationdesign.com"
            }
          })
        }}
      />

      {/* Navigation to next case study */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold mb-2">Ready for another challenge?</h3>
                <p className="text-muted-foreground">Explore more innovative engineering solutions</p>
              </div>
              <Button asChild>
                <Link to={`/case-studies/${nextStudy.slug}`}>
                  Next Case Study
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="section-container text-center">
          <h2 className="text-section-title mb-4">Have a similar challenge?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Every engineering problem is unique, but proven methodologies and innovative thinking 
            can deliver exceptional results for your organization too.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link to="/contact">
              Let's Discuss Your Project
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;