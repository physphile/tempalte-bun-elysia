import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db, client } from "./db";

// This will run migrations on the database, skipping the ones that have already been applied
async function main() {
    console.log("Running migrations...");
    
    await migrate(db, { migrationsFolder: "drizzle" });
    
    console.log("Migrations finished!");
    
    // After migrating, we need to close the connection to the database
    await client.end();
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
