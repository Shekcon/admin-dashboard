const router = require("express").Router();

// define api
const api = require("./api");

// define route for api
router.use("/api", api);

module.exports = router;
