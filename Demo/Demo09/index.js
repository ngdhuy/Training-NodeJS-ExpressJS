const express = require('express')
const app = express()
const port = 3000

var fs = require('fs')
var path = require('path')
var filePath = path.join(__dirname, './data/data.js')

app.get('/readfile', (req, res) => {
    fs.readFile(filePath, {encoding: 'utf-8'}, (err,data) => {
        if (!err) {
            console.log('received data: ' + data)
            // Cach 01
            // res.writeHead(200, {'Content-Type': 'text/json'})
            // res.write(data)
            // res.end()

            // Cach 02
            res.set('status', 200)
            res.set('Content-Type', 'text/json')
            res.send(data)
        } else {
            console.log(err)
        }
    });
})


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))