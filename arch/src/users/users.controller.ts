import { NextFunction, Request, Response } from 'express';
import { injectable, inject } from 'inversify';
import { Ilogger } from '../logger/logger.interface.js';
import 'reflect-metadata';
import { IUserController } from './users.controller.interface.js';
import { TYPES } from '../types.js';
import { BaseController } from '../common/base.controller.js';

@injectable()
export class UserController extends BaseController implements IUserController {
	constructor(@inject(TYPES.Ilogger) private loggerService: Ilogger) {
		super(loggerService);
		this.bindRoutes([
			{
				path: '/register',
				method: 'post',
				func: this.register,
			},
			{
				path: '/login',
				method: 'post',
				func: this.login,
			},
		]);
	}

	login(req: Request, res: Response, next: NextFunction): void {
		this.ok(res, 'login');
	}
	register(req: Request, res: Response, next: NextFunction): void {
		this.ok(res, 'register');
	}
}
