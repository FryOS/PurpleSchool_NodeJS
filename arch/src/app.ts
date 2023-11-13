import { UserController } from './users/UserController';
import express, { Express } from 'express';
import { Server } from 'http';
import { ExeptionFilter } from './errors/exeption.filter';
import { Ilogger } from './logger/logger.interface';
import { inject, injectable } from 'inversify';
import { TYPES } from './types';
import { json } from 'body-parser';
import 'reflect-metadata';

@injectable()
export class App {
	app: Express;
	server: Server | undefined;
	port: number;

	constructor(
		@inject(TYPES.Ilogger) private logger: Ilogger,
		@inject(TYPES.UserController) private userController: UserController,
		@inject(TYPES.ExeptionFilter) private exeptionFilter: ExeptionFilter,
	) {
		this.app = express();
		this.port = 8000;
	}

	useMiddleware(): void {
		this.app.use(json());
	}

	useRoutes(): void {
		this.app.use('./users', this.userController.router);
	}

	useExeptionFilters(): void {
		this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter));
	}

	public async init(): Promise<void> {
		this.useMiddleware();
		this.useRoutes();
		this.server = this.app.listen(this.port);
		this.logger.log(`Сервер запущен на https://localhost:${this.port}`);
	}
}
