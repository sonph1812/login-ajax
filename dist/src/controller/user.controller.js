"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../model/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserController {
    async getAll(req, res) {
        let user = await user_1.User.find();
        res.status(200).json(user);
    }
    async Register(req, res) {
        let user = req.body;
        user.password = await bcrypt_1.default.hash(user.password, 10);
        user = await user_1.User.create(user);
        res.status(200).json(user);
    }
    async loginUser(req, res) {
        let login = req.body;
        let user = await user_1.User.findOne({
            username: login.username,
        });
        if (!user) {
            res.status(404).json({
                message: 'Username is not exist!!!'
            });
        }
        else {
            let comparePassword = await bcrypt_1.default.compare(login.password, user.password);
            if (!comparePassword) {
                res.status(401).json({
                    message: 'Password is wrong!!!'
                });
            }
            else {
                let payload = {
                    username: user.username,
                    password: user.password
                };
                let secretKey = '230193';
                let token = await jsonwebtoken_1.default.sign(payload, secretKey, {
                    expiresIn: 36000
                });
                res.status(200).json({
                    token: token
                });
            }
        }
    }
}
exports.default = new UserController;
//# sourceMappingURL=user.controller.js.map