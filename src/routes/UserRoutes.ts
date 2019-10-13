import { Router } from "express";
import {
  UserCreate,
  AuthenticateUsername,
  getAllUsers
} from "../controller/UserController";

const routes = Router();

routes.post("/createUser", UserCreate);
routes.post("/authenticate", AuthenticateUsername);
routes.get("/users", getAllUsers);

export default routes;
