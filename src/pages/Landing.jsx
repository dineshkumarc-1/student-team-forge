import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Briefcase, MessageCircle, Award } from "lucide-react";
import heroImage from "@/assets/hero-collaboration.jpg";

const Landing = () => {
  const features = [
    {
      icon: Users,
      title: "Form Teams",
      description: "Connect with talented peers and build diverse, skilled teams for your projects.",
    },
    {
      icon: Briefcase,
      title: "Showcase Skills",
      description: "Create a portfolio that highlights your abilities and attracts collaborators.",
    },
    {
      icon: MessageCircle,
      title: "Real-time Chat",
      description: "Communicate seamlessly with your team members and stay in sync.",
    },
    {
      icon: Award,
      title: "Grow Together",
      description: "Learn from others, gain experience, and build your professional network.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
              <span className="text-lg font-bold text-white">W</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              WorkWise
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/about">
              <Button variant="ghost">About</Button>
            </Link>
            <Link to="/login">
              <Button className="gradient-primary text-white hover:opacity-90">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-soft">
        <div className="container px-4 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                WorkWise
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Connect. Collaborate. Create.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Empowering students to collaborate and build their future together.
                Join a community where innovation meets opportunity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/login">
                  <Button size="lg" className="gradient-primary text-white hover:opacity-90 text-lg px-8">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src={heroImage}
                alt="Students collaborating"
                className="rounded-2xl shadow-large w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose WorkWise?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to connect, collaborate, and create amazing projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-soft">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of students already collaborating on WorkWise
            </p>
            <Link to="/login">
              <Button size="lg" className="gradient-primary text-white hover:opacity-90 text-lg px-8">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-card">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
                <span className="text-lg font-bold text-white">W</span>
              </div>
              <span className="text-lg font-bold">WorkWise</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 WorkWise. Built with ❤️ for students.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
