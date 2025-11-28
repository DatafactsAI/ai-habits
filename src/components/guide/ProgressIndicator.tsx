import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ProgressIndicatorProps {
  className?: string;
}

const ProgressIndicator = ({ className }: ProgressIndicatorProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const percentage = Math.min((scrolled / documentHeight) * 100, 100);
      setProgress(percentage);
    };

    window.addEventListener("scroll", calculateProgress, { passive: true });
    calculateProgress();

    return () => {
      window.removeEventListener("scroll", calculateProgress);
    };
  }, []);

  return (
    <div className={cn("fixed top-0 left-0 right-0 z-50 h-1 bg-muted", className)}>
      <div
        className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressIndicator;






