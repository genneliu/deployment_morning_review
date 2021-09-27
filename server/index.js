
const express = require("express")

const path = require("path")

//create server object
const app = express()


app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, "../index.html"))
})

app.get('/styles', (req, res) => { 
    res.sendFile(path.join(__dirname, "../styles.css"))
})


const port = process.env.PORT || 4400

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})

