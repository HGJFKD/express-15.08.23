const express = require('express')
const app = express()
const port = 3000

const { getData, setData } = require('./data.js')
const data = getData()

// json
app.use(express.json())

// Get all users
app.get('/allUsers', (req, res) => {
    res.send(data);
})

// Get user by id (name or num)
app.get('/:id', (req, res) => {
    res.send(data.filter(user => user.id === req.params.id))
}
)

// Create a new user
app.post('/newUser', (req, res) => {
    setData(req.body)
    res.send("User was added successfully");
})


app.listen(port, () => {
    // console.log(getData());
})

