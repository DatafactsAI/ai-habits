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
    id: "budget-tool",
    title: "Budget Tool",
    description: "A simple and secure budget tool that puts you in control of your finances. Track expenses, monitor spending patterns, and make informed financial decisions with confidence. Your data is protected with enterprise-grade security, so you can focus on what matters—growing your business.",
    category: "Finance",
    url: "https://smartpaybacktracker.info",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80",
    features: [
      "Secure financial tracking",
      "Expense categorization",
      "Spending insights",
      "Privacy-first design",
      "Easy-to-understand reports"
    ],
    tags: ["Finance", "Budgeting", "Security"]
  }
];

export function getSoftwareById(id: string): Software | undefined {
  return software.find(item => item.id === id);
}

export function getSoftwareByCategory(category: string): Software[] {
  return software.filter(item => item.category === category);
}

