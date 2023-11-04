"use server";

import { sql } from "@vercel/postgres";
import { IJob } from "@/types";
import { unstable_noStore as noStore } from "next/cache";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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

export async function deleteJob(formData: FormData) {
  const id = formData.get("id")?.toString();

  try {
    await sql`DELETE FROM jobs WHERE id = ${id}`;
    revalidatePath("/dashboard");
  } catch (error) {
    console.log("Failed to delete job");
  }
}

export async function createJob(formData: FormData) {
  const company = formData.get("company")?.toString();
  const position = formData.get("position")?.toString();
  const status = formData.get("status")?.toString();
  const jobtype = formData.get("jobtype")?.toString();
  const location = formData.get("location")?.toString();
  const joblink = formData.get("joblink")?.toString();

  try {
    await sql`INSERT INTO jobs (company, position, status, jobtype, location, joblink) VALUES (${company}, ${position}, ${status}, ${jobtype},${location}, ${joblink})`;
  } catch (error) {
    console.log("Failed to create job");
    return;
  }
  revalidatePath("/dashboard");
  redirect("/dashboard");
}
