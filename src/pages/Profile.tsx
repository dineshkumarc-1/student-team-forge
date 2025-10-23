import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, MapPin, Calendar, Github, Linkedin, Globe, Edit } from "lucide-react";

const Profile = () => {
  const user = {
    name: "John Doe",
    initials: "JD",
    email: "john.doe@college.edu",
    location: "New York, USA",
    joinDate: "January 2024",
    bio: "Computer Science student passionate about AI and web development. Always eager to learn new technologies and collaborate on innovative projects.",
    skills: ["React", "Python", "TensorFlow", "Node.js", "TypeScript", "UI/UX", "MongoDB"],
    links: [
      { icon: Github, label: "github.com/johndoe", url: "#" },
      { icon: Linkedin, label: "linkedin.com/in/johndoe", url: "#" },
      { icon: Globe, label: "johndoe.dev", url: "#" },
    ],
    projects: [
      {
        title: "AI Study Companion",
        role: "Full Stack Developer",
        status: "Active",
      },
      {
        title: "Campus Event Manager",
        role: "Backend Developer",
        status: "Completed",
      },
      {
        title: "Mental Health Bot",
        role: "ML Engineer",
        status: "Active",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      
      <main className="container px-4 py-8 max-w-5xl">
        <Card className="p-8 mb-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <Avatar className="h-24 w-24">
              <AvatarFallback className="gradient-primary text-white text-3xl">
                {user.initials}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                  <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
                    <div className="flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      {user.email}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {user.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Joined {user.joinDate}
                    </div>
                  </div>
                </div>
                <Button className="gap-2">
                  <Edit className="h-4 w-4" />
                  Edit Profile
                </Button>
              </div>

              <p className="text-muted-foreground mb-4">{user.bio}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {user.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {user.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Projects Contributed To</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {user.projects.map((project, index) => (
              <Card key={index} className="p-6 hover:shadow-medium transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{project.title}</h3>
                  <Badge variant={project.status === "Active" ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{project.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
