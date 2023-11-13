import { NextFunction, Request, Response } from 'express';
import { injectable, inject } from 'inversify';
import { Ilogger } from '../logger/logger.interface.js';
import { IUserController } from './users.controller.interface.js';
import { TYPES } from '../types.js';
import { BaseController } from '../common/base.controller.js';
import { UserRegisterDto } from './dto/user-register.dto.js';
import { UserLoginDto } from './dto/user-login.dto.js';

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

	login(req: Request<{}, {}, UserLoginDto>, res: Response, next: NextFunction): void {
		this.ok(res, 'login');
	}
	register(req: Request<{}, {}, UserRegisterDto>, res: Response, next: NextFunction): void {
		this.ok(res, 'register');
	}
}
