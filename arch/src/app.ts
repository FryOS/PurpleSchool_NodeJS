import { UserController } from "./users/users.controller";
import express, { Express } from "express";
import { userRouter } from "./users/users.js";
import { Server } from "http";
import { LoggerService } from "./logger/logger.service.js";
import { ExeptionFilter } from "./errors/exeption.filter";
import { Ilogger } from "./logger/logger.interface";
import { inject, injectable } from "inversify";
import { TYPES } from "./types";
import 'reflect-metadata';

@injectable()
export class App {
  app: Express;
  server: Server | undefined;
  port: number;

  constructor(
    @inject(TYPES.Ilogger) private logger:Ilogger,
    @inject(TYPES.UserController) private userController:UserController,
    @inject(TYPES.ExeptionFilter) private exeptionFilter:ExeptionFilter,

  ) {
    this.app = express();
    this.port = 8000;
  }

  useRoutes() {
    this.app.use("./users", this.userController.router);
  }

  useExeptionFilters() {
    this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter));
  }

  public async init() {
    this.useRoutes();
    this.server = this.app.listen(this.port);
    this.logger.log(`Сервер запущен на https://localhost:${this.port}`);
  }
}
