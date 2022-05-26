// const express = require('express')
// const app = express()
// const { usergame } = require("./models")

// app.use(express.json())

// app.get('/usergames', (req,res) => {
//     usergame.findAll().then(usergames => {
//         res.status(200).send(usergames)
//     })
// })

// app.get('/usergames/:id', () => {
    
// })

// app.post('/usergames', (req, res) => {
//     usergame.create({
//         "useername": req.body.title,
//         "password": req.body.body,
//         "approved": req.body.approved
//     }).then(usergame => {
//         return res.status(201).send(usergame)
//     })
// })

// app.listen(4000, () => {
//     console.log('server is running')
// })

// ini pembatas

const express = require('express')
const app = express()
const port = 3000
// const post = require('./db/posts.json')

app.set ('view engine', 'ejs')
app.use(express.static('public'))

app.get('/login', (req, res) => {
    res.render('/login')
})

app.get('/api/v1/posts', (req, res) => {
    res.status(200).send(post)
})

app.get('/api/v1/posts/:id', (req, res) => {
    const post = post.find(i => i.id = req.params.id)
    res.status(200).send(post)
})

app.listen(port, () => {
    console.log(`Listening to ${port}`);
})