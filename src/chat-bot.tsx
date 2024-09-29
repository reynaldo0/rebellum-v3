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
    { sender: "bot", content: "Halo! 👋 Anda bisa bertanya dengan keyword seperti: kenakalan remaja, narkoba, atau cara menghindari narkoba." },
    {
      sender: "user",
      content:
        "Halo! Saya ingin menanyakan beberapa pertanyaan mengenai kenakalan remaja",
    },
    { sender: "bot", content: "Silahkan kirim pertanyaan kamu sesuai keyword dan jangan lupa gulir " },
  ]);
  const [input, setInput] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Automatically scroll to the latest message when the message list changes
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const responses: { [key: string]: string[] } = {
    "kenakalan remaja": [
      "Kenakalan remaja sering kali disebabkan oleh tekanan teman sebaya.",
      "Banyak faktor yang bisa memengaruhi, termasuk masalah keluarga.",
    ],
    "narkoba": [
      "Narkoba adalah zat yang dapat mempengaruhi sistem saraf dan perilaku.",
      "Ada berbagai jenis narkoba, seperti ganja, kokain, dan lainnya.",
    ],
    "cara menghindari narkoba": [
      "Jalin hubungan baik dengan keluarga dan teman yang positif.",
      "Ikuti kegiatan yang bermanfaat dan tingkatkan minat di bidang yang Anda sukai.",
    ],
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { sender: "user", content: input }]);
      const userMessage = input.toLowerCase();
      setInput("");

      let botResponse = "Maaf, saya tidak mengerti pertanyaan Anda. Silakan coba lagi.";
      
      for (const key in responses) {
        if (userMessage.includes(key)) {
          const randomIndex = Math.floor(Math.random() * responses[key].length);
          botResponse = responses[key][randomIndex];
          break; // Keluar dari loop setelah menemukan jawaban yang cocok
        }
      }

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            content: botResponse,
          },
        ]);

        // Scroll ke area terbaru setelah mengupdate pesan
        if (scrollAreaRef.current) {
          scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
        }
      }, 1000);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);

    // Scroll to the bottom when the chat is first opened
    setTimeout(() => {
      if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
      }
    }, 300); // A little delay to make sure the chat content is fully loaded
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
        <DialogContent className={`scale-75 md:scale-100 sm:max-w-[400px] p-5 mt-10 overflow-hidden bg-white z-[99999] ${isOpen ? 'slide-in' : ''}`}>
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
          <ScrollArea className="h-[350px] p-4 bg-white overflow-y-auto" ref={scrollAreaRef}>
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
