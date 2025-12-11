import { Sparkles, Mail, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="font-bold text-foreground">AI Habits</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Building AI-augmented professionals through proven transformation frameworks.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/videos" className="text-sm text-muted-foreground hover:text-primary transition-colors">Practice Sessions</Link></li>
              <li><Link to="/guides" className="text-sm text-muted-foreground hover:text-primary transition-colors">Practice Modules</Link></li>
              <li><Link to="/ai-agent" className="text-sm text-muted-foreground hover:text-primary transition-colors">AI Assistant</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Email: info@aihabits.com</li>
              <li className="text-sm text-muted-foreground">Phone: +61 (placeholder)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © 2024 AI Habits. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
