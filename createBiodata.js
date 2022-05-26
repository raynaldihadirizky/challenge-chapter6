const { userGameBiodata } =require('./models')

userGameBiodata.create({
  umur: "18",
  gender: "Pria",
  alamat: "Jakarta",
  approved: false
}).then(userGameBiodata =>{
  console.log();
})

userGameBiodata.create({
  umur: "25",
  gender: "pria",
  alamat: "Depok",
  approved: false
}).then(userGameBiodata =>{
  console.log();
})

userGameBiodata.create({
  umur: "21",
  gender: "Pria",
  alamat: "Bogor",
  approved: false
}).then(userGameBiodata =>{
  console.log();
})

userGameBiodata.create({
  umur: "23",
  gender: "pria",
  alamat: "Subang",
  approved: false
}).then(userGameBiodata =>{
  console.log();
})

userGameBiodata.create({
  umur: "20",
  gender: "pria",
  alamat: "Tanggerang",
  approved: false
}).then(userGameBiodata =>{
  console.log();
})