const { Router } = require("express")

const controllers = require("../controllers")
const router = Router()

router.get("/", controllers.getPlanet)
router.post("/", controllers.createPlanet)

module.exports = router
