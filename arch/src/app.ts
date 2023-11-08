import { UserController } from "../users/users.controller";
import express, { Express } from "express";
import { userRouter } from "../users/users.js";
import { Server } from "http";
import { LoggerService } from "./logger/logger.service.js";
import { ExeptionFilter } from "./errors/exeption.filter";

export class App {
  app: Express;
  server: Server | undefined;
  port: number;
  logger: LoggerService;
  userController: UserController;
  exeptionFilter: ExeptionFilter;

  constructor(logger: LoggerService, userController: UserController, exeptionFilter: ExeptionFilter) {
    this.app = express();
    this.port = 8000;
    this.logger = logger;
    this.userController = userController;
    this.exeptionFilter = exeptionFilter;
  }

  useRoutes() {
    this.app.use("./users", this.userController.router);
  }

  useExeptionFilters(){
    this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter))
  }

  public async init() {
    this.useRoutes();
    this.server = this.app.listen(this.port);
    this.logger.log(`Сервер запущен на https://localhost:${this.port}`);
  }
}
