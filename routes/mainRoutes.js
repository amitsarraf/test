const router = require('express').Router();
const {postMovie, getMovie} = require('../controllers/main')


router.get("/", getMovie)
router.post("/movie", postMovie)

module.exports = {
    routes: router
}
