const path = require('path')
const express = require('express')
const fs = require('fs')

const file = JSON.parse(fs.readFileSync('/Users/bureau/Documents/angular_stag/salaries/backend/datas/demo.json','utf-8'))
const app = express()
const api = express.Router()
const home = express.Router()

app.use(express.static(path.join(__dirname, 'templates')));
api.get('/people', ( req, res ) => {
    res.json(file)
})
api.get('/add', (req, res) => {
    fs.readFile('./templates/add_Person.html', (err, data) => {
        res.writeHead(200,{
            'Content-type':'text/html ; charset:utf-8'
        })
        res.end(data)

    })
})

app.use('/api', api)
app.get('/', (req, res) => {
    res.json({message : 'hello'})
})

app.listen(5050, () => {
    console.log("Listening on 5050")
})