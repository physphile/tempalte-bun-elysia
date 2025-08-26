import "dotenv/config";
import { defineConfig } from "drizzle-kit";

if (
  !process.env.POSTGRES_DB ||
  !process.env.POSTGRES_USER ||
  !process.env.POSTGRES_PASSWORD
) {
  throw new Error("Missing environment variables");
}

export default defineConfig({
  out: "./drizzle",
  schema: "./src/database/schemas",
  dialect: "postgresql",
  dbCredentials: {
    database: process.env.POSTGRES_DB,
    host: "db",
    port: 5433,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  },
});
