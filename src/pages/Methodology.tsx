import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Sparkles, TrendingUp, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Methodology = () => {
  const principles = [
    {
      title: "Small Changes, Compound Growth",
      source: "Inspired by Atomic Habits",
      description: "We believe in building AI augmentation capabilities through incremental, sustainable practices that compound over time.",
    },
    {
      title: "Effectiveness Frameworks",
      source: "Inspired by 7 Habits of Highly Effective People",
      description: "We apply proven effectiveness principles to AI-augmented professional development, creating structured frameworks for capability building.",
    },
    {
      title: "AI-Human Collaboration",
      source: "Latest Research",
      description: "We integrate the latest research in AI-human collaboration, focusing on augmentation rather than replacement.",
    },
    {
      title: "Performance Optimization",
      source: "Real-World Application",
      description: "We emphasize measurable professional capability improvement through practical AI integration practices.",
    },
  ];

  const differentiators = [
    "Domain-specific: Focused on AI augmentation, not generic productivity",
    "Tool-integrated: Connects practices directly to AI tools and workflows",
    "Performance-oriented: Measurable professional capability improvement",
    "Modern application: Adapts timeless principles for the AI era",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Our Methodology
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Building on proven foundations, adapted for AI-augmented professional transformation
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-elevated border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Approach</CardTitle>
                  <CardDescription className="text-base">
                    We believe in building on proven foundations while creating something uniquely valuable for the AI era.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    AI Habits synthesizes proven transformation frameworks with the latest AI augmentation research and practices. 
                    We don't copy—we adapt, combine, and innovate to create a comprehensive system for building AI-augmented professional capabilities.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our methodology acknowledges the wisdom of established frameworks while focusing specifically on how professionals 
                    can integrate AI tools to amplify their capabilities, improve performance, and achieve professional excellence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Our Foundational Principles
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We build on proven frameworks while creating our unique approach to AI augmentation
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {principles.map((principle, index) => (
                  <Card key={index} className="shadow-soft hover:shadow-elevated transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center flex-shrink-0">
                          <Sparkles className="h-6 w-6 text-white" strokeWidth={1.5} />
                        </div>
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                          {principle.source}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{principle.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {principle.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Unique */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-elevated bg-gradient-card border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">What Makes AI Habits Unique</CardTitle>
                  <CardDescription className="text-base">
                    While we build on proven foundations, our focus and approach are distinctly our own
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {differentiators.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" strokeWidth={2} />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Acknowledgment */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl">Acknowledgment of Influences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    We acknowledge and respect the foundational work of:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <span>
                        <strong className="text-foreground">Atomic Habits</strong> by James Clear, which demonstrates the power of small, 
                        incremental changes that compound over time. We apply this principle to building AI augmentation capabilities.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <span>
                        <strong className="text-foreground">The 7 Habits of Highly Effective People</strong> by Stephen R. Covey, which 
                        provides timeless frameworks for personal and professional effectiveness. We adapt these principles for 
                        AI-augmented professional development.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-semibold">•</span>
                      <span>
                        The latest research in <strong className="text-foreground">AI-human collaboration</strong> and professional 
                        performance optimization, which informs our practical, tool-integrated approach.
                      </span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed pt-4">
                    AI Habits is not affiliated with, endorsed by, or associated with the authors or publishers of these works. 
                    We simply acknowledge their valuable contributions to the field of personal and professional development, and 
                    adapt their principles for the specific domain of AI-augmented professional transformation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="bg-gradient-card border-primary/20 shadow-elevated">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Ready to Begin Your Transformation?</CardTitle>
                  <CardDescription className="text-base">
                    Start building your AI-augmented professional capabilities today
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/videos" className="inline-block">
                      <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
                        Start Your Journey
                      </button>
                    </a>
                    <a href="/guides" className="inline-block">
                      <button className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors">
                        Explore Modules
                      </button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Methodology;


