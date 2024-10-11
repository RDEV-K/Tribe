const express = require("express");
const GetPendingFormsHRController = require("../controllers/get_pending_forms_hr.controller");
const Authorize = require("../middleware/authorization");

const router = express.Router();

router.get(
  "/get-concierge-pending-forms",
  Authorize(["HR", "SUPERADMIN"]),
  GetPendingFormsHRController.GetConciergePendingForms
);
router.get(
  "/get-peer-ambassador-pending-forms",
  Authorize(["HR", "SUPERADMIN"]),
  GetPendingFormsHRController.GetPeerAmbassadorPendingForms
);
router.get(
  "/get-service-partner-pending-forms",
  Authorize(["HR", "SUPERADMIN"]),
  GetPendingFormsHRController.GetServicePartnerPendingForms
);

router.get(
  "/get-all-pending-operators",
  Authorize(["OPERATIONS", "SUPERADMIN"]),
  GetPendingFormsHRController.GetAllPendingOperators
);

module.exports = router;
