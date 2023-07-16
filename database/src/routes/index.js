const { Router } = require("express")
const { Character, Film, Planet } = require("../database")

const router = Router()

router.get("/characters", async (req, res) => {
  const data = await Character.list()
  res.json(data)
})

module.exports = router
