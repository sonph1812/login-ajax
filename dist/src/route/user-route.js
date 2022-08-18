"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controller/user.controller"));
exports.userRoute = (0, express_1.Router)();
var cors = require('cors');
exports.userRoute.post('/register', user_controller_1.default.Register);
exports.userRoute.post('/login', user_controller_1.default.loginUser);
exports.userRoute.get('/register', user_controller_1.default.getAll);
//# sourceMappingURL=user-route.js.map