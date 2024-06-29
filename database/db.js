
import mongoose from "mongoose"

const userdb = process.env.USERDB
const passdb = process.env.PASSDB
const host = process.env.HOSTDB
const namedb = process.env.NAMEDB

const url = `mongodb+srv://${userdb}:${passdb}@${host}/?retryWrites=true&w=majority&appName=${namedb}`

console.log(url)

const connection = async () => {


    try {
        await mongoose.connect(url)
        console.log('Database connected');
    } catch (error) {
        console.log('Error database', error);
        process.exit(1)
    }
}

export default connection