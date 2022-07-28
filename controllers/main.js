const MainModel = require("../models/mainModel");



const postMovie = async (req, res) => {
    const { movieName, rating, releasedDate} = req.body;

    try {
        if(!movieName || !rating || !releasedDate){
            res.status(500).json({ error: "please fill the entire fields" })
        }

        const movie = await MainModel.create({
            movieName, rating , releasedDate
        })
         res.status(200).json(movie)
    } catch (error) {
        console.log(error);
    }
}

const getMovie = async (req, res) => {

    try {
        const movie = await MainModel.find({})
         res.status(200).json(movie)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
   postMovie,
   getMovie
}
