import { Router } from "express";
import { test } from "../controllers/main.controller.js";
import auth_router from "./auth.route.js";
import { valid_token } from "../service/middleware/valid-token.js";

const router = Router()

router.get('/test',test)

router.use('/auth',auth_router)

const middle = (req,res,next)=>{
    const {authorization} = req.headers

    if(!authorization) return res.status(401).json({
        msg:'autenticate'
    })
    next()
}

const contro =(req,res)=>{

    res.status(200).json({
        msg:'Tu score es 100'
    })
}

router.get('/score',valid_token,contro)

export default router