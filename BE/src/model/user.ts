import { model, Schema } from "mongoose";

interface IUser{
name? : string;
username? : string;
password? : string;
address? : string;
phone? : string
}

const userSchema = new Schema<IUser>({
    name : String,
    username: String,
    password : String,
    address : String,
    phone : String
})

const User = model<IUser>('User', userSchema);
export {User};