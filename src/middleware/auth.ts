
// import { Request, Response } from 'express-session'
import jwt from 'jsonwebtoken'
let secretKey = '230193'
export const auth = async (req ,res  ,next) => {
    let authorization = req.headers.authorization
    let accessToken = authorization.split('')[1]
    if (!accessToken) {
        res.status(401).json({
            message : 'You are not USER!!!'
        });
    } else {
        jwt.verify(accessToken,secretKey,(err,data)=> {
            if (err) {
                res.status(401).json({
                    error : err.message,
                  message : "You are not USER!!!"  
                })
            } else {
                 req.decoded = data
                next()
            }
        })
    }
}