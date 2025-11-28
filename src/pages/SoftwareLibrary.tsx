import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Check, Laptop } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { software, type Software } from "@/data/software";
import { useOGImage } from "@/hooks/use-og-image";

const SoftwareLibrary = () => {
  const categories = [...new Set(software.map(s => s.category))];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Software Library
              </h1>
              <p className="text-xl text-white/90">
                Free access to powerful tools designed to help your business thrive
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              <Button variant="outline" size="sm">All Tools</Button>
              {categories.map((category) => (
                <Button key={category} variant="outline" size="sm">
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Software List */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-8">
              {software.map((item, index) => (
                <SoftwareCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto shadow-soft bg-gradient-card border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">More Tools Coming Soon</CardTitle>
                <CardDescription className="text-base">
                  We're constantly adding new software tools to help you run your business more efficiently. 
                  Check back regularly for updates.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// Separate component for software card to use hook
const SoftwareCard = ({ item, index }: { item: Software; index: number }) => {
  const ogImage = useOGImage(item.url);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  // Prioritize imageUrl from data, then OG image, then placeholder
  const displayImage = item.imageUrl || ogImage;

  return (
    <Card 
      className="shadow-soft hover:shadow-elevated transition-all duration-300 overflow-hidden"
    >
      <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Image Section */}
        <div className="md:w-1/3 bg-muted/30 flex items-center justify-center p-8 min-h-[300px] relative">
          {displayImage && !imageError ? (
            <img 
              src={displayImage} 
              alt={item.title}
              className="w-full h-full object-cover rounded-lg"
              onError={() => {
                setImageError(true);
              }}
              onLoad={() => {
                setImageLoaded(true);
              }}
            />
          ) : null}
          {(!displayImage || imageError || !imageLoaded) && (
            <div className="flex flex-col items-center justify-center text-muted-foreground absolute inset-0">
              <Laptop className="h-16 w-16 mb-4 opacity-50" />
              <p className="text-sm">Screenshot coming soon</p>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary mb-3 inline-block">
                  {item.category}
                </span>
                <CardTitle className="text-2xl mb-3">{item.title}</CardTitle>
              </div>
            </div>
            
            <CardDescription className="text-base mb-6 leading-relaxed">
              {item.description}
            </CardDescription>

            {/* Features */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
              <ul className="space-y-2">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4 border-t border-border">
            <Button 
              size="lg" 
              className="w-full md:w-auto" 
              asChild
            >
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Access Tool
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SoftwareLibrary;

