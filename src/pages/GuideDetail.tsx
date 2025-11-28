import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, Tag, Calendar, User, ArrowRight, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TableOfContents from "@/components/guide/TableOfContents";
import ProgressIndicator from "@/components/guide/ProgressIndicator";
import { getGuideById, getRelatedGuides } from "@/data/guides";

const GuideDetail = () => {
  const { id } = useParams();
  const guide = id ? getGuideById(id) : undefined;
  const relatedGuides = id ? getRelatedGuides(id) : [];

  if (!guide) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow flex items-center justify-center py-20">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Guide Not Found</h1>
            <p className="text-muted-foreground">The guide you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/guides">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Guides
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const tocItems = guide.sections.map(section => ({
    id: section.id,
    title: section.title,
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <ProgressIndicator />
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Button variant="ghost" asChild className="mb-6 text-white/80 hover:text-white hover:bg-white/10">
                <Link to="/guides">
                  <ArrowLeft className="mr-2 h-4 w-4" strokeWidth={1.5} />
                  Back to Guides
                </Link>
              </Button>

              <div className="flex flex-wrap items-center gap-4 text-sm text-white/80 mb-6">
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4" strokeWidth={1.5} />
                  <span className="px-3 py-1 rounded-full bg-white/20 text-white font-medium">
                    {guide.category}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" strokeWidth={1.5} />
                  <span>{guide.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" strokeWidth={1.5} />
                  <span>{guide.lastUpdated}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" strokeWidth={1.5} />
                  <span>{guide.author}</span>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {guide.title}
              </h1>

              <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
                {guide.description}
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="py-8 bg-muted/30 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Key Takeaways
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {guide.keyTakeaways.map((takeaway, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-foreground">{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
                {/* Article Content */}
                <article className="guide-content">
                  <TableOfContents items={tocItems} className="lg:hidden" />
                  
                  {guide.sections.map((section, index) => (
                    <section
                      key={section.id}
                      id={section.id}
                      className={index > 0 ? "guide-section" : ""}
                    >
                      <h2 className="guide-h2">{section.title}</h2>
                      <div 
                        className="guide-body"
                        dangerouslySetInnerHTML={{ __html: section.content }}
                      />
                    </section>
                  ))}
                </article>

                {/* Sidebar TOC */}
                <aside className="hidden lg:block">
                  <TableOfContents items={tocItems} />
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        {relatedGuides.length > 0 && (
          <section className="py-12 md:py-16 bg-muted/30 border-t border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-8 text-foreground">Continue Learning</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedGuides.map((relatedGuide) => (
                    <Card key={relatedGuide.id} className="shadow-soft hover:shadow-elevated transition-all duration-300">
                      <CardHeader className="pb-3">
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary w-fit">
                          {relatedGuide.category}
                        </span>
                        <CardTitle className="text-lg leading-tight mt-2">
                          {relatedGuide.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {relatedGuide.description}
                        </p>
                        <Button variant="ghost" size="sm" asChild className="p-0 h-auto">
                          <Link to={`/guides/${relatedGuide.id}`} className="group text-primary">
                            Read Guide
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="bg-gradient-card border-primary/20 shadow-elevated">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl">Ready to see these techniques in action?</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    Our video training provides step-by-step demonstrations of AI tools and techniques for your business.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                      <Link to="/videos">Watch Training Videos</Link>
                    </Button>
                    <Button variant="outline" asChild size="lg">
                      <Link to="/guides">Browse More Guides</Link>
                    </Button>
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

export default GuideDetail;
