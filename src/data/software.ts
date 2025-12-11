export interface Software {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  imageUrl?: string;
  features: string[];
  tags?: string[];
}

export const software: Software[] = [
  {
    id: "pipeline-compass",
    title: "Pipeline Compass",
    description: "A simple and practical way to manage your projects. Streamline your workflow, track progress effortlessly, and keep your team aligned with an intuitive interface designed for busy professionals. No complex setup required—get started in minutes and see immediate results.",
    category: "Project Management",
    url: "https://canvas-project.lovable.app",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80",
    features: [
      "Intuitive project tracking",
      "Real-time collaboration",
      "Simple task management",
      "Visual progress indicators",
      "No learning curve required"
    ],
    tags: ["Project Management", "Productivity", "Team Collaboration"]
  },
  {
    id: "engage-ai",
    title: "Engage AI",
    description: "A mission-driven relationship assistant that combines a simple CRM with an intelligent strategic coaching layer. Helps professionals manage project-based relationships, plan and execute outreach, and maintain alignment with their goals. Unlike marketing automation tools, EngageAI acts as a strategic mentor—helping you think deeply about your communications and relationships, not just act on them.",
    category: "Relationship Management",
    url: "https://lovable.dev/projects/35acc012-fc44-4c3d-80e7-da3c285dc76d",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop&q=80",
    features: [
      "Project-centred relationship management with mission statements",
      "AI strategic coach for personalized guidance",
      "Interaction tracking with notes and emotional tone analysis",
      "Smart reporting and AI-generated task suggestions",
      "Speech-to-text for seamless on-the-go recording"
    ],
    tags: ["CRM", "Relationship Management", "AI Coaching", "Strategic Planning"]
  }
];

export function getSoftwareById(id: string): Software | undefined {
  return software.find(item => item.id === id);
}

export function getSoftwareByCategory(category: string): Software[] {
  return software.filter(item => item.category === category);
}

