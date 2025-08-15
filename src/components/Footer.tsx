import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">3D Innovation & Design Concepts</h3>
            <p className="text-muted-foreground mb-4">
              Saving organizations time and money through innovative 3D design and additive manufacturing solutions.
            </p>
            <p className="text-sm text-muted-foreground">
              Northern Virginia
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-muted-foreground hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a 
                href="mailto:pskelton0330@gmail.com" 
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={16} className="mr-2" />
                pskelton0330@gmail.com
              </a>
              <a 
                href="tel:703-401-7461" 
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={16} className="mr-2" />
                703-401-7461
              </a>
              <a 
                href="https://www.linkedin.com/in/patskelton" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={16} className="mr-2" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} 3D Innovation & Design Concepts. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2 md:mt-0">
              Patrick Skelton - Independent Mechanical & Additive Manufacturing Engineer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;