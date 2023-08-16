// Import bcrypt
const { rejects } = require('assert');
const bcrypt = require('bcrypt');

// Import fs
const fs = require('fs');
const { resolve } = require('path');


function updateUser(data, updatingUser) {
    data.forEach((user, index) => {
        if (user.id === updatingUser.id) {
            data[index].email = updatingUser.email;
            data[index].password = updatingUser.password;
        };
    });
};

function deleteUser(id) {
    data.forEach((user, index) => {
        if (user.id === id) {
            data.splice(index, 1);
        };
    });
};

async function createHash(user) {
    const password = user.password
    return await bcrypt.hash(password.toString(), 10);
}

function writeAllUsers(data) {
    fs.writeFile('./data.json', JSON.stringify(data), (err) => {
        if (err) throw err;
    })
}


module.exports = { updateUser, deleteUser, createHash, writeAllUsers };