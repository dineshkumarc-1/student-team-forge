import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
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
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      
      <main className="container px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Welcome back, Student!</h1>
            <p className="text-muted-foreground text-lg">
              Discover new projects and collaborate with peers
            </p>
          </div>
          <Button className="gradient-primary text-white hover:opacity-90 gap-2">
            <Plus className="h-5 w-5" />
            Create Project
          </Button>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Trending Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                onClick={() => navigate(`/project/${project.id}`)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
