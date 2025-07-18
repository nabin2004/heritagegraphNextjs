import { RecentSubmissions } from "@/app/dashboard/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/app/dashboard/components/section-cards"
import { ThemeProvider } from "next-themes";

import data from "./data.json"

export default function Page() {
  return (
    <>
      <SectionCards />
      <div className="px-4 lg:px-6">
        <RecentSubmissions />
      </div>
      <DataTable data={data} />
    </>
  )
}
