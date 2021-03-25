const express = require('express')
const app = express()
const cors = require("cors")
const PORT = process.env.PORT || 4000

app.use(express.json()) //req.body
app.use(cors())

app.use("/auth", require("./routes/jwtAuth"));
app.use("/dashboard", require("./routes/dashboard"))
app.listen(PORT, () =>{
    console.log(`Server running on ${PORT}`)
})