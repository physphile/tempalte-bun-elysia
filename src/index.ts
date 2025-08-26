import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { OpenAPI } from "./OpenAPI";
import { betterAuth } from "./betterAuth";

new Elysia()
  .use(cors())
  .use(
    swagger({
      path: "/docs",
      documentation: {
        components: await OpenAPI.components,
        paths: await OpenAPI.getPaths(),
      },
    })
  )
  .use(betterAuth)
  .get("/user", ({ user }) => user, {
    auth: true,
  })
  .listen(3000);

console.log("Swagger docs available at http://localhost:3000/docs");
