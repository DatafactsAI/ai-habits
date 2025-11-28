import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, BookOpen, Bot, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  const features = [
    {
      icon: Video,
      title: "Video Training",
      description: "20-minute foundational course plus monthly updates with practical demonstrations across AI platforms.",
    },
    {
      icon: BookOpen,
      title: "Practical Guides",
      description: "Written resources and step-by-step guides to implement AI solutions in your business.",
    },
    {
      icon: Bot,
      title: "AI Agent Support",
      description: "Get quick answers to your AI questions with our intelligent assistant (coming soon).",
    },
  ];

  const benefits = [
    "Learn to streamline repetitive work",
    "Improve productivity across your team",
    "Access real-world case studies",
    "Monthly content updates",
    "Practical, actionable training",
    "Designed for SME owners",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroBanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Practical AI Training for Small and Medium Businesses
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Learn how to use AI tools to streamline work, improve productivity, and create value in your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="shadow-glow">
                <Link to="/videos">Start Learning</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link to="/guides">View Guides</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">What's Included</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to start implementing AI in your business today
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="group relative overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-xl tracking-tight">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Start with the Foundations
              </h2>
              <p className="text-lg text-muted-foreground">
                Our initial course is delivered through a comprehensive 20-minute Loom video that covers the essentials of AI for business.
              </p>
              <p className="text-lg text-muted-foreground">
                After that, you'll receive ongoing monthly updates with new techniques, platform demonstrations, and practical examples you can implement immediately.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="shadow-elevated bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Membership Pricing</CardTitle>
                <CardDescription>Simple, transparent pricing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center py-6">
                  <div className="text-5xl font-bold text-primary mb-2">
                    $20 AUD
                  </div>
                  <div className="text-muted-foreground">per month</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" strokeWidth={1.5} />
                    <span className="text-sm">Full access to video training</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" strokeWidth={1.5} />
                    <span className="text-sm">Complete guide library</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" strokeWidth={1.5} />
                    <span className="text-sm">Monthly content updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" strokeWidth={1.5} />
                    <span className="text-sm">AI agent support (coming soon)</span>
                  </li>
                </ul>
                <Button className="w-full" size="lg" asChild>
                  <Link to="/videos">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
