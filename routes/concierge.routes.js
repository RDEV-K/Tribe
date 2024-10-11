const express = require("express");
const conciergeController = require("../controllers/concierge.controller.js");
const authorize = require("../middleware/authorization.js");

const router = express.Router();

router.post(
  "/create-concierge",
  authorize(["HR", "OPERATIONS", "SUPERADMIN", "CONCIERGE"]),
  conciergeController.CreateConcierge
);
router.get(
  "/get-concierges",
  authorize(["HR", "SUPERADMIN", "OPERATIONS"]),
  conciergeController.GetConcierges
);
router.get(
  "/total-concierges",
  authorize(["HR", "OPERATIONS", "SUPERADMIN"]),

  conciergeController.GetTotalConcierge
);
router.get(
  "/get-concierge",
  authorize(["HR", "OPERATIONS", "SUPERADMIN", "CONCIERGE"]),
  conciergeController.GetConcierge
);

router.patch(
  "/update-status",
  authorize(["HR", "SUPERADMIN"]),
  conciergeController.UpdateConciergeStatus
);

router.delete(
  "/delete-concierge/:id",
  authorize(["HR", "SUPERADMIN"]),
  conciergeController.DeleteConcierge
);

router.put(
  "/update-concierge",
  authorize(["HR", "SUPERADMIN", "CONCIERGE"]),
  conciergeController.UpdateConcierge
);

router.get(
  "/concierge-form-status",
  authorize([
    "OPERATIONS",
    "SUPERADMIN",
    "OPERATOR",
    "CONCIERGE",
    "HR",
    "ADMIN",
    "SERVICE_PARTNER",
    "PEER_AMBASSADOR",
  ]),
  conciergeController.GetConciergeFormStatus
);
router.get("/signed-to/:id", conciergeController.getSingedToConciergeUser);
router.get(
  "/get-signed-operator/:id",
  conciergeController.GetConciergeFormAssignedToOperator
);

module.exports = router;
