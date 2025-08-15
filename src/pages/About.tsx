import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Award, Users, Clock, ArrowRight } from "lucide-react";

const About = () => {
  const credentials = [
    "B.S. Electronics & Communications Engineering Technology (Honors)",
    "OSHA 30-hr General-Industry Safety",
    "FTA Transit Safety & Security certifications",
    "Cleared to work on critical-infrastructure sites"
  ];

  const wins = [
    { amount: "$750K", description: "saved by redesigning legacy parts for in-house printing" },
    { amount: "$500K/yr", description: "RFID-bypass soap adapter cut consumable costs" },
    { amount: "98%", description: "cost reduction for HVAC valve coupler vs OEM" }
  ];

  return (
    <div className="py-12">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-background to-muted">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-hero mb-6">Patrick Skelton</h1>
            <p className="text-2xl text-muted-foreground mb-8">
              Independent Mechanical & Additive Manufacturing Engineer
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a 
                href="tel:703-401-7461" 
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={18} className="mr-2" />
                703-401-7461
              </a>
              <a 
                href="mailto:pskelton_330@msn.com" 
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={18} className="mr-2" />
                pskelton_330@msn.com
              </a>
              <a 
                href="https://www.linkedin.com/in/patskelton" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={18} className="mr-2" />
                LinkedIn Profile
              </a>
            </div>
            <p className="text-lg text-muted-foreground">Northern Virginia</p>
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section-title text-center mb-12">Why work with me?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-elevated text-center">
                <CardHeader>
                  <Clock size={48} className="mx-auto text-primary mb-4" />
                  <CardTitle className="text-card-title">20+ Years Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Maintaining, troubleshooting, and upgrading electro-mechanical systems—from semiconductor tools to airport train controls.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="card-elevated text-center">
                <CardHeader>
                  <Award size={48} className="mx-auto text-primary mb-4" />
                  <CardTitle className="text-card-title">8 Years 3D Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Hands-on with FDM 3-D printing, scan-to-CAD, and Fusion 360 design with proven results.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="card-elevated text-center">
                <CardHeader>
                  <Users size={48} className="mx-auto text-primary mb-4" />
                  <CardTitle className="text-card-title">Field-Tested Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    I've seen what works (and what always breaks). Field experience lets me engineer parts that survive real-world abuse.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Table */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section-title text-center mb-12">What I do</h2>
            <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-4 font-semibold">Capability</th>
                        <th className="text-left py-4 font-semibold">What you gain</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="py-4 font-medium">Reverse-engineering (3-D scan → parametric CAD)</td>
                        <td className="py-4 text-muted-foreground">Rapid, drop-in replacements for obsolete parts</td>
                      </tr>
                      <tr>
                        <td className="py-4 font-medium">DfAM redesign & prototyping</td>
                        <td className="py-4 text-muted-foreground">Lighter, stronger, ready-in-24 h parts</td>
                      </tr>
                      <tr>
                        <td className="py-4 font-medium">Short-run FDM production (PLA → CF-Nylon)</td>
                        <td className="py-4 text-muted-foreground">Bridge the gap between prototype & mass production</td>
                      </tr>
                      <tr>
                        <td className="py-4 font-medium">Innovative solution consulting</td>
                        <td className="py-4 text-muted-foreground">Practical, cost-cutting ideas rooted in two decades of maintenance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Selected Wins */}
      <section className="py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section-title text-center mb-12">Selected wins</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {wins.map((win, index) => (
                <Card key={index} className="card-elevated text-center">
                  <CardHeader>
                    <div className="text-4xl font-bold text-accent mb-2">{win.amount}</div>
                    <CardDescription className="text-base">{win.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section-title text-center mb-12">Credentials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{credential}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-section-title text-center mb-12">How I work</h2>
            <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    <strong>Consultative approach:</strong> Most projects start with a brief conversation about your specific challenge. I assess whether 3D printing/additive manufacturing is the right fit, or if there's a simpler off-the-shelf solution.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Rapid prototyping:</strong> For engineering challenges that benefit from custom solutions, I typically deliver initial prototypes within 24-48 hours to validate fit, form, and function before final production.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Complete documentation:</strong> Every project includes comprehensive technical documentation, assembly procedures, and material specifications to ensure repeatability and quality control.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Future-proof solutions:</strong> I provide CAD files and detailed manufacturing instructions so you can produce additional parts in-house or with local suppliers as needed.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="section-container text-center">
          <h2 className="text-section-title mb-4">Ready to get started?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss your engineering challenge and explore how innovative 3D design solutions can save your organization time and money.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link to="/contact">
              Contact Me Today
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;