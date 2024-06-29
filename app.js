import express from 'express'
import mongoose, { Schema,model } from 'mongoose';


const app = express()
const port = process.env.PORT;

const userdb = process.env.USERDB
const passdb = process.env.PASSDB
const host = process.env.HOSTDB
const namedb = process.env.NAMEDB

const url = `mongodb+srv://${userdb}:${passdb}@${host}/?retryWrites=true&w=majority&appName=${namedb}`

console.log(url)

app.use(express.json())

try {
    await mongoose.connect(url)
    console.log('Database connected');
} catch (error) {
    console.log('Error database', error);
}

const user_schema = Schema({
    name: {
        type: String,
        require: true
    },
    nickname: { 
        type: String,
        require: true
    },
    password: {type:String,require:true},
    cel: {type:String},
    email: {type:String},
    date: {
        type: Date,
        default: Date.now
    }
})

const user = model('user',user_schema)

const first_user = new user({
    name: 'Jhon Doe',
    nickname: 'jdoe',
    password: '123',
    cel: '',
    email:'123@gmail.com'
})

try {
    await first_user.save()
} catch(error){
    console.log(error)
}

app.listen(port, () => console.log(`Server on port: ${port}`))