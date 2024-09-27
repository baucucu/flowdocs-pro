"use client";
import { Card, CardContent } from "@/components/ui/card";

export function DocumentViewerComponent({ documentId }) {
  return (
    <Card>
      <CardContent className="p-4 space-y-2">
        <div className="aspect-[3/4] bg-gray-100 flex items-center justify-center">
          {/* Replace this with actual document display */}
          <p className="text-gray-500">Document content for ID: {documentId}</p>
        </div>
      </CardContent>
    </Card>
  );
}
