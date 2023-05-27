const express = require('express')
const app = express()
const path = require('path')


const pubicPath = path.join(__dirname, 'public')

app.get('/', (req, res) => {
    res.sendFile(`${pubicPath}index.html`)
})
app.get('/about', (req, res) => {
    res.sendFile(`${pubicPath}index.html`)
})
app.get('/contactUs', (req, res) => {
    res.sendFile(`${pubicPath}index.html`)
})
module.exports = app
