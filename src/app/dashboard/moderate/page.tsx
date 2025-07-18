"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

type FormData = {
  id: number;
  name: string;
  email: string;
  message: string;
  status: "pending" | "approved" | "rejected";
};

const initialForms: FormData[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    message: "Please approve me.",
    status: "pending",
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    message: "Looking forward to it.",
    status: "pending",
  },
  {
    id: 3,
    name: "Charlie",
    email: "charlie@example.com",
    message: "Need your review.",
    status: "pending",
  },
];

export default function ModeratorPage() {
  const [forms, setForms] = useState<FormData[]>(initialForms);

  function updateStatus(id: number, newStatus: "approved" | "rejected") {
    setForms((current) =>
      current.map((form) =>
        form.id === id ? { ...form, status: newStatus } : form
      )
    );
  }

  function getStatusBadge(status: FormData["status"]) {
    switch (status) {
      case "approved":
        return <Badge variant="success">Approved</Badge>;
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>;
      case "pending":
      default:
        return <Badge variant="warning">Pending</Badge>;
    }
  }

  return (
    <main className=" m-auxto p-8 bg-background min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Moderator - Review Forms</h1>

      {forms.length === 0 ? (
        <p>No forms to review.</p>
      ) : (
        <ul className="space-y-6">
          {forms.map(({ id, name, email, message, status }) => (
            <Card key={id} className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{name}</span>
                  {getStatusBadge(status)}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  <strong>Email:</strong> {email}
                </p>
                <p>
                  <strong>Message:</strong> {message}
                </p>

                {status === "pending" && (
                  <>
                    <Separator className="my-2" />
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        onClick={() => updateStatus(id, "approved")}
                        className="bg-green-600 text-white hover:bg-green-700"
                      >
                        Approve
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => updateStatus(id, "rejected")}
                        className="bg-red-600 text-white hover:bg-red-700"
                      >
                        Reject
                      </Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </ul>
      )}
    </main>
  );
}
