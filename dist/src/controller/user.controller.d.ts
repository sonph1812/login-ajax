import { Request, Response } from "express";
declare class UserController {
    getAll(req: Request, res: Response): Promise<void>;
    Register(req: Request, res: Response): Promise<void>;
    loginUser(req: Request, res: Response): Promise<void>;
}
declare const _default: UserController;
export default _default;
