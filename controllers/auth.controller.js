import { register as register_service, login as login_service } from "../service/auth.service.js"
import { constants } from "../service/utils/constants.js"

const {status} = constants.response


const register = async (req, res) => {
    const user_db = await register_service(req.body)  

    if(!user_db) return res.status().json()
    res.status(status.OK).json(user_db)

}

const login = async (req, res) => {
    const user_db = await login_service(req.body)  

    if(!user_db) return res.status().json()
    res.status(status.OK).json(user_db)
}

export {
    register,
    login
}