const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const endpoint = require("./routes");

// register stragegy
require("./config/passport");

const app = express();

// middleware
app.use(bodyparser.json());
app.use(cors());

// mongodb
mongoose.connect(process.env.MONGODB_URI_ADMIN, {
  useNewUrlParser: true,
  autoIndex: false
});
if (process.env.NODE_ENV === "development") mongoose.set("debug", true);

// init admin user
require("./config/seeddb");

// define endpoint
app.use(endpoint);


// handle pages not found
app.use((req, res, next) => {
  return res.status(404).send({ message: req.url + " not found." });
});

// Any error
app.use(function(err, req, res, next) {
  return res.status(500).send({ error: err });
});

// port
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`🚀 Server is running at port ${port}`);
});
