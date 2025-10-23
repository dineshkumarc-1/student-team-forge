import { Link, useLocation } from "react-router-dom";
import { Home, FolderKanban, MessageSquare, User, LogOut, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: "/dashboard", icon: Home, label: "Home" },
    { path: "/projects", icon: FolderKanban, label: "Projects" },
    { path: "/chat", icon: MessageSquare, label: "Chat" },
    { path: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/dashboard" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
            <span className="text-lg font-bold text-white">W</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            WorkWise
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "gap-2",
                  isActive(item.path) && "bg-primary/10 text-primary"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Button>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-accent"></span>
          </Button>
          <Link to="/login">
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-card z-50">
        <div className="flex items-center justify-around p-2">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className="flex-1">
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "w-full flex-col h-auto py-2 gap-1",
                  isActive(item.path) && "bg-primary/10 text-primary"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-xs">{item.label}</span>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
