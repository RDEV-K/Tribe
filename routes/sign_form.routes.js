const express = require("express");
const sigingFormController = require("../controllers/sign_form.controller");
const authorize = require("../middleware/authorization");

const router = express.Router();

router.post(
  "/form",
  authorize(["HR", "OPERATIONS", "SUPERADMIN"]),
  sigingFormController.SignForm
);

module.exports = router;
