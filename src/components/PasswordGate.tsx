import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Set your password here - you can change this anytime
const SITE_PASSWORD = "AIHabits2024"; // Change this to your desired password

interface PasswordGateProps {
  children: React.ReactNode;
}

const PasswordGate = ({ children }: PasswordGateProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = localStorage.getItem("ai-habits-authenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === SITE_PASSWORD) {
      localStorage.setItem("ai-habits-authenticated", "true");
      setIsAuthenticated(true);
      toast({
        title: "Access granted",
        description: "Welcome to AI Habits!",
      });
    } else {
      toast({
        title: "Incorrect password",
        description: "Please try again.",
        variant: "destructive",
      });
      setPassword("");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("ai-habits-authenticated");
    setIsAuthenticated(false);
    setPassword("");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4">
        <Card className="w-full max-w-md shadow-elevated">
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
            </div>
            <div>
              <CardTitle className="text-2xl">AI Habits</CardTitle>
              <CardDescription className="text-base mt-2">
                This site is password protected
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Enter Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="pl-10"
                    autoFocus
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full" size="lg">
                Access Site
              </Button>
            </form>
            <p className="text-xs text-muted-foreground text-center mt-4">
              Contact the site administrator for access
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      {children}
      {/* Optional: Add a logout button in the footer or navigation */}
    </>
  );
};

export default PasswordGate;

