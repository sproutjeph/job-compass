import { sql } from "@vercel/postgres";
import { IJob } from "@/types";
import { unstable_noStore as noStore } from "next/cache";

interface IJobCount {
  total: number;
}

export async function fetchJobs(page = 1, searchTerm = "") {
  const limit = 5;
  const offset = (page - 1) * limit;

  try {
    // noStore();

    const data = await sql<IJob>`SELECT * FROM jobs WHERE company ILIKE ${
      "%" + searchTerm + "%"
    } LIMIT ${limit} OFFSET ${offset}`;
    const countData =
      await sql<IJobCount>`SELECT COUNT(*) as total FROM jobs WHERE company ILIKE ${
        "%" + searchTerm + "%"
      }`;
    const total = countData.rows[0].total;
    const pages = Math.ceil(total / limit);

    return {
      jobs: data.rows,
      pages: pages,
    };
  } catch (error) {
    console.log("Failed to fetch jobs");
  }
}
