import express from 'express'  //this is a basic server example
const app = express()
const port = 3000

app.get("/",(req,res) => {
    res.send(" dilshan u done it")
})

app.get("/home",(req,res) => [
    res.send("dilshan your done it")
])

//using variable =>
    app.get('/home/:slug', (req,res) => {
        res.send(`this is page of ${req.params.slug}`)
    })

app.listen(port,() => {
    console.log(`the url is localhost:${port}`)
})