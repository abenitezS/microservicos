//const films = require("./films.json")
const axios = require("axios")

module.exports = {
  list: async () => {
    const results = await axios.get("http://database:8004/films")
    return results.data
  },
  create: async (film) => {
    const postData = await axios.post("http://database:8004/films", film)
    return postData.data
  },
  findById: async (id) => {
    const foundData = await axios.get(`http://database:8004/films/${id}`)
    return foundData.data
  },
}
