import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              Prayagraj Tourism
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Discover the spiritual and cultural heritage of Prayagraj, one of India's
              most sacred cities. Experience the confluence of history, faith, and tradition.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Tourism Office, Civil Lines<br />
                  Prayagraj, Uttar Pradesh
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+91 532 2460930</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@prayagraj-tourism.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Prayagraj Tourism. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
