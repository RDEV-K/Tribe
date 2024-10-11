const express = require("express");
const GetSignedFormsController = require("../controllers/signed_form.controller");
const Authorize = require("../middleware/authorization");

const router = express.Router();

router.get(
  "/get-form",
  Authorize(["HR", "OPERATIONS", "SUPERADMIN"]),
  GetSignedFormsController.GetSignedForms
);

router.get(
  "/get-all-forms",
  Authorize(["HR", "OPERATIONS", "SUPERADMIN"]),
  GetSignedFormsController.GetAllSignedForms
);
module.exports = router;
