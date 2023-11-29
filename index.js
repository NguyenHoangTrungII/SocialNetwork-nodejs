const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoute = require("./routes/user");

const db = require("./models");
db.sequelize.sync();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//ROUTES
app.use("/v1/user", userRoute);
