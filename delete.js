const { usergame } = require('./models')

usergame.destroy({
    where: {id: 1}
}).then(() => {
    console.log("Data Berhasil Dihapus");
})