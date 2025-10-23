import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  teamSize: number;
  duration: string;
  onClick?: () => void;
}

export const ProjectCard = ({
  title,
  description,
  skills,
  teamSize,
  duration,
  onClick,
}: ProjectCardProps) => {
  return (
    <Card className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
      <div onClick={onClick}>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
          {skills.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{skills.length - 3} more
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{teamSize} members</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
        </div>

        <Button className="w-full gradient-primary text-white hover:opacity-90 transition-opacity">
          Join Project
        </Button>
      </div>
    </Card>
  );
};
