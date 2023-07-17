const { Router } = require("express")
const { Character, Film, Planet } = require("../database")
const store = require("../database")
const router = Router()

router.get("/characters", async (req, res) => {
  const data = await Character.list()
  res.json(data)
})

router.get("/characters/:id", async (req, res) => {
  const { id } = req.params
  const data = await Character.get(id)
  res.json(data)
})

router.post("/characters", async (req, res) => {
  const data = await Character.insert(req.body)
  res.json(data)
})

// router.get("/films", async (req, res) => {
//   const data = await Film.list()
//   res.json(data)
// })
// router.get("/planets", async (req, res) => {
//   const data = await Planet.list()
//   res.json(data)
// })

module.exports = router
