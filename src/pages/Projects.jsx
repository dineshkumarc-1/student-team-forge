import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "AI-Powered Study Companion",
      description: "Building an intelligent study assistant using machine learning to help students learn more effectively.",
      skills: ["Python", "TensorFlow", "React", "Node.js"],
      teamSize: 4,
      duration: "3 months",
    },
    {
      id: 2,
      title: "Campus Event Management System",
      description: "A comprehensive platform for organizing and managing college events, clubs, and activities.",
      skills: ["React", "Firebase", "TypeScript", "Tailwind"],
      teamSize: 5,
      duration: "2 months",
    },
    {
      id: 3,
      title: "Sustainable Campus Initiative",
      description: "Mobile app to track and promote eco-friendly practices among students and faculty.",
      skills: ["Flutter", "Dart", "Firebase", "UI/UX"],
      teamSize: 3,
      duration: "4 months",
    },
    {
      id: 4,
      title: "Virtual Lab Simulator",
      description: "Interactive 3D simulations for chemistry and physics experiments for remote learning.",
      skills: ["Unity", "C#", "3D Modeling", "WebGL"],
      teamSize: 6,
      duration: "5 months",
    },
    {
      id: 5,
      title: "Student Marketplace",
      description: "Peer-to-peer marketplace for students to buy, sell, and exchange textbooks and supplies.",
      skills: ["React Native", "Express", "MongoDB", "Stripe"],
      teamSize: 4,
      duration: "3 months",
    },
    {
      id: 6,
      title: "Mental Health Support Bot",
      description: "AI chatbot providing mental health resources and support for students.",
      skills: ["Python", "NLP", "React", "PostgreSQL"],
      teamSize: 3,
      duration: "4 months",
    },
  ];

  const popularSkills = ["React", "Python", "UI/UX", "Machine Learning", "Mobile Dev"];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      
      <main className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Explore Projects</h1>
          <p className="text-muted-foreground text-lg">
            Find exciting projects to join or get inspired for your own
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                className="pl-10 h-12"
              />
            </div>
            <Button variant="outline" className="gap-2 h-12">
              <Filter className="h-5 w-5" />
              Filters
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-muted-foreground self-center">Popular:</span>
            {popularSkills.map((skill) => (
              <Badge key={skill} variant="secondary" className="cursor-pointer hover:bg-primary/20">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              onClick={() => navigate(`/project/${project.id}`)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
