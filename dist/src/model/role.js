"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const mongoose_1 = require("mongoose");
const RoleSchema = new mongoose_1.Schema({
    admin: Number,
    customer: Number,
    user: Number,
});
const Role = (0, mongoose_1.model)('Role', RoleSchema);
exports.Role = Role;
//# sourceMappingURL=role.js.map