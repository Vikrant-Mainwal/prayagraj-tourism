import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import FooterImg from '../assets/footer.png';

const Footer = () => {
  return (
    <footer className="bg-card bg-amber-900">
      <div>
        <img src={FooterImg.src} alt="" className="w-full"/>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="text-center md:text-start">
            <h5 className="text-xl font-bold text-primary mb-4 text-white">
              Prayagraj Tourism
            </h5>
            <p className="text-muted-foreground text-sm leading-relaxed text-white px-5 md:px-0">
              Discover the spiritual and cultural heritage of Prayagraj, one of
              India's most sacred cities. Experience the confluence of history,
              faith, and tradition.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-start">
            <h5 className="text-lg font-semibold text-foreground mb-4 text-white">
              Contact Us
            </h5>
            <div className="space-y-3 text-white flex flex-col items-center md:items-start">
              <div className="space-y-3">
                <div className="flex items-start space-x-3 text-sm">
                  <MapPin className="h-5 w-5 text-primary shrink-0 text-[#bd6628e6] mt-0.5" />
                  <span className="text-muted-foreground">
                    Tourism Office, Civil Lines
                    <br />
                    Prayagraj, Uttar Pradesh
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="h-5 w-5 text-primary shrink-0 text-[#bd6628e6]" />
                  <span className="text-muted-foreground">+91 532 2460930</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-5 w-5 text-primary shrink-0 text-[#bd6628e6]" />
                  <span className="text-muted-foreground">
                    info@prayagraj-tourism.in
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div className="text-white text-center md:text-start">
            <h5 className="text-lg font-semibold text-foreground mb-4">
              Connect With Us
            </h5>
            <div className="flex space-x-4 mb-6 justify-center md:justify-start">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-[#bd6628e6]" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-[#bd6628e6]" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-[#bd6628e6]" />
              </a>
            </div>

            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Prayagraj Tourism. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
