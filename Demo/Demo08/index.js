// ECMAScript 8
// Khai bao bien: const, var, let

const express = require('express')
const app = express()
const port = 3000

// GET: localhost:3000/ --> www.abc.com
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/plus/:a/:b',(req, res)=>{
    let a = req.params['a']
    let b = req.params['b']
    let c = parseInt(a) + parseInt(b)
    res.send(JSON.stringify(c))
})

// POST: localhost:3000/product/999
app.post('/product/:id', (req, res)=>{
    let pid = req.params['id'];
    console.log(pid)
    res.send('Product ID = ' + pid)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))