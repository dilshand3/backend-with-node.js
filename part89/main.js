import express from 'express'
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
    console.log("hey its a get request");
    res.send("hello dilshan how are u?")
})

app.post('/home', (req, res) => {
    console.log("this is my post request")
    res.send("this is a post request")
})
app.put('/put',(req,res) => {
    console.log(("this is put request"));
    res.send("hello world put request")
})

app.listen(port, () => {
    console.log(`your app is running on port ${port}`)
})