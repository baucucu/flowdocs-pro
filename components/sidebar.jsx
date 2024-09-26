"use client";
import { useState } from "react";
import { Folder, Inbox, Tag, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const initialTree = [
  { id: "inbox", name: "Inbox", type: "folder" },
  {
    id: "documents",
    name: "Documents",
    type: "folder",
    children: [
      { id: "important", name: "Important", type: "tag" },
      { id: "contracts", name: "Contracts", type: "tag" },
    ],
  },
  {
    id: "images",
    name: "Images",
    type: "folder",
    children: [
      { id: "screenshots", name: "Screenshots", type: "tag" },
      { id: "photos", name: "Photos", type: "tag" },
    ],
  },
];

function TreeNode({ item, level = 0 }) {
  const [isOpen, setIsOpen] = useState(false);
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
  return (
    <div className="w-64 bg-muted/30 h-full overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Documents</h2>
        <div className="space-y-1">
          <div className="flex items-center py-1 px-2 hover:bg-muted/50 cursor-pointer">
            <Inbox className="h-4 w-4 mr-2" />
            <span>Inbox</span>
          </div>
          {initialTree.map((item) => (
            <TreeNode key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
