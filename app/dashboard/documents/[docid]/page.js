"use client";

import DocumentInfoActions from "@/components/app-documents-id-document-info-actions";
import MetadataDisplay from "@/components/app-documents-id-metadata-display";

import { useState } from "react";

export default function DocumentViewerPage({ params }) {
  const [viewMode, setViewMode] = useState("both");
  return (
    <div className="space-y-6">
      <DocumentInfoActions documentId={params.id} />
      <MetadataDisplay documentId={params.id} />
    </div>
  );
}
