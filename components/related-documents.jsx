'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const relatedFolders = [
  {
    name: "ABC Inc",
    documents: [
      {
        name: "Invoice_001.pdf",
        type: "Invoice",
        status: "Processed",
        workflow: "Invoice Approval (Completed)",
        assignedUser: { name: "John Doe", initials: "JD" },
        tags: ["Finance", "2023"]
      },
      {
        name: "Contract_ABC.docx",
        type: "Contract",
        status: "Pending Review",
        workflow: "Contract Review (In Progress)",
        assignedUser: { name: "Jane Smith", initials: "JS" },
        tags: ["Legal", "Urgent"]
      }
    ]
  },
  {
    name: "XYZ Corp",
    documents: [
      {
        name: "Report_Q2.xlsx",
        type: "Report",
        status: "Draft",
        workflow: "Report Approval (Not Started)",
        assignedUser: { name: "Bob Johnson", initials: "BJ" },
        tags: ["Finance", "Quarterly"]
      }
    ]
  }
]

export function RelatedDocumentsComponent() {
  return (
    (<div className="space-y-4">
      {relatedFolders.map((folder) => (
        <Card key={folder.name} className="overflow-hidden">
          <CardHeader className="py-3">
            <CardTitle className="text-lg">{folder.name}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="p-2 text-left font-medium text-muted-foreground">Name</th>
                  <th className="p-2 text-left font-medium text-muted-foreground">Type</th>
                  <th className="p-2 text-left font-medium text-muted-foreground">Status</th>
                  <th className="p-2 text-left font-medium text-muted-foreground">Workflow</th>
                  <th className="p-2 text-left font-medium text-muted-foreground">Assigned To</th>
                  <th className="p-2 text-left font-medium text-muted-foreground">Tags</th>
                </tr>
              </thead>
              <tbody>
                {folder.documents.map((doc, index) => (
                  <tr
                    key={doc.name}
                    className={index !== folder.documents.length - 1 ? "border-b" : ""}>
                    <td className="p-2">{doc.name}</td>
                    <td className="p-2">{doc.type}</td>
                    <td className="p-2">
                      <Badge
                        variant={doc.status === "Processed" ? "default" : doc.status === "Draft" ? "secondary" : "outline"}
                        className="text-xs">
                        {doc.status}
                      </Badge>
                    </td>
                    <td className="p-2">{doc.workflow}</td>
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage
                            src={`https://api.dicebear.com/6.x/initials/svg?seed=${doc.assignedUser.initials}`} />
                          <AvatarFallback>{doc.assignedUser.initials}</AvatarFallback>
                        </Avatar>
                        <span>{doc.assignedUser.name}</span>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="flex flex-wrap gap-1">
                        {doc.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      ))}
    </div>)
  );
}