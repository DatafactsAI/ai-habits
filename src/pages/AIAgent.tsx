import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send, Info } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const AIAgent = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your AI Business Assistant. I can help answer questions about AI tools, best practices, and how to implement AI in your business. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");

  // Mock responses for demonstration
  const getMockResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("start") || lowerMessage.includes("begin")) {
      return "Great! I'd recommend starting with our introductory video course. It covers the fundamentals of AI tools and how they can benefit your business. Would you like to know about a specific AI platform like ChatGPT, Claude, or Midjourney?";
    }
    
    if (lowerMessage.includes("chatgpt") || lowerMessage.includes("gpt")) {
      return "ChatGPT is excellent for text-based tasks like drafting emails, creating content, and brainstorming ideas. For business use, I recommend creating custom instructions to maintain your brand voice. You can also use it for data analysis, customer service responses, and workflow automation. Would you like specific examples for your industry?";
    }
    
    if (lowerMessage.includes("automate") || lowerMessage.includes("automation")) {
      return "Automation with AI can save hours each week. Common areas include: email responses, social media scheduling, report generation, and data entry. I'd suggest starting with one repetitive task and perfecting that automation before expanding. What type of task are you looking to automate?";
    }
    
    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("pricing")) {
      return "Our membership is $20 AUD per month and includes full access to video training, all written guides, monthly content updates, and this AI agent support. It's designed to be affordable for small and medium businesses while delivering real value through practical AI training.";
    }
    
    return "That's a great question! While I can provide general guidance, for detailed information on that topic, I recommend checking our guides library or watching the relevant video module. Full functionality of this AI agent, including API integration for more sophisticated responses, is coming soon. Is there anything else I can help clarify?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    
    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        role: "assistant",
        content: getMockResponse(input),
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);

    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
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
                  <Bot className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                AI Agent Demo
              </h1>
              <p className="text-xl text-white/90">
                Get quick answers about AI tools and best practices
              </p>
            </div>
          </div>
        </section>

        {/* Info Banner */}
        <section className="py-6 bg-muted/30 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto flex items-start gap-3 text-sm">
              <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                This is a demonstration of how an AI agent could help members with quick questions about AI tools and best practices. 
                Full functionality with advanced API integration is coming soon for members.
              </p>
            </div>
          </div>
        </section>

        {/* Chat Interface */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto shadow-elevated">
              <CardHeader>
                <CardTitle>Chat with AI Assistant</CardTitle>
                <CardDescription>
                  Ask questions about AI implementation, tools, and strategies
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Messages */}
                <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        message.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg px-4 py-3 ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your question here..."
                    className="flex-grow"
                  />
                  <Button onClick={handleSend} size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>

                {/* Suggestions */}
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-2">Try asking:</p>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setInput("How do I get started with AI?")}
                    >
                      How do I get started?
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setInput("What can ChatGPT do for my business?")}
                    >
                      ChatGPT for business
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setInput("How can I automate repetitive tasks?")}
                    >
                      Automation tips
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Coming Soon: Enhanced Features</h2>
              <p className="text-muted-foreground mb-6">
                The full version of our AI agent will include advanced features like personalized recommendations 
                based on your industry, integration with your business tools, and the ability to remember your 
                preferences and past conversations.
              </p>
              <Button size="lg">Join Waitlist for Full Access</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIAgent;
