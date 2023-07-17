const { Router } = require("express")

const controllers = require("../controllers")
const router = Router()

router.get("/planets", controllers.getPlanet)
router.post("/planets", controllers.createPlanet)
router.get("/planets/:id", controllers.findById)

module.exports = router
