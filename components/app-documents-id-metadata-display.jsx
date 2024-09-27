import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  MessageSquareText,
  FileClock,
  Info,
  FolderSymlink,
  FileText,
} from "lucide-react";
import { HistoryTabComponent } from "./history-tab";
import { MessagesTabComponent } from "./messages-tab";
import { RelatedDocumentsComponent } from "./related-documents";
import { DocumentViewerComponent } from "./document-tab";

export default function MetadataDisplayComponent({ documentId }) {
  // In a real application, you would fetch the metadata here
  const metadata = {
    title: "Sample Document",
    author: "John Doe",
    createdAt: "2023-09-15",
    fileType: "PDF",
    size: "1.2 MB",
  };

  return (
    <Tabs defaultValue="metadata">
      <TabsList className="sticky top-0 z-10 grid w-full grid-cols-5">
        <TabsTrigger value="metadata">
          <Info className="w-4 h-4 md:mr-2" />
          Metadata
        </TabsTrigger>
        <TabsTrigger value="document">
          <FileText className="h-4 w-4 md:mr-2" />
          Document
        </TabsTrigger>
        <TabsTrigger value="related">
          <FolderSymlink className="h-4 w-4 md:mr-2" />
          Related Docs
        </TabsTrigger>
        <TabsTrigger value="history">
          <FileClock className="w-4 h-4 md:mr-2" />
          History
        </TabsTrigger>
        <TabsTrigger value="messages">
          <MessageSquareText className="h-4 w-4 md:mr-2" />
          Messages
        </TabsTrigger>
      </TabsList>
      <TabsContent value="metadata">
        <Card>
          <CardHeader>
            <CardTitle>Document Metadata</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <dl className="grid grid-cols-2 gap-2">
              {Object.entries(metadata).map(([key, value]) => (
                <div key={key}>
                  <dt className="font-medium text-gray-500">{key}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="document">
        <DocumentViewerComponent />
      </TabsContent>
      <TabsContent value="history">
        <HistoryTabComponent />
      </TabsContent>
      <TabsContent value="messages">
        <MessagesTabComponent />
      </TabsContent>
      <TabsContent value="related">
        <RelatedDocumentsComponent />
      </TabsContent>
    </Tabs>
  );
}
