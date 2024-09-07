const express = require('express')
const cors = require('cors')
const usersData = require('./data.json')

const PORT = 3000

const app = express()

app.use(cors())

app.get('/', (req, res) => {

    res.json({
        users: {
            admin: usersData.slice(0, 50),
            normal: usersData.slice(50, usersData.length),
        },
    })
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`server listening at port ${PORT}`)
})