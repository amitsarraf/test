const mongoose = require("mongoose");


const mainSchema = new mongoose.Schema({

    movieName:{
        type:String,
        required:true
    },

    rating:{
        type:Number,
        required:true
    },

    releasedDate:{
        type:String,
        required:true
    },

})

const MainModel = mongoose.model("movie", mainSchema);

module.exports = MainModel;
