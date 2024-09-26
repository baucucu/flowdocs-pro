"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { File, Activity, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

// Hard-coded documents data
const documents = [
  {
    id: 1,
    name: "Invoice_001.pdf",
    status: "Processed",
    workflow: "Invoice Approval",
    workflowStatus: "Completed",
    assignedUser: {
      name: "John Doe",
      avatar: "/avatars/john-doe.png",
    },
    tags: ["Finance", "2023"],
  },
  {
    id: 2,
    name: "Contract_XYZ.docx",
    status: "Pending Review",
    workflow: "Contract Review",
    workflowStatus: "In Progress",
    assignedUser: {
      name: "Jane Smith",
      avatar: "/avatars/jane-smith.png",
    },
    tags: ["Legal", "Urgent"],
  },
  {
    id: 3,
    name: "Report_Q2.xlsx",
    status: "Draft",
    workflow: "Report Approval",
    workflowStatus: "Not Started",
    assignedUser: {
      name: "Bob Johnson",
      avatar: "/avatars/bob-johnson.png",
    },
    tags: ["Finance", "Quarterly"],
  },
];

export default function DocumentsPage() {
  const [selectedDocument, setSelectedDocument] = useState(null);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Documents</h1>
        <Button>Upload Document</Button>
      </div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search documents..."
              className="pl-8 w-[300px]"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">Sort</Button>
          <Button variant="outline">View</Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Workflow</TableHead>
            <TableHead>Assigned User</TableHead>
            <TableHead>Tags</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {documents.map((doc) => (
            <TableRow
              key={doc.id}
              onClick={() => setSelectedDocument(doc)}
              className="cursor-pointer hover:bg-muted/50"
            >
              <TableCell className="font-medium">
                <div className="flex items-center">
                  <File className="mr-2 h-4 w-4" />
                  {doc.name}
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    doc.status === "Processed"
                      ? "success"
                      : doc.status === "Pending Review"
                      ? "warning"
                      : "default"
                  }
                >
                  {doc.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Activity className="mr-2 h-4 w-4" />
                  {doc.workflow} ({doc.workflowStatus})
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage
                      src={doc.assignedUser.avatar}
                      alt={doc.assignedUser.name}
                    />
                    <AvatarFallback>
                      {doc.assignedUser.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  {doc.assignedUser.name}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {doc.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="flex items-center"
                    >
                      <Tag className="mr-1 h-3 w-3" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
