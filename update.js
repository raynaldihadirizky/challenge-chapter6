const { usergame } = require("./models")

usergame.update({
    username: "Jagoan mamah"
}, {
    where: {id: 1}
}).then(usergame => {
    console.log(usergame)
})