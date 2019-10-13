import routes from "./routes/routes";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

class App {
  public express: express.Application;
  public constructor() {
    require("dotenv").config();
    this.express = express();
    this.database();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }
  private routes(): void {
    this.express.use(routes);
  }
  private database(): void {
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
    mongoose.set("useCreateIndex", true);
  }
}

export default new App().express;
