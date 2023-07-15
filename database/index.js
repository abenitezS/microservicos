const server = require("./src/routes/server")
const { Character, Film, Planet } = require("./src/database")

//Character.list().then((res) => console.log(res))

// Character.get(1).then((res) => console.log(res))

// Character.insert({
//   _id: "1167",
//   name: "Rodrigo Diaz de Vivar",
//   birth_year: "1709",
//   unaCampoCaulquiera: "Jimena la esposa",
//   gender: 3455,
// }).then((res) => console.log(res))

//Film.list().then((res) => console.log(res))
//Film.get(6).then((res) => console.log(res))
// Film.insert({
//   _id: "10",
//   title: "Retorno de Kylo Ren Rollero",
//   director: "Facu Rollero",
// }).then((res) => console.log(res))

Planet.list().then((res) => console.log(res))
Planet.get(6).then((res) => console.log(res))
// Planet.insert({
//   _id: "150",
//   name: "universe loose",
//   climate: "cold",
// }).then((res) => console.log(res))

server.listen(8004, () => {
  console.log("Database service on PORT 8004")
})
