const { Router } = require("express")

const controllers = require("../controllers")
const router = Router()

router.get("/films", controllers.getFilm)
router.post("/films", controllers.createFilm)
router.get("/films/:id", controllers.findById)

module.exports = router
