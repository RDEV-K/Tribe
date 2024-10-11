const express = require("express");
const registrationController = require("../controllers/registration.controller");

const router = express.Router();

router.post("/signup", registrationController.Register);
router.post("/login", registrationController.Login);
router.post("/verify", registrationController.VerifyAccount);
router.post("/resend-otp", registrationController.ResendOtp);

module.exports = router;
