
const express = require("express");
const router = express.Router();

const usercont = require("../controller/userCont");

router.get("/account", usercont.get_account);
router.get("/profile", usercont.get_profile);

module.exports = router;