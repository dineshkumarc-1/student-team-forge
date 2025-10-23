import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send } from "lucide-react";

const Chat = () => {
  const messages = [
    {
      id: 1,
      sender: "Sarah Johnson",
      initials: "SJ",
      message: "Hey team! I've pushed the initial ML model to the repo. Can someone review it?",
      timestamp: "10:30 AM",
      isOwn: false,
    },
    {
      id: 2,
      sender: "You",
      initials: "YO",
      message: "Great work Sarah! I'll take a look at it this afternoon.",
      timestamp: "10:32 AM",
      isOwn: true,
    },
    {
      id: 3,
      sender: "Alex Chen",
      initials: "AC",
      message: "The backend API is ready for testing. Updated the docs with endpoints.",
      timestamp: "10:45 AM",
      isOwn: false,
    },
    {
      id: 4,
      sender: "Mike Davis",
      initials: "MD",
      message: "UI mockups are complete! Check them out in the Figma link I shared.",
      timestamp: "11:00 AM",
      isOwn: false,
    },
    {
      id: 5,
      sender: "You",
      initials: "YO",
      message: "Awesome progress everyone! Let's meet tomorrow to integrate everything.",
      timestamp: "11:15 AM",
      isOwn: true,
    },
  ];

  const teamMembers = [
    { name: "Sarah Johnson", role: "ML Engineer", initials: "SJ", online: true },
    { name: "Alex Chen", role: "Full Stack Dev", initials: "AC", online: true },
    { name: "Mike Davis", role: "UI/UX Designer", initials: "MD", online: false },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      
      <main className="container px-4 py-8 max-w-7xl">
        <h1 className="text-4xl font-bold mb-8">Team Chat</h1>

        <div className="grid md:grid-cols-4 gap-6 h-[calc(100vh-220px)]">
          {/* Team Members Sidebar */}
          <Card className="p-4 md:col-span-1">
            <h2 className="font-semibold mb-4">Team Members</h2>
            <div className="space-y-3">
              {teamMembers.map((member) => (
                <div key={member.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer">
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="gradient-primary text-white">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    {member.online && (
                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-card"></span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{member.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Chat Area */}
          <Card className="md:col-span-3 flex flex-col">
            <div className="p-4 border-b">
              <h2 className="font-semibold">AI Study Companion - Team Chat</h2>
              <p className="text-sm text-muted-foreground">4 members</p>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.isOwn ? 'flex-row-reverse' : ''}`}
                >
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className={msg.isOwn ? "bg-primary text-white" : "gradient-primary text-white"}>
                      {msg.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className={`flex-1 ${msg.isOwn ? 'items-end' : 'items-start'} flex flex-col`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium">{msg.sender}</span>
                      <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
                    </div>
                    <div
                      className={`p-3 rounded-lg max-w-md ${
                        msg.isOwn
                          ? 'bg-primary text-white'
                          : 'bg-muted'
                      }`}
                    >
                      <p className="text-sm">{msg.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  className="h-11"
                />
                <Button className="gradient-primary text-white hover:opacity-90 h-11">
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Chat;
