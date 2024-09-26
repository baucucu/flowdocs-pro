"use client";

import { Card, CardContent } from "@/components/ui/card";

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
    <Card>
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-2">Metadata</h2>
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
  );
}
