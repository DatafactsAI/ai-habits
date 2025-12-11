import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlayCircle, Clock, BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Videos = () => {
  const [activeVideo, setActiveVideo] = useState<string>("https://www.loom.com/embed/3f15896a09db4852bdddca00f2557d23");

  const videos = [
    {
      id: "capability-gap",
      number: 1,
      title: "The Capability Gap: From Occasional Use to AI-Augmented Professional",
      loomId: "3f15896a09db4852bdddca00f2557d23",
      description: "Explore the concept of the capability gap we face with AI tools, highlighting how many of us pay for software we don't use. Learn how while these tools can save us significant time, the missing ingredient is habit. Drawing on principles from behavioral change, discover how to integrate AI into your daily workflow effectively and make AI tools more accessible by placing them front and center on your devices.",
    },
    {
      id: "habit-stacking",
      number: 2,
      title: "Habit Stacking: Integrating AI into Daily Routines",
      loomId: "3b91b901002b413ba25251c19a83e10e",
      description: "Learn the importance of integrating AI tools into daily routines using habit stacking. Discover two practical scenarios: using AI for summarizing emails after opening them and dictating meeting notes immediately after a call. This method helps create a seamless connection between existing habits and new behaviors, making it easier to remember to use AI when needed.",
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
                Practice Sessions: Building AI-Augmented Capabilities
              </h1>
              <p className="text-xl text-white/90">
                Transform from using AI occasionally to becoming an AI-augmented professional through proven habit-building techniques
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
                      src={activeVideo}
                      frameBorder="0"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="p-6 space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">
                      {videos.find(v => `https://www.loom.com/embed/${v.loomId}` === activeVideo)?.title || "AI Habits Practice Session"}
                    </h2>
                    <p className="text-muted-foreground">
                      {videos.find(v => `https://www.loom.com/embed/${v.loomId}` === activeVideo)?.description || "Watch the video above to learn about building AI-augmented professional capabilities."}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        <span>{videos.length} practice sessions</span>
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
                <h2 className="text-3xl font-bold mb-4 text-foreground">Practice Sessions</h2>
                <p className="text-muted-foreground">
                  Watch these sessions to build your AI augmentation capabilities through proven habit-building techniques
                </p>
              </div>

              <div className="grid gap-6">
                {videos.map((video) => {
                  const isActive = `https://www.loom.com/embed/${video.loomId}` === activeVideo;
                  return (
                    <Card 
                      key={video.id} 
                      className={`shadow-soft hover:shadow-elevated transition-all duration-300 cursor-pointer ${
                        isActive ? 'ring-2 ring-primary border-primary' : ''
                      }`}
                      onClick={() => setActiveVideo(`https://www.loom.com/embed/${video.loomId}`)}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-grow">
                            <div className="flex items-center gap-3 mb-2">
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                                isActive ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                              }`}>
                                {video.number}
                              </div>
                              <CardTitle className="text-xl flex items-center gap-2">
                                {video.title}
                                {isActive && (
                                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                                    Now Playing
                                  </span>
                                )}
                              </CardTitle>
                            </div>
                            <CardDescription className="text-base">
                              {video.description}
                            </CardDescription>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                            <PlayCircle className="h-4 w-4" />
                            <span>Watch</span>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  );
                })}
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
                  <CardTitle className="text-2xl">More Practice Sessions Coming Soon</CardTitle>
                  <CardDescription className="text-base">
                    New practice sessions are added monthly with the latest AI augmentation techniques, professional frameworks, 
                    and work practices. Stay tuned for advanced topics including performance optimization, workflow integration, 
                    and capability building strategies.
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
