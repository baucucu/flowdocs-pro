"use client";
import { useState } from "react";
import { format } from "date-fns";
import {
  Clock,
  User,
  CheckCircle,
  XCircle,
  RefreshCw,
  PlusCircle,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const historyData = [
  {
    id: "1",
    timestamp: new Date("2023-09-15T10:30:00"),
    user: "John Doe",
    actionType: "approved",
    details:
      "Approved invoice #INV-2023-001. Total amount: $1,200.00. Approval notes: All items verified and correct.",
  },
  {
    id: "2",
    timestamp: new Date("2023-09-14T14:45:00"),
    user: "Jane Smith",
    actionType: "updated",
    details:
      "Updated invoice #INV-2023-001. Changed amount from $1,000.00 to $1,200.00. Reason: Additional service added.",
  },
  {
    id: "3",
    timestamp: new Date("2023-09-13T09:15:00"),
    user: "Alice Johnson",
    actionType: "rejected",
    details:
      "Rejected invoice #INV-2023-001. Reason: Missing signature on page 2. Action required: Please have the client sign and resubmit.",
  },
  {
    id: "4",
    timestamp: new Date("2023-09-12T11:00:00"),
    user: "Bob Williams",
    actionType: "created",
    details:
      "Created new invoice #INV-2023-001. Client: Acme Corp. Total amount: $1,000.00. Due date: 2023-10-12.",
  },
];

const actionTypeConfig = {
  approved: { icon: CheckCircle, color: "bg-green-100 text-green-800" },
  rejected: { icon: XCircle, color: "bg-red-100 text-red-800" },
  updated: { icon: RefreshCw, color: "bg-blue-100 text-blue-800" },
  created: { icon: PlusCircle, color: "bg-purple-100 text-purple-800" },
};

export function HistoryTabComponent() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Document History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Timestamp</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {historyData.map((item) => {
              const { icon: ActionIcon, color } =
                actionTypeConfig[item.actionType];
              return (
                <TableRow
                  key={item.id}
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => setSelectedItem(item)}
                >
                  <TableCell>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      {format(item.timestamp, "yyyy-MM-dd HH:mm")}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      {item.user}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={`${color} capitalize`}
                    >
                      <ActionIcon className="mr-1 h-4 w-4 inline" />
                      {item.actionType}
                    </Badge>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Dialog
          open={!!selectedItem}
          onOpenChange={() => setSelectedItem(null)}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>History Details</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              {selectedItem && (
                <div className="mt-4 space-y-2">
                  <p>
                    <strong>Timestamp:</strong>{" "}
                    {format(selectedItem.timestamp, "yyyy-MM-dd HH:mm:ss")}
                  </p>
                  <p>
                    <strong>User:</strong> {selectedItem.user}
                  </p>
                  <p>
                    <strong>Action:</strong> {selectedItem.actionType}
                  </p>
                  <p>
                    <strong>Details:</strong> {selectedItem.details}
                  </p>
                </div>
              )}
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
