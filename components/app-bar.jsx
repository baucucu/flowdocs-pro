"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  LogOut,
  Settings,
  User,
  FileStack,
  FileUp,
  BellDot,
  Search,
  SlidersVertical,
} from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";

export default function AppBarComponent() {
  return (
    <header className="flex h-16 items-center justify-between border-b px-4 lg:px-6">
      <Link className="flex items-center space-x-4" href="/dashboard">
        <FileStack className="h-6 w-6" />
        <h1 className="text-2xl font-bold">FlowDocs</h1>
      </Link>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input placeholder="Search in all documents" />
        <Button type="submit" size="icon" variant="ghost">
          <Search className="w-4 h-4" />
        </Button>
        <Button size="icon" variant="ghost">
          <SlidersVertical className="w-4 h-4" />
        </Button>
      </div>
      <div className="flex items-center space-x-4">
        <Button className="space-x-2" variant="ghost">
          <BellDot className="h-4 w-4" />
          <span className="hidden md:inline">Notifications</span>
          <Badge variant="destructive">15</Badge>
        </Button>
        <Button>
          <FileUp className="h-4 w-4 md:mr-2" />
          <span className="hidden md:inline">Upload Documents</span>
        </Button>
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-avatar.jpg" alt="@username" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">username</p>
                <p className="text-xs leading-none text-muted-foreground">
                  user@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
