//const planets = require("./planets.json")
const axios = require("axios")

module.exports = {
  list: async () => {
    results = await axios.get("http://database:8004/Planet")
    return results.data
  },
  create: async () => {
    throw Error("Hay un error en la BDD al momento de crear un planeta")
  },
}
