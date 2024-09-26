"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function DocumentDisplayComponent({ documentId }) {
  // In a real application, you would fetch the document data here
  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-2">Document</h2>
        <div className="aspect-[3/4] bg-gray-100 flex items-center justify-center">
          {/* Replace this with actual document display */}
          <p className="text-gray-500">Document content for ID: {documentId}</p>
        </div>
      </CardContent>
    </Card>
  );
}
