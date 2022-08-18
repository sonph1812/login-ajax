
import bcrypt from "bcrypt"
import { Request, Response } from "express";
import { User } from "../model/user";
import jwt from "jsonwebtoken"
import path from 'path'
class UserController{
    async  getAll(req: Request, res : Response) {
        let user = await User.find();
        res.status(200).json(user)
    }


    async Register(req: Request, res : Response)  {
        let user = req.body
        user.password = await bcrypt.hash(user.password,10);
        user = await User.create(user);
        res.status(200).json(user)
    }


    async loginUser(req: Request, res : Response) {
        let login = req.body
        let user  = await User.findOne({
            username : login.username,
        })
        if(!user) {
            res.status(404).json({
                message : 'Username is not exist!!!'
            })
        } else {
            let comparePassword = await bcrypt.compare (login.password, user.password)
            if(! comparePassword) {
                res.status(401).json({
                    message : 'Password is wrong!!!'
                })
            } else {
                let payload = {
                    username : user.username,
                    password : user.password
                }
                
                let secretKey = '230193'
                let token = await jwt.sign(payload,secretKey,{
                    expiresIn : 36000
                });
                res.status(200).json({
                    token  : token
                })
            }
        }
    }

    // async showFormHome(req: Request, res : Response, next)  {
    //     try {
    //         let secretKey = '230193'
    //         let token = req.params.token
    //        let result = jwt.verify(token,secretKey)
    //        if(result) {
    //         next()
    //        }
    //     } catch (error) {
    //         return res.json('Phai login')
            
    //     }
    // }

}

export default new UserController