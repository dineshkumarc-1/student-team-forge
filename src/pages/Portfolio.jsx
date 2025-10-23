import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Campus Event Management System",
      description: "Led the development of a comprehensive platform for managing college events with real-time updates and automated notifications.",
      outcomes: [
        "Increased event attendance by 40%",
        "Streamlined event organization process",
        "Reduced planning time by 50%",
      ],
      skills: ["React", "Firebase", "TypeScript", "Tailwind CSS"],
      github: "#",
      demo: "#",
      image: "gradient-primary",
    },
    {
      title: "AI-Powered Resume Analyzer",
      description: "Built an ML-powered tool that analyzes resumes and provides personalized feedback to help students improve their job applications.",
      outcomes: [
        "Analyzed 1000+ resumes",
        "92% user satisfaction rate",
        "Featured in college newsletter",
      ],
      skills: ["Python", "TensorFlow", "NLP", "Flask"],
      github: "#",
      demo: "#",
      image: "gradient-soft",
    },
    {
      title: "Study Group Finder",
      description: "Created a mobile app connecting students based on courses and study preferences, facilitating collaborative learning.",
      outcomes: [
        "500+ active users",
        "200+ study groups formed",
        "Won Best App award at hackathon",
      ],
      skills: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      github: "#",
      demo: "#",
      image: "gradient-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      
      <main className="container px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">My Portfolio</h1>
          <p className="text-muted-foreground text-lg">
            A collection of projects I've worked on and their impact
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="grid md:grid-cols-3 gap-6">
                <div className={`${project.image} h-48 md:h-auto flex items-center justify-center`}>
                  <span className="text-4xl font-bold text-white opacity-20">
                    {project.title.split(' ')[0]}
                  </span>
                </div>
                
                <div className="md:col-span-2 p-6">
                  <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Key Outcomes:</h3>
                    <ul className="space-y-1">
                      {project.outcomes.map((outcome, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary">•</span>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
