import express, { Request, Response } from "express"
import routes from "./router"
import "./database"
const app = express()

app.use(express.json())
app.use('/',routes)
app.get('/', (req: Request, res: Response) => {
    res.send("getting succesfully");
})

const port = 5000;
app.listen(port, () => {
    console.log("app listening" + port);
})
