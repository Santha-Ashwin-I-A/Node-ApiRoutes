const express = require("express");
const { signup, signin, signOut } = require("../controllers/authController");

const router = express.Router();

router.post("/signup",signup);
router.post("/signin",signin);
router.post("/signout",signOut);

module.exports = router