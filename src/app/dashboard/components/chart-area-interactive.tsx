"use client"

import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Submission = {
  id: string
  name: string
  location: string
  description: string
  submittedBy: string
  submittedAt: string // ISO date string
}

const recentSubmissions: Submission[] = [
  {
    id: "1",
    name: "Manakamana Temple",
    location: "Gorkha",
    description: "A revered Hindu temple dedicated to Goddess Bhagwati, accessible via cable car.",
    submittedBy: "Sita KC",
    submittedAt: "2024-07-16",
  },
  {
    id: "2",
    name: "Rani Pokhari",
    location: "Kathmandu",
    description: "A historic artificial pond with cultural and religious significance.",
    submittedBy: "Bishal Tamang",
    submittedAt: "2024-07-15",
  },
  {
    id: "3",
    name: "Nuwakot Durbar",
    location: "Nuwakot",
    description: "An ancient palace complex reflecting Malla architecture, strategically significant during unification.",
    submittedBy: "Kamal Rana",
    submittedAt: "2024-07-14",
  },
  {
    id: "4",
    name: "Taleju Bhawani Temple",
    location: "Bhaktapur",
    description: "Dedicated to the royal goddess Taleju, built in typical Newari style with restricted access.",
    submittedBy: "Laxmi Shrestha",
    submittedAt: "2024-07-13",
  },
  {
    id: "5",
    name: "Budhanilkantha",
    location: "Kathmandu",
    description: "A stone sculpture of Lord Vishnu sleeping on a bed of serpents in a pool of water.",
    submittedBy: "Anil Bista",
    submittedAt: "2024-07-12",
  },
]

export function RecentSubmissions() {
  return (
    <div className="flex flex-col gap-4">
      <div className="px-4">
        <h2 className="text-xl font-semibold">Recent Submissions</h2>
        <p className="text-muted-foreground text-sm">
          New entries submitted to the heritage knowledge base
        </p>
      </div>

      <div className="flex overflow-x-auto gap-4 px-4 pb-4">
        {recentSubmissions.map((submission) => (
          <Card
            key={submission.id}
            className="min-w-[300px] max-w-sm flex-shrink-0"
          >
            <CardHeader>
              <CardTitle>{submission.name}</CardTitle>
              <CardDescription>{submission.location}</CardDescription>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p className="text-muted-foreground">{submission.description}</p>
              <p>
                <strong>Submitted by:</strong> {submission.submittedBy}
              </p>
              <p className="text-xs text-muted-foreground">
                {new Date(submission.submittedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
