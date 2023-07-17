const Film = require("../data")
const { response } = require("../utils")

module.exports = async (req, res) => {
  const { id } = req.params
  const foundFilm = await Film.findById(id)

  response(res, 200, foundFilm)
}
