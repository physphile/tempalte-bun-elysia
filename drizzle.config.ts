import "dotenv/config";
import { defineConfig } from "drizzle-kit";

if (
	!process.env.POSTGRES_DB ||
	!process.env.POSTGRES_USER ||
	!process.env.POSTGRES_PASSWORD ||
	!process.env.POSTGRES_HOST ||
	!process.env.POSTGRES_PORT
) {
	throw new Error("Missing environment variables");
}

export default defineConfig({
	out: "./drizzle",
	schema: "./src/database/schemas",
	dialect: "postgresql",
	dbCredentials: {
		ssl: false,
		database: process.env.POSTGRES_DB,
		host: process.env.POSTGRES_HOST,
		port: process.env.POSTGRES_PORT,
		user: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
	},
});
