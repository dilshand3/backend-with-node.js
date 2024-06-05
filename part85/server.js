import express from 'express'  //this is a basic server example
const app = express()
const port = 3000

app.get("/",(req,res) => {
    res.send(" dilshan u done it")
})

app.get("/home",(req,res) => [
    res.send("dilshan your done it")
])

app.listen(port,() => [
    console.log(`the url is https://localhost:${port}`)
])