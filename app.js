import express from 'express'
import connection from './database/db.js';
import router from './routes/main.route.js';

const app = express()
const port = process.env.PORT;
app.use(express.json())

await connection()

app.use('/api',router)

app.get('*',(req,res)=>{
    res.status(404).json({
        msg:"not found"
    })
})

app.listen(port, () => console.log(`Server on port: ${port}`))