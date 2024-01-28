import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import latihanRoutes from "./routes/latihanRoutes.js"

const app = express()
dotenv.config()

app.use(express.json())
app.use(cors())
app.use(latihanRoutes)


app.listen(process.env.PORT, () => {
    console.log("SERVER JALAN")
})