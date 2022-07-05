
const express = require("express");
const router = express.Router();

const adminCont = require("../controller/adminCont");

router.get("/users", adminCont.get_users);
router.post("/create-admin", adminCont.create_admin);
router.get("/profile", adminCont.get_profile);

module.exports = router;