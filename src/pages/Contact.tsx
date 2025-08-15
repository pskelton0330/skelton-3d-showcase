import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectSummary: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // For now, use mailto as fallback
      const subject = `Project Inquiry from ${formData.name}`;
      const body = `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}

Project Summary:
${formData.projectSummary}`;

      const mailtoLink = `mailto:pskelton0330@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;

      toast({
        title: "Opening email client...",
        description: "Your default email client should open with the message pre-filled.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        projectSummary: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue sending your message. Please try calling or emailing directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-background to-muted">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-hero mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to solve your engineering challenge? Let's discuss how innovative 3D design solutions 
              can save your organization time and money.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="text-card-title">Project Inquiry</CardTitle>
                  <CardDescription>
                    Tell me about your challenge and I'll get back to you within 24 hours with initial thoughts and next steps.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="projectSummary">Project Summary *</Label>
                      <Textarea
                        id="projectSummary"
                        name="projectSummary"
                        value={formData.projectSummary}
                        onChange={handleInputChange}
                        required
                        placeholder="Describe your engineering challenge, obsolete part issues, or custom solution needs. Include any relevant details about timeline, budget constraints, or technical requirements."
                        rows={6}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-cta"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send size={16} className="ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="text-card-title">Direct Contact</CardTitle>
                  <CardDescription>
                    Prefer to call or email directly? I'm always happy to discuss your project over the phone.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail size={20} className="text-primary" />
                    <div>
                      <p className="font-medium">Primary Email</p>
                      <a 
                        href="mailto:pskelton0330@gmail.com" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        pskelton0330@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail size={20} className="text-primary" />
                    <div>
                      <p className="font-medium">Alternative Email</p>
                      <a 
                        href="mailto:pskelton_330@msn.com" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        pskelton_330@msn.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone size={20} className="text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a 
                        href="tel:703-401-7461" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        703-401-7461
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Linkedin size={20} className="text-primary" />
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/patskelton" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        /in/patskelton
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin size={20} className="text-primary" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Northern Virginia</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="text-card-title">What to Expect</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        <strong>Quick Response:</strong> I typically respond within 24 hours with initial thoughts
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        <strong>No-Pressure Consultation:</strong> Free discussion to assess if 3D printing is right for your needs
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        <strong>Rapid Prototyping:</strong> Initial prototypes typically delivered within 24-48 hours
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        <strong>Complete Documentation:</strong> CAD files and technical specifications included
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;