import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Blocks } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Videos", path: "/videos" },
    { name: "Guides", path: "/guides" },
    { name: "Software Library", path: "/software" },
    { name: "AI Agent", path: "/ai-agent" },
    { name: "Voice Agent", path: "/voice-agent" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <Blocks className="h-8 w-8 text-primary" strokeWidth={1.5} />
          <span className="text-xl font-bold text-foreground">AI Business Essentials</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button size="sm" className="ml-4" asChild>
            <Link to="/videos">Start Learning</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
