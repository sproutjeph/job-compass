import { sql } from "@vercel/postgres";
import { IJob } from "@/types";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchJobs() {
  try {
    // noStore();
    const data = await sql<IJob>`SELECT * FROM jobs`;
    return data.rows;
  } catch (error) {
    console.log("Failed to fetch jobs");
  }
}
