const express = require("express");
const router = express.Router();
const userAuthentication = require("../userAuthentication");


router.use("/open", require("./apiRoutes/open"));

module.exports = router;