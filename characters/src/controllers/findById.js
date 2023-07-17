const Character = require("../data")
const { response } = require("../utils")

module.exports = async (req, res) => {
  const { id } = req.params
  const foundCharacter = await Character.findById(id)

  response(res, 200, foundCharacter)
}
