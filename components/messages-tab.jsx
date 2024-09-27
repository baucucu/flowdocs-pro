"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";

const initialMessages = [
  {
    id: "1",
    content:
      "Hey @JaneSmith, can you review the latest invoice? It needs approval ASAP.",
    timestamp: "2023-09-15 14:30",
    user: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "2",
    content:
      "Sure @JohnDoe, I'll take a look right away. @BobWilliams, can you provide any additional context?",
    timestamp: "2023-09-15 14:35",
    user: {
      name: "Jane Smith",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "3",
    content:
      "Certainly, @JaneSmith. The invoice is for the Q3 software licenses. All details should be in order, but let me know if you need any clarification.",
    timestamp: "2023-09-15 14:40",
    user: {
      name: "Bob Williams",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
];

export function MessagesTabComponent() {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const formatMentions = (content) => {
    return content.split(" ").map((word, index) => {
      if (word.startsWith("@")) {
        return (
          <span key={index} className="bg-blue-100 text-blue-800 px-1 rounded">
            {word}
          </span>
        );
      }
      return word + " ";
    });
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now().toString(),
        content: newMessage,
        timestamp: new Date().toLocaleString(),
        user: {
          name: "Current User", // Replace with actual user data
          avatar: "/placeholder.svg?height=40&width=40",
        },
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Messages</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="pr-4 mb-4">
          {messages.map((message) => (
            <div key={message.id} className="mb-4 last:mb-0">
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarImage
                    src={message.user.avatar}
                    alt={message.user.name}
                  />
                  <AvatarFallback>{message.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center">
                    <span className="font-semibold">{message.user.name}</span>
                    <span className="ml-2 text-sm text-gray-500">
                      {message.timestamp}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 whitespace-pre-wrap break-words">
                    {formatMentions(message.content)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-center space-x-2">
          <Input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
          />
          <Button onClick={handleSendMessage}>
            <SendIcon className="h-4 w-4 mr-2" />
            Send
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
