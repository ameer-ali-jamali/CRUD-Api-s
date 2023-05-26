const { response } = require('express')
const http = require('http')
const port = process.env.PORT || 3000
const server = http.createServer((req, res) => {
    res.StatusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end("<h1>hello world</h1>")
})
server.listen(port, () => {
    console.log(`server listening on port ${port}`)
})