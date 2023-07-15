const mongoose = require("mongoose")
const { MONGO_URI } = require("../config/envs")

const conn = mongoose.createConnection(MONGO_URI)
//"mongodb+srv://admin:admin@demoatlas.56iy4p8.mongodb.net/star_wars")

/* const Character = conn.model("Character", require("./schemas/characterSchema"))
const Film = conn.model("Film", require("./schemas/filmSchema"))
const Planet = conn.model("Planet", require("./schemas/planetSchema"))

Character.find()
  .populate("films", ["_id", "title"])
  .populate("homeworld", ["_id", "name"])
  .then((res) => console.log(res[0])) */

module.exports = {
  Character: conn.model("Character", require("./schemas/characterSchema")),
  Film: conn.model("Film", require("./schemas/filmSchema")),
  Planet: conn.model("Planet", require("./schemas/planetSchema")),
}
