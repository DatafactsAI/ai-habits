import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Guides = () => {
  const guides = [
    {
      id: "streamline-work",
      title: "How to Streamline Repetitive Work Using AI",
      description: "Discover practical techniques to automate routine tasks and free up valuable time for strategic work.",
      category: "Productivity",
      readTime: "8 min read",
    },
    {
      id: "customer-communications",
      title: "AI Tools for Customer Communications",
      description: "Learn how to use AI to enhance customer service, create better responses, and maintain quality at scale.",
      category: "Customer Service",
      readTime: "6 min read",
    },
    {
      id: "safety-accuracy",
      title: "Safety and Accuracy When Using AI in Business",
      description: "Essential guidelines for implementing AI responsibly, avoiding common pitfalls, and ensuring reliable outputs.",
      category: "Best Practices",
      readTime: "10 min read",
    },
    {
      id: "ten-ways-automate",
      title: "Ten Ways SME Owners Can Automate Daily Tasks",
      description: "A comprehensive guide to the most impactful automation opportunities for small and medium business owners.",
      category: "Automation",
      readTime: "12 min read",
    },
    {
      id: "content-creation",
      title: "AI-Powered Content Creation for Marketing",
      description: "Master the art of using AI to generate engaging marketing content while maintaining your brand voice.",
      category: "Marketing",
      readTime: "9 min read",
    },
    {
      id: "data-analysis",
      title: "Using AI for Business Data Analysis",
      description: "Transform your business data into actionable insights using AI-powered analysis tools and techniques.",
      category: "Analytics",
      readTime: "11 min read",
    },
    {
      id: "email-automation",
      title: "Smart Email Management with AI",
      description: "Learn how to use AI to prioritize emails, draft responses, and manage your inbox more efficiently.",
      category: "Productivity",
      readTime: "7 min read",
    },
    {
      id: "team-collaboration",
      title: "Enhancing Team Collaboration with AI Tools",
      description: "Discover how AI can improve team communication, project management, and collaborative workflows.",
      category: "Team Management",
      readTime: "8 min read",
    },
  ];

  const categories = [...new Set(guides.map(g => g.category))];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Practical AI Guides
              </h1>
              <p className="text-xl text-white/90">
                Step-by-step resources to implement AI solutions in your business
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              <Button variant="outline" size="sm">All Guides</Button>
              {categories.map((category) => (
                <Button key={category} variant="outline" size="sm">
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {guides.map((guide) => (
                <Card key={guide.id} className="shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center flex-shrink-0">
                        <FileText className="h-6 w-6 text-white" strokeWidth={1.5} />
                      </div>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                        {guide.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{guide.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {guide.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{guide.readTime}</span>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/guides/${guide.id}`} className="group">
                          Read Guide
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto shadow-soft bg-gradient-card border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Can't Find What You Need?</CardTitle>
                <CardDescription className="text-base">
                  New guides are added regularly. Have a specific topic you'd like us to cover? 
                  Let us know and we'll prioritize it in our upcoming content.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button size="lg">Request a Guide Topic</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Guides;
