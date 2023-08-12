const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 3000

const routes = require("./routes")


app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use("/", routes)

app.listen(port, () => {
    console.log(`Server is running ${port}`)
})



