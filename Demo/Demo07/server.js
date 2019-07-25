const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/', (req, res) => res.send('POST Method'))
app.put('/', (req, res) => res.send('PUT Method'))
app.delete('/', (req, res) => res.send('DELETE Method'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))