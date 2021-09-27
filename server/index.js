
const express = require("express")

const path = require("path")

//create server object
const app = express()


app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, "../index.html"))
})


const port = process.env.PORT || 4400

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})

