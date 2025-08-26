import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

export const client = new Client({
  connectionString: process.env.DATABASE_URL!,
  host: "db",
  port: 5433,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

await client.connect();
export const db = drizzle(client);
