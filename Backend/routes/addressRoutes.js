const express = require("express");
const router = express.Router();
const { addAddress } = require("../controllers/addressController");
const { checkUser } = require("../middleware/checkAuth"); // assuming you have this middleware

router.post("/add", checkUser, addAddress);

module.exports = router;
