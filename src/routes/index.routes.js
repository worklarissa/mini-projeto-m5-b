import { Router } from "express"
import { filmsRoutes } from "./routes.js"

export const routes = Router();

routes.use(filmsRoutes)