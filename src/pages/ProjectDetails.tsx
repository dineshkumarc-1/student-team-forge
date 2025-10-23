import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, Clock, Calendar, Github, ExternalLink } from "lucide-react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = {
    title: "AI-Powered Study Companion",
    description: "Building an intelligent study assistant using machine learning to help students learn more effectively. This project aims to revolutionize how students approach their studies by providing personalized learning paths, smart scheduling, and adaptive content recommendations.",
    goals: [
      "Develop ML model for learning pattern analysis",
      "Create intuitive user interface for students",
      "Implement personalized study recommendations",
      "Build progress tracking and analytics dashboard",
    ],
    skills: ["Python", "TensorFlow", "React", "Node.js", "MongoDB", "UI/UX"],
    teamSize: 4,
    duration: "3 months",
    startDate: "Feb 2024",
    teamMembers: [
      { name: "Alex Chen", role: "Full Stack Dev", initials: "AC" },
      { name: "Sarah Johnson", role: "ML Engineer", initials: "SJ" },
      { name: "Mike Davis", role: "UI/UX Designer", initials: "MD" },
    ],
    openRoles: [
      { role: "Backend Developer", skills: ["Node.js", "Express", "MongoDB"] },
      { role: "Data Scientist", skills: ["Python", "TensorFlow", "Pandas"] },
    ],
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      
      <main className="container px-4 py-8 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>{project.teamSize} members</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>Starts {project.startDate}</span>
            </div>
          </div>
          <Button size="lg" className="gradient-primary text-white hover:opacity-90">
            Request to Join
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">About the Project</h2>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Project Goals</h2>
              <ul className="space-y-3">
                {project.goals.map((goal, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-medium mt-0.5">
                      {index + 1}
                    </span>
                    <span className="flex-1 text-muted-foreground">{goal}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Open Roles</h2>
              <div className="space-y-4">
                {project.openRoles.map((role, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">{role.role}</h3>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Team Members</h2>
              <div className="space-y-4">
                {project.teamMembers.map((member, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="gradient-primary text-white">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Resources</h2>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Github className="h-4 w-4" />
                  GitHub Repository
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Project Docs
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
