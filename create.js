const { usergame } = require("./models")

usergame.create({
    username: "Asep Ganteng",
    password: "12345678",
    approved: false
}).then(usergame => {
    console.log(usergame);
})

usergame.create({
    username: "Fikri DiGidaww",
    password: "09876543",
    approved: false
}).then(usergame => {
    console.log(usergame);
})

usergame.create({
    username: "Fajar Asomething",
    password: "fajar619",
    approved: false
}).then(usergame => {
    console.log(usergame);
})

usergame.create({
    username: "Ustad Gaoell",
    password: "qwerty12",
    approved: false
}).then(usergame => {
    console.log(usergame);
})

usergame.create({
    username: "Arifien ADM",
    password: "artisjav",
    approved: false
}).then(usergame => {
    console.log(usergame);
})