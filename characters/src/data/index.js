//const characters = require("./characters.json")
const axios = require("axios")

module.exports = {
  list: async () => {
    const results = await axios.get("http://database:8004/characters")
    return results.data
  },
  create: async (character) => {
    const postData = await axios.post(
      "http://database:8004/characters",
      character
    )
    return postData.data
  },
  findById: async (id) => {
    //const { id } = req.paramms
    const foundData = await axios.get(`http://database:8004/characters/${id}`)
    return foundData.data
  },
}
