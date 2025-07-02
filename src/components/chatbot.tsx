"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, Send, X, Bot, User, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "bot";
  text: string;
};

// Simple client-side responses for static deployment
const getSimpleResponse = (message: string): { response: string; navigationTarget?: string } => {
  const lowercaseMessage = message.toLowerCase();
  
  if (lowercaseMessage.includes('about') || lowercaseMessage.includes('who are you')) {
    return { 
      response: "I can help you navigate Alif's portfolio. You can ask me about his experience, projects, or how to contact him. Click on different sections to explore!",
      navigationTarget: "#about"
    };
  }
  
  if (lowercaseMessage.includes('experience') || lowercaseMessage.includes('work') || lowercaseMessage.includes('job')) {
    return { 
      response: "Alif has experience in full-stack development, particularly with React, Next.js, and modern web technologies. Check out the experience section for details!",
      navigationTarget: "#experience"
    };
  }
  
  if (lowercaseMessage.includes('project') || lowercaseMessage.includes('portfolio')) {
    return { 
      response: "You can find Alif's projects in the portfolio section, showcasing various web applications and development work!",
      navigationTarget: "#portfolio"
    };
  }
  
  if (lowercaseMessage.includes('contact') || lowercaseMessage.includes('reach') || lowercaseMessage.includes('email')) {
    return { 
      response: "You can contact Alif through the contact form below, or connect with him on LinkedIn and GitHub!",
      navigationTarget: "#contact"
    };
  }
  
  if (lowercaseMessage.includes('skills') || lowercaseMessage.includes('technology') || lowercaseMessage.includes('tech')) {
    return { 
      response: "Alif works with React, Next.js, TypeScript, Node.js, and other modern web technologies. Check out the about section for more details!",
      navigationTarget: "#about"
    };
  }
  
  return { 
    response: "I can help you navigate this portfolio! Try asking about Alif's experience, projects, skills, or how to contact him."
  };
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi! I'm Alif's portfolio assistant. How can I help you navigate this portfolio?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (scrollAreaRef.current) {
          const viewport = scrollAreaRef.current.querySelector('div');
          if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
          }
        }
      }, 100);
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = { role: "user", text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue("");
    setIsLoading(true);

    // Simulate a brief delay for better UX
    setTimeout(() => {
      try {
        const result = getSimpleResponse(currentInput);
        
        const botMessage: Message = { role: "bot", text: result.response };
        setMessages((prev) => [...prev, botMessage]);

        if (result.navigationTarget) {
          const targetId = result.navigationTarget.substring(1); // remove '#'
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            // Highlight the section briefly
            element.style.transition = 'box-shadow 0.3s ease-in-out';
            element.style.boxShadow = '0 0 20px 5px hsl(var(--primary))';
            setTimeout(() => {
                element.style.boxShadow = '';
            }, 2000);
          }
        }
      } catch (error) {
        console.error("Chatbot error:", error);
        const errorMessage: Message = {
          role: "bot",
          text: "Sorry, I'm having a little trouble right now. Please try again later.",
        };
        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    }, 500);
  };

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-80 h-[450px] bg-card rounded-lg shadow-2xl flex flex-col border origin-bottom-right mb-4"
            >
              <header className="p-4 border-b flex justify-between items-center bg-muted/40">
                <h3 className="font-headline text-lg font-semibold">AI Assistant</h3>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </header>
              <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={cn(
                        "flex items-start gap-3",
                        message.role === "user" ? "justify-end" : "justify-start"
                      )}
                    >
                      {message.role === "bot" && (
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                          <Bot className="w-5 h-5" />
                        </div>
                      )}
                      <div
                        className={cn(
                          "p-3 rounded-lg max-w-[80%] text-sm",
                          message.role === "user"
                            ? "bg-primary text-primary-foreground rounded-br-none"
                            : "bg-muted rounded-bl-none"
                        )}
                      >
                        {message.text}
                      </div>
                       {message.role === "user" && (
                        <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shrink-0">
                          <User className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                     <div className="flex items-start gap-3 justify-start">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                          <Bot className="w-5 h-5" />
                        </div>
                         <div className="p-3 rounded-lg bg-muted rounded-bl-none">
                            <Loader2 className="h-5 w-5 animate-spin text-primary" />
                         </div>
                     </div>
                  )}
                </div>
              </ScrollArea>
              <form onSubmit={handleSendMessage} className="p-4 border-t flex items-center gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me something..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button type="submit" size="icon" disabled={isLoading || !inputValue.trim()}>
                  <Send className="h-5 w-5" />
                </Button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        >
          <Button
            onClick={() => setIsOpen(!isOpen)}
            size="lg"
            className="rounded-full w-16 h-16 shadow-lg bg-primary hover:bg-primary/90"
            aria-label="Toggle Chatbot"
          >
            {isOpen ? <X className="h-7 w-7" /> : <MessageSquare className="h-7 w-7" />}
          </Button>
        </motion.div>
      </div>
    </>
  );
}
