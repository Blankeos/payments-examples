import { Hono } from "hono";
import { csrf } from "hono/csrf";
import { authController } from "./modules/auth/auth.controller";
import { creemController } from "./modules/creem/creem.controller";

const app = new Hono();

app.use(csrf());

/**
 * The base router. Include all the routes here from `./routes/*`
 */
export const appRouter = app.route("/", authController).route("/", creemController);

export type AppRouter = typeof appRouter;
