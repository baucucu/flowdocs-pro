"use client";

import DocumentInfoActions from "@/components/app-documents-id-document-info-actions";
import DocumentDisplay from "@/components/app-documents-id-document-display";
import MetadataDisplay from "@/components/app-documents-id-metadata-display";

import { useState } from "react";
import ViewMode from "@/components/app-documents-id-view-mode";

export default function DocumentViewerPage({ params }) {
  const [viewMode, setViewMode] = useState("both");
  return (
    <div className="space-y-6">
      <ViewMode viewMode={viewMode} setViewMode={setViewMode} />
      <DocumentInfoActions documentId={params.id} />
      <div className="grid lg:grid-cols-2 gap-4">
        <DocumentDisplay documentId={params.id} />
        <MetadataDisplay documentId={params.id} />
      </div>
    </div>
  );
}
