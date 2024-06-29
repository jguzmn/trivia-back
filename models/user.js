import { Schema,model } from "mongoose"

const user_schema = Schema({
    name: {
        type: String,
        require: true,
        min: 4,
        max:16
    },
    nickname: {
        type: String,
        require: true,
        min: 4,
        max:16
    },
    password: { 
        type: String, 
        require: true,
        min:6,
        max:256
    },
    cel: { 
        type: String,
        min:10,
        max:15
    },
    email: {
         type: String,
         min:6,
         max:24

        },
    date: {
        type: Date,
        default: Date.now
    }
})

export default model('user', user_schema)