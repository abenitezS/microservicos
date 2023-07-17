const { Router } = require("express")

const controllers = require("../controllers")
const router = Router()

router.get("/characters", controllers.getCharacter)
router.post("/characters", controllers.createCharacter)
router.get("/characters/:id", controllers.findById)

module.exports = router
