import express from "express"
import { filmsRouter} from "./routes/routes.js"

const app = express()

app.use(express.json())
app.use(filmsRouter);

app.get("/test", function (req, res){
    res.send("Está funcionando")
})

let port = 3333;



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});