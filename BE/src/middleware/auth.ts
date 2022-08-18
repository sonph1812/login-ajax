
import jwt from 'jsonwebtoken'
let secretKey = '230193'
export const auth = (req ,res,next) => {
    let accessToken = req.headers.authorization.split('')[1]
    if (!accessToken) {
        res.status(401).json({
            message : 'You are not USER!!!'
        })
    } else {
        jwt.verify(accessToken,secretKey,(err,data)=> {
            if (err) {
                res.status(404).json({
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