"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FileText, Info, Columns } from "lucide-react";

export default function ViewModeComponent({ viewMode, setViewMode }) {
  return (
    <TooltipProvider>
      <ToggleGroup
        type="single"
        value={viewMode}
        onValueChange={(value) => setViewMode(value)}
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <ToggleGroupItem value="document" aria-label="View document">
              <FileText className="h-4 w-4" />
            </ToggleGroupItem>
          </TooltipTrigger>
          <TooltipContent>
            <p>View document</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <ToggleGroupItem value="metadata" aria-label="View metadata">
              <Info className="h-4 w-4" />
            </ToggleGroupItem>
          </TooltipTrigger>
          <TooltipContent>
            <p>View metadata</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <ToggleGroupItem value="both" aria-label="View both">
              <Columns className="h-4 w-4" />
            </ToggleGroupItem>
          </TooltipTrigger>
          <TooltipContent>
            <p>View both</p>
          </TooltipContent>
        </Tooltip>
      </ToggleGroup>
    </TooltipProvider>
  );
}
