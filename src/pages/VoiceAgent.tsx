import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Clock, Target, Sparkles, CheckCircle2, Loader2, User, Briefcase, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ZAPIER_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/17752322/uzphdyk/";

interface FormData {
  name: string;
  phone: string;
  timeOfDay: string;
  businessGoals: string;
  personalGoals: string;
}

interface Submission extends FormData {
  submittedAt: string;
}

const VoiceAgent = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<Submission | null>(null);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    timeOfDay: "",
    businessGoals: "",
    personalGoals: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Use no-cors mode for Zapier webhooks to avoid CORS issues
      // The webhook will still receive the data even though we can't read the response
      await fetch(ZAPIER_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          preferredCallTime: formData.timeOfDay,
          businessGoals: formData.businessGoals,
          personalGoals: formData.personalGoals,
          submittedAt: new Date().toISOString(),
        }),
      });

      // With no-cors mode, we assume success if no error was thrown
      const newSubmission: Submission = {
        ...formData,
        submittedAt: new Date().toLocaleString(),
      };
      
      setLastSubmission(newSubmission);
      setSubmissions((prev) => [newSubmission, ...prev]);
      
      toast({
        title: "Successfully submitted!",
        description: "You'll receive your first call tomorrow at your preferred time!",
      });
      
      setFormData({
        name: "",
        phone: "",
        timeOfDay: "",
        businessGoals: "",
        personalGoals: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission failed",
        description: "There was an error submitting your information. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: Target,
      title: "Daily Goal Check-ins",
      description: "Review your business goals and track progress with personalized morning conversations.",
    },
    {
      icon: Sparkles,
      title: "AI Tool Suggestions",
      description: "Get recommendations for AI tools and techniques relevant to your daily challenges.",
    },
    {
      icon: Clock,
      title: "Planning Support",
      description: "Discuss your daily plans and receive guidance on prioritization and efficiency.",
    },
  ];

  const getTimeLabel = (value: string) => {
    const timeMap: Record<string, string> = {
      "6am": "6:00 AM",
      "7am": "7:00 AM",
      "8am": "8:00 AM",
      "9am": "9:00 AM",
      "10am": "10:00 AM",
    };
    return timeMap[value] || value;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Daily Voice Agent
              </h1>
              <p className="text-xl text-white/90">
                Your personal AI coach, calling you every morning
              </p>
              <div className="inline-block px-4 py-2 bg-green-500/90 rounded-full text-white font-medium">
                Now Available
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-foreground">How It Works</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Every morning, our AI voice agent will call you to help structure your day, 
                  discuss your goals, and suggest relevant AI tools for your tasks.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {features.map((feature, index) => (
                  <Card key={index} className="shadow-soft">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-4">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Example Conversation */}
              <Card className="mb-12 shadow-elevated bg-gradient-card border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Example Morning Call</CardTitle>
                  <CardDescription>
                    Here's what a typical conversation might look like
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">AI Agent:</p>
                        <p className="text-muted-foreground">
                          "Good morning! How are you feeling about today's priorities?"
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-medium text-secondary">You</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">You:</p>
                        <p className="text-muted-foreground">
                          "I need to write several customer emails and create social media content."
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">AI Agent:</p>
                        <p className="text-muted-foreground">
                          "Perfect! For the emails, I'd suggest using ChatGPT with a custom instruction template 
                          to maintain your brand voice. For social media, have you tried the content calendar 
                          technique we covered in Module 3? I can walk you through it quickly."
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Signup Form */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <Card className="shadow-elevated">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Sign Up for Daily Calls</CardTitle>
                  <CardDescription>
                    Submit your information and you'll receive your first call tomorrow at your preferred time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Smith"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+61 4XX XXX XXX"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Call Time</Label>
                      <Select
                        value={formData.timeOfDay}
                        onValueChange={(value) => setFormData({ ...formData, timeOfDay: value })}
                        required
                        disabled={isSubmitting}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="6am">6:00 AM</SelectItem>
                          <SelectItem value="7am">7:00 AM</SelectItem>
                          <SelectItem value="8am">8:00 AM</SelectItem>
                          <SelectItem value="9am">9:00 AM</SelectItem>
                          <SelectItem value="10am">10:00 AM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="businessGoals">
                        <span className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4" />
                          Business Goals
                        </span>
                      </Label>
                      <Textarea
                        id="businessGoals"
                        value={formData.businessGoals}
                        onChange={(e) => setFormData({ ...formData, businessGoals: e.target.value })}
                        placeholder="What business goals are you focused on right now? (e.g., increase revenue, improve marketing, automate processes...)"
                        required
                        disabled={isSubmitting}
                        className="min-h-[100px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="personalGoals">
                        <span className="flex items-center gap-2">
                          <Heart className="h-4 w-4" />
                          Personal Goals
                        </span>
                      </Label>
                      <Textarea
                        id="personalGoals"
                        value={formData.personalGoals}
                        onChange={(e) => setFormData({ ...formData, personalGoals: e.target.value })}
                        placeholder="What personal goals are you working towards? (e.g., work-life balance, learning new skills, health and fitness...)"
                        required
                        disabled={isSubmitting}
                        className="min-h-[100px]"
                      />
                    </div>

                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        className="w-full" 
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          "Sign Up Now"
                        )}
                      </Button>
                    </div>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you'll receive your first AI voice agent call tomorrow at your selected time.
                    </p>
                  </form>
                </CardContent>
              </Card>

              {/* Confirmation Card */}
              {lastSubmission && (
                <Card className="mt-6 shadow-elevated border-green-500/30 bg-green-50/50 dark:bg-green-950/20">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2 text-green-700 dark:text-green-400">
                      <CheckCircle2 className="h-5 w-5" />
                      Submission Confirmed
                    </CardTitle>
                    <CardDescription>
                      Your information has been successfully submitted. You'll receive your first call tomorrow at {getTimeLabel(lastSubmission.timeOfDay)}!
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid gap-3 text-sm">
                      <div className="flex items-start gap-2">
                        <User className="h-4 w-4 mt-0.5 text-muted-foreground" />
                        <div>
                          <span className="font-medium">Name:</span> {lastSubmission.name}
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Phone className="h-4 w-4 mt-0.5 text-muted-foreground" />
                        <div>
                          <span className="font-medium">Phone:</span> {lastSubmission.phone}
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="h-4 w-4 mt-0.5 text-muted-foreground" />
                        <div>
                          <span className="font-medium">Preferred Time:</span> {getTimeLabel(lastSubmission.timeOfDay)}
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Briefcase className="h-4 w-4 mt-0.5 text-muted-foreground" />
                        <div>
                          <span className="font-medium">Business Goals:</span>
                          <p className="text-muted-foreground mt-1">{lastSubmission.businessGoals}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Heart className="h-4 w-4 mt-0.5 text-muted-foreground" />
                        <div>
                          <span className="font-medium">Personal Goals:</span>
                          <p className="text-muted-foreground mt-1">{lastSubmission.personalGoals}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Submissions List */}
              {submissions.length > 1 && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Previous Submissions</h3>
                  <div className="space-y-4">
                    {submissions.slice(1).map((submission, index) => (
                      <Card key={index} className="shadow-soft">
                        <CardContent className="pt-4">
                          <div className="flex justify-between items-start mb-2">
                            <div className="font-medium">{submission.name}</div>
                            <div className="text-xs text-muted-foreground">{submission.submittedAt}</div>
                          </div>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <p><span className="font-medium">Phone:</span> {submission.phone}</p>
                            <p><span className="font-medium">Time:</span> {getTimeLabel(submission.timeOfDay)}</p>
                            <p><span className="font-medium">Business Goals:</span> {submission.businessGoals}</p>
                            <p><span className="font-medium">Personal Goals:</span> {submission.personalGoals}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Built with Advanced Technology</h2>
              <p className="text-muted-foreground mb-6">
                The daily voice agent is being developed using Zapier for workflow automation and BlandAI 
                for natural voice conversations. This combination ensures smooth, intelligent interactions 
                that feel natural and provide real value to your daily routine.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="px-4 py-2 bg-muted rounded-full">Zapier Integration</div>
                <div className="px-4 py-2 bg-muted rounded-full">BlandAI Voice Engine</div>
                <div className="px-4 py-2 bg-muted rounded-full">Personalized AI Coaching</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VoiceAgent;
