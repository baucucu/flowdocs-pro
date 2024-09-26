"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  FileSearch,
  Database,
  Bot,
  CheckCircle,
  XCircle,
  Send,
} from "lucide-react";

export default function DocumentInfoActionsComponent({ documentId }) {
  const [isGenerateModalOpen, setIsGenerateModalOpen] = useState(false);

  // In a real application, you would fetch this data based on the documentId
  const documentInfo = {
    classification: "Invoice",
    status: "In Progress",
    tags: ["Finance", "Q3", "2023"],
    workflow: {
      name: "Invoice Processing",
      status: "Approval Pending",
    },
    assigned: {
      user: "Jane Doe",
      groups: ["Finance Team", "Accounts Payable"],
      roles: ["Approver"],
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Document Information & Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">
                Classification
              </h3>
              <p className="text-lg font-semibold">
                {documentInfo.classification}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">
                Status
              </h3>
              <Badge variant="outline">{documentInfo.status}</Badge>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {documentInfo.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">
                Active Workflow
              </h3>
              <p className="text-lg font-semibold">
                {documentInfo.workflow.name}
              </p>
              <Badge variant="outline">{documentInfo.workflow.status}</Badge>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">
                Assigned
              </h3>
              <p>
                <strong>User:</strong> {documentInfo.assigned.user}
              </p>
              <p>
                <strong>Groups:</strong>{" "}
                {documentInfo.assigned.groups.join(", ")}
              </p>
              <p>
                <strong>Roles:</strong> {documentInfo.assigned.roles.join(", ")}
              </p>
            </div>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <Button variant="outline" size="sm" className="w-full">
              <CheckCircle className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">Approve</span>
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              <XCircle className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">Reject</span>
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              <Send className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">Send to</span>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <Button variant="outline" size="sm" className="w-full">
              <FileSearch className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">Classify</span>
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              <Database className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">Extract Data</span>
            </Button>
            <Dialog
              open={isGenerateModalOpen}
              onOpenChange={setIsGenerateModalOpen}
            >
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="w-full">
                  <Bot className="h-4 w-4 md:mr-2" />
                  <span className="hidden md:inline">Generate Text</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Generate Text</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <RadioGroup defaultValue="summary">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="summary" id="summary" />
                      <Label htmlFor="summary">Generate Summary</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="response" id="response" />
                      <Label htmlFor="response">Generate Response</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="custom" id="custom" />
                      <Label htmlFor="custom">Custom Prompt</Label>
                    </div>
                  </RadioGroup>
                  <div>
                    <Label htmlFor="custom-prompt">Custom Prompt</Label>
                    <Input
                      id="custom-prompt"
                      placeholder="Enter your custom prompt here"
                    />
                  </div>
                  <Button onClick={() => setIsGenerateModalOpen(false)}>
                    Generate
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
