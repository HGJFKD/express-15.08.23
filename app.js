const express = require('express')
const app = express()
const port = 3000


// Import uuid-v4
const { v4: uuidv4 } = require('uuid');

// Import bcrypt
const bcrypt = require('bcrypt');

// Import functions
const { writeAllUsers } = require('./functions.js')

// Import data
const data = require('./data.json');


// middleware function to retrun json
app.use(express.json())

// Get all users
app.get('/allUsers', (req, res) => {
    res.send(data);
})

// Get user by id (name or num)
app.get('/:id', (req, res) => {
    if (data.length - 1 >= req.params.id) {
        res.send(data[req.params.id])
    } else {
        res.send("no user found")
    }
})


// Create a new user
app.post('/newUser', (req, res) => {
    const user = req.body;
    user["id"] = uuidv4();
    user["password"] = bcrypt.hashSync(user.password, 10);
    data.push(user);
    writeAllUsers(data);
    res.send(data);
});


// Update user
app.put('/updateUser', (req, res) => {
    updateUser(data, rec.body);
    res.send(data);
});

// Delete user
app.delete('/delete', (req, res) => {
    const user = req.body;
    deleteUser(user.id);
    res.send(data);
});

// Login user
app.post('/login', (req, res) => {
    const userSearching = req.body;
    let arr = data.filter(user => {
        user.email === userSearching.email &&
            bcrypt.compareSync(userSearching.password, user.password)
    });
    let output = arr.length > 0 ? "User is connected" : "wrong credentials";
    res.send(output);
});

app.listen(port, () => {

});

