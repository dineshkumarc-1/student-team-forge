import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MessageCircle, HelpCircle } from "lucide-react";

const About = () => {
  const faqs = [
    {
      question: "What is WorkWise?",
      answer: "WorkWise is a college-centric platform that connects students to collaborate on projects, showcase their skills, and build their professional network.",
    },
    {
      question: "How do I join a project?",
      answer: "Browse available projects, find one that matches your interests and skills, and click the 'Join Project' button. The project owner will review your request.",
    },
    {
      question: "Can I create my own project?",
      answer: "Yes! Click the 'Create Project' button on your dashboard to start a new project and invite team members.",
    },
    {
      question: "Is WorkWise free to use?",
      answer: "Yes, WorkWise is completely free for all students. Our goal is to make collaboration accessible to everyone.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
              <span className="text-lg font-bold text-white">W</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              WorkWise
            </span>
          </Link>
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="container px-4 py-12 max-w-4xl">
        {/* Mission */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-6">About WorkWise</h1>
          <Card className="p-8 gradient-soft">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              WorkWise bridges the gap between college talent and real-world collaboration. 
              We believe that students have incredible potential, and when they work together, 
              they can create amazing things. Our platform provides the tools and community 
              to turn ideas into reality, helping students learn, grow, and build their future together.
            </p>
          </Card>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <MessageCircle className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Get in Touch</h2>
          </div>
          <Card className="p-8">
            <p className="text-muted-foreground mb-6">
              Have questions or suggestions? We'd love to hear from you!
            </p>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@college.edu" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What's this about?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us more..."
                  className="min-h-[120px]"
                />
              </div>
              <Button type="submit" className="gradient-primary text-white hover:opacity-90 gap-2">
                <Mail className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default About;
