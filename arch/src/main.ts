import { App } from "./app";
import { UserController } from "./users/users.controller";
import { LoggerService } from "./logger/logger.service";
import { ExeptionFilter } from "./errors/exeption.filter";
import { Container } from "inversify";
import { Ilogger } from "./logger/logger.interface";
import { TYPES } from "./types";
import { IExeptionFilter } from "./errors/exeption.filter.interface";
import 'reflect-metadata';

// async function bootstrap() {

//   //старый DI
//   // const logger = new LoggerService();
//   // const app = new App(
//   //   new LoggerService(),
//   //   new UserController(logger),
//   //   new ExeptionFilter(logger)
//   // );

//   const appContainer = new Container();
//   appContainer.bind<Ilogger>(TYPES.Ilogger).to(LoggerService);
//   appContainer.bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter);
//   appContainer.bind<UserController>(TYPES.UserController).to(UserController);
//   appContainer.bind<App>(TYPES.Application).to(App);
//   const app = appContainer.get<App>(TYPES.Application)
//   await app.init();
// }

// bootstrap();

const appContainer = new Container();
appContainer.bind<Ilogger>(TYPES.Ilogger).to(LoggerService);
appContainer.bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter);
appContainer.bind<UserController>(TYPES.UserController).to(UserController);
appContainer.bind<App>(TYPES.Application).to(App);
const app = appContainer.get<App>(TYPES.Application);
app.init();

export { app, appContainer };
