
const express = require("express");
const router = express.Router();

// Registration controller imported
const authCont = require("../controller/authCont");

//Access route/end point
router.post("/sign-up", authCont.register);
router.post("/sign-in", authCont.login);

module.exports = router;