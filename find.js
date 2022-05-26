const { usergame } = require("./models")

usergame.findAll().then(usergames => {
    console.log(usergames);
})

// usergame.findOne({
//     where: {id: 1}
// }).then(usergame => {
//     console.log(usergame);
// })