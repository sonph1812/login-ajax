import { model, Schema } from "mongoose";

interface IRole{
admin? : number;
customer? : number;
user? : number;
}

const RoleSchema = new Schema<IRole> ({
    admin : Number,
    customer: Number,
    user : Number,
})

const Role = model<IRole>('Role', RoleSchema);
export {Role};