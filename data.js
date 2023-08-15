
const data = [{
    id: "chaim",
    email: "1g@asd.gom",
    password: '1azxcvv'
}, {
    id: 2,
    email: "2@asd.gom",
    password: '2azxcvv'
}, {
    id: 3,
    email: "3@asd.gom",
    password: '3azxcvv'
}, {
    id: 4,
    email: "4@asd.gom",
    password: '4azxcvv'
}, {
    id: 5,
    email: "5@asd.gom",
    password: '5azxcvv'
}];


function getData() {
    return data;
}

function setData(user) {
    data.push(user)
}
module.exports = { getData, setData };