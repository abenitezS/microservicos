const Character = require("../data")
const { response } = require("../utils")

module.exports = async (req, res) => {
  const character = await Character.list()
  response(res, 200, character)
}
