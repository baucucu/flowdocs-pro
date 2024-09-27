"use client";
import { useState } from "react";
import {
  Folder,
  Inbox,
  Tag,
  ChevronDown,
  ChevronRight,
  Settings,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const initialTree = [
  { id: "new", name: "New", type: "folder" },
  {
    id: "invoices",
    name: "Invoices",
    type: "folder",
    children: [
      { id: "important", name: "Important", type: "tag" },
      { id: "contracts", name: "Contracts", type: "tag" },
    ],
  },
  {
    id: "contracts",
    name: "Contracts",
    type: "folder",
    children: [
      { id: "suppliers", name: "Suppliers", type: "tag" },
      { id: "clients", name: "Clients", type: "tag" },
    ],
  },
];

function TreeNode({ item, level = 0 }) {
  const [isOpen, setIsOpen] = useState(true);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div>
      <div
        className={cn(
          "flex items-center py-1 px-2 hover:bg-muted/50 cursor-pointer",
          level > 0 && "ml-4"
        )}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        {hasChildren ? (
          isOpen ? (
            <ChevronDown className="h-4 w-4 mr-1" />
          ) : (
            <ChevronRight className="h-4 w-4 mr-1" />
          )
        ) : (
          <span className="w-5" />
        )}
        {item.type === "folder" ? (
          <Folder className="h-4 w-4 mr-2" />
        ) : (
          <Tag className="h-4 w-4 mr-2" />
        )}
        <span>{item.name}</span>
      </div>
      {isOpen &&
        hasChildren &&
        item.children.map((child) => (
          <TreeNode key={child.id} item={child} level={level + 1} />
        ))}
    </div>
  );
}

export default function SidebarComponent() {
  const router = useRouter();
  return (
    <div className="flex flex-col h-full w-64 bg-muted/30 overflow-y-auto">
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-1">
          <div className="flex items-center py-1 px-2 hover:bg-muted/50 cursor-pointer">
            <Inbox className="h-4 w-4 mr-2" />
            <span>Inbox</span>
          </div>
          {initialTree.map((item) => (
            <Link key={item.id} href={`/dashboard/documents/?type=${item.id}`}>
              <TreeNode item={item} />
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-muted/20 p-4">
        <Button
          variant="ghost"
          onClick={() => router.push("/dashboard/configuration")}
        >
          <Settings className="mr-2 h-4 w-4" />
          Configuration
        </Button>
      </div>
    </div>
  );
}
