const express = require('express')
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
const mainRoutes = require("./routes/mainRoutes");

app.use(express.json());
app.use(cors());

app.use('/api', mainRoutes.routes);


const PORT = process.env.PORT || 5000

mongoose.connect("mongodb://localhost:27017/movieApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", function () {
    console.log("Database Connected Succesfully");
  })
  .on("error", function (error) {
    console.log("Error in connecting database", error);
  });


app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT} `)
})