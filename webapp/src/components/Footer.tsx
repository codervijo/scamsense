import { Link } from "react-router-dom";
import { Shield, Lock, Cpu } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <span className="text-lg font-bold text-gradient">ScamSense</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered scam detection to keep you safe from phishing and fraud.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/analyzer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Analyzer
              </Link>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Built With</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="h-4 w-4 text-primary" />
                <span>Privacy-First</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Cpu className="h-4 w-4 text-secondary" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                <span>No Storage by Default</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} ScamSense. All rights reserved.
          </p>
          <a
            href="mailto:privacy@scamsense.ai"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            privacy@scamsense.ai
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
