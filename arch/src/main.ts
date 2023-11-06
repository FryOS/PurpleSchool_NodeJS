import {App}  from "./app";
import { UserController } from "./common/users.controller";
import { LoggerService } from "./logger/logger.service";

async function bootstrap(){
    const logger = new LoggerService();
    const app = new App(new LoggerService(), new UserController(logger));
    await app.init();
}

bootstrap();