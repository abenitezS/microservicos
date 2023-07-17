//const planets = require("./planets.json")
const axios = require("axios")

module.exports = {
  list: async () => {
    const results = await axios.get("http://database:8004/planets")
    return results.data
  },
  create: async (planet) => {
    const postData = await axios.post("http://database:8004/planets", planet)
    return postData.data
  },
  findById: async (id) => {
    const foundData = await axios.get(`http://database:8004/planets/${id}`)
    return foundData.data
  },
}
