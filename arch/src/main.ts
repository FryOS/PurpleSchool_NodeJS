import { App } from "./app";
import { UserController } from "./users/users.controller";
import { LoggerService } from "./logger/logger.service";
import { ExeptionFilter } from "./errors/exeption.filter";
import { Container, ContainerModule, interfaces } from "inversify";
import { Ilogger } from "./logger/logger.interface";
import { TYPES } from "./types";
import { IExeptionFilter } from "./errors/exeption.filter.interface";
import "reflect-metadata";

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
  bind<Ilogger>(TYPES.Ilogger).to(LoggerService);
  bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter);
  bind<UserController>(TYPES.UserController).to(UserController);
  bind<App>(TYPES.Application).to(App);
});

function bootstrap(){
    const appContainer = new Container();
    appContainer.load(appBindings);
    const app = appContainer.get<App>(TYPES.Application);
    app.init();
    return { app, appContainer };
}

export const { app, appContainer } = bootstrap();