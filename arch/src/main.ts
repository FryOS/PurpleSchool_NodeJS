import { App } from "./app";
import { UserController } from "../users/users.controller";
import { LoggerService } from "./logger/logger.service";
import { ExeptionFilter } from "./errors/exeption.filter";

async function bootstrap() {
  const logger = new LoggerService();
  const app = new App(
    new LoggerService(),
    new UserController(logger),
    new ExeptionFilter(logger)
  );
  await app.init();
}

bootstrap();
