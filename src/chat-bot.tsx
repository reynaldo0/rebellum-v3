"use client";

import { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./components/ui/dialog";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { ScrollArea } from "./components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Send } from "lucide-react";

interface Message {
  sender: "user" | "bot";
  content: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", content: "Halo! 👋 Apakah ada yang bisa kami bantu?" },
    {
      sender: "user",
      content:
        "Halo! Saya ingin menanyakan beberapa pertanyaan mengenai kenakalan remaja",
    },
    { sender: "bot", content: ".............." },
  ]);
  const [input, setInput] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", content: input }]);
      setInput("");
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            content:
              "Thank you for your question. I'm looking into that for you. Is there anything else you'd like to know?",
          },
        ]);
      }, 1000);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 z-50 rounded-full w-12 h-12 p-0 bg-yellow hover:bg-yellow/80 text-white shadow-lg"
        onClick={handleOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className={` scale-75 md:scale-100 sm:max-w-[400px] p-5 mt-10 overflow-hidden bg-white z-[99999] ${isOpen ? 'slide-in' : ''}`}>
          <DialogHeader className="p-4 border-b">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src="/avatar.png" />
                <AvatarFallback>RB</AvatarFallback>
              </Avatar>
              <div>
                <DialogTitle>
                  <span className="text-primary-100 font-bold">Rebel</span>
                  <span className="text-yellow font-bold">Bot</span>
                </DialogTitle>
                <p className="text-sm text-gray-500">Online</p>
              </div>
            </div>
          </DialogHeader>
          <ScrollArea className="h-[350px] p-4 bg-white" ref={scrollAreaRef}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                } mb-4`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-primary-100 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </ScrollArea>
          <div className="p-4 border-t">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex space-x-2"
            >
              <Input
                className="flex-grow"
                placeholder="Tuliskan Pesan..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <Button
                type="submit"
                size="icon"
                className="scale-150 text-primary-100"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
          <div className="p-2 border-t text-center text-xs text-gray-500">
            Didukung oleh <span className="text-primary-100 font-bold">Rebel</span>
            <span className="text-yellow font-bold">Bot</span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
