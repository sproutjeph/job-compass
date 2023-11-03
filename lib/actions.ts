import { sql } from "@vercel/postgres";
import { IJob } from "@/types";

export async function fetchJobs() {
  try {
    const data = await sql<IJob>`SELECT * FROM jobs`;
    return data.rows;
  } catch (error) {
    console.log("Failed to fetch jobs");
  }
}
