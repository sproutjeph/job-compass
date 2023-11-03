const { users, jobs } = require("../lib/placeholder-data.js");
const { sql } = require("@vercel/postgres");
const bcrypt = require("bcrypt");

async function seedUsers() {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        avatar VARCHAR(255)
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return sql`
        INSERT INTO users (id, name, email, password, avatar)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.avatar})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function seedJobs() {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "jobs" table if it doesn't exist
    const createTable = await sql`
      CREATE TABLE IF NOT EXISTS jobs (
         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        company VARCHAR(255) NOT NULL,
        position VARCHAR(255) NOT NULL,
        status VARCHAR(255) NOT NULL,
        jobType VARCHAR(255) NOT NULL,
        location VARCHAR(255),
         date DATE DEFAULT NOW(),
         jobLink VARCHAR(255)
      );
    `;

    console.log(`Created "jobs" table`);

    // Insert data into the "jobs" table
    const insertedJobs = await Promise.all(
      jobs.map(async (job) => {
        return sql`
        INSERT INTO jobs ( company, position, status, jobType, location, date, jobLink)
        VALUES ( ${job.company}, ${job.position}, ${job.status}, ${job.jobType}, ${job.location}, ${job.date}, ${job.jobLink});
      `;
      })
    );

    console.log(`Seeded ${insertedJobs.length} jobs`);

    return {
      createTable,
      jobs: insertedJobs,
    };
  } catch (error) {
    console.error("Error seeding jobs:", error);
    throw error;
  }
}

(async () => {
  // await seedUsers();
  await seedJobs();
})();
