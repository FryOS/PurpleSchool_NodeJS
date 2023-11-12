"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appContainer = exports.app = void 0;
const app_1 = require("./app");
const users_controller_1 = require("./users/users.controller");
const logger_service_1 = require("./logger/logger.service");
const exeption_filter_1 = require("./errors/exeption.filter");
const inversify_1 = require("inversify");
const types_1 = require("./types");
require("reflect-metadata");
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
const appContainer = new inversify_1.Container();
exports.appContainer = appContainer;
appContainer.bind(types_1.TYPES.Ilogger).to(logger_service_1.LoggerService);
appContainer.bind(types_1.TYPES.ExeptionFilter).to(exeption_filter_1.ExeptionFilter);
appContainer.bind(types_1.TYPES.UserController).to(users_controller_1.UserController);
appContainer.bind(types_1.TYPES.Application).to(app_1.App);
const app = appContainer.get(types_1.TYPES.Application);
exports.app = app;
app.init();
