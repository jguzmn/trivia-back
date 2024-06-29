import Joi from "joi"
import { response } from "./utils/response.js"
import user from "../models/user.js"
import bcrypt from 'bcrypt'

const user_regex = Joi.object({
    name: Joi.string().min(4).max(16).required(),
    nickname: Joi.string().min(4).max(16).required(),
    cel: Joi.string().min(10).max(15).required(),
    password: Joi.string().min(4).max(16).required(),
    confirm_password:Joi.ref('password'),
    email: Joi.string().min(6).max(56).email()
})

const register = async user_request => {

    const {error} = user_regex.validate(user_request)

    if (error) return response(false,error.details[0].message)

    const is_nickname  = await user.findOne({nickname:user_request.nickname})
    if (is_nickname) return response(false,'nickname already exist')

    const is_cel  = await user.findOne({cel:user_request.nickname})
    if (is_cel) return response(false,'celular already exist')

    delete user_request.confirm_password

    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(user_request.password,salt)

    user_request ={
        ...user_request,
        password:hash
    }

    const user_db = new user(user_request)

    const new_user = await user_db.save()

    return response(true,'user created',new_user)
}


const login = () => {

}

export {
    register,
    login
}