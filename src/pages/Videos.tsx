import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlayCircle, Clock, BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Videos = () => {
  const modules = [
    {
      number: 1,
      title: "Understanding Modern AI Models",
      duration: "5 min",
      description: "Learn about GPT, Claude, and other leading AI platforms and their business applications.",
    },
    {
      number: 2,
      title: "Using AI to Solve Daily Tasks",
      duration: "6 min",
      description: "Practical demonstrations of how AI can automate common business workflows.",
    },
    {
      number: 3,
      title: "Productivity Workflows",
      duration: "5 min",
      description: "Build efficient AI-powered systems for content creation, communication, and analysis.",
    },
    {
      number: 4,
      title: "Real Case Studies",
      duration: "4 min",
      description: "See how SMEs are successfully implementing AI to grow their businesses.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Introductory Course: The Foundations of AI for Business
              </h1>
              <p className="text-xl text-white/90">
                Start your AI journey with this comprehensive 20-minute training
              </p>
            </div>
          </div>
        </section>

        {/* Video Player Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-elevated">
                <CardContent className="p-0">
                  {/* Loom Video Embed */}
                  <div className="aspect-video rounded-t-lg overflow-hidden">
                    <iframe
                      src="https://www.loom.com/embed/da25eefce67e49d69b06c7252dea62a0"
                      frameBorder="0"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="p-6 space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">
                      AI Business Essentials - Foundation Course
                    </h2>
                    <p className="text-muted-foreground">
                      This introductory course will give you a solid understanding of how AI can 
                      transform your business operations. We'll cover the key platforms, practical 
                      use cases, and safety considerations to help you get started with confidence.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>20 minutes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        <span>4 modules</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4 text-foreground">Course Modules</h2>
                <p className="text-muted-foreground">
                  What you'll learn in this comprehensive training
                </p>
              </div>

              <div className="grid gap-6">
                {modules.map((module) => (
                  <Card key={module.number} className="shadow-soft hover:shadow-elevated transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-grow">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                              {module.number}
                            </div>
                            <CardTitle className="text-xl">{module.title}</CardTitle>
                          </div>
                          <CardDescription className="text-base">
                            {module.description}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                          <Clock className="h-4 w-4" />
                          {module.duration}
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Card className="shadow-soft bg-gradient-card border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">More Content Coming Soon</CardTitle>
                  <CardDescription className="text-base">
                    New modules are added monthly with the latest AI tools, techniques, and business strategies.
                    Stay tuned for advanced topics including automation workflows, AI for marketing, and team collaboration.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Videos;
