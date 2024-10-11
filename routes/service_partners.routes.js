const express = require("express");
const servicePartnerController = require("../controllers/service_partners.controller.js");
const authorize = require("../middleware/authorization.js");

const router = express.Router();

router.post(
  "/create-service",
  authorize(["HR", "OPERATIONS", "SUPERADMIN", "SERVICE_PARTNER"]),
  servicePartnerController.CreateServicePartner
);
router.get(
  "/get-services",
  authorize(["HR", "OPERATIONS", "SUPERADMIN"]),
  servicePartnerController.GetServicePartners
);
router.get(
  "/total-services",
  authorize(["HR", "OPERATIONS", "SUPERADMIN"]),
  servicePartnerController.GetTotalServices
);
router.get(
  "/get-service",
  authorize(["HR", "OPERATIONS", "SUPERADMIN", "SERVICE_PARTNER"]),
  servicePartnerController.GetServicePartner
);

router.patch(
  "/update-status",
  authorize(["HR", "OPERATIONS", "SUPERADMIN"]),
  servicePartnerController.UpdateServicePartnerStatus
);

router.delete(
  "/delete-service/:id",
  authorize(["HR", "OPERATIONS", "SUPERADMIN"]),
  servicePartnerController.DeleteServicePartner
);

router.put(
  "/update-service",
  authorize(["HR", "OPERATIONS", "SUPERADMIN", "SERVICE_PARTNER"]),
  servicePartnerController.UpdateServicePartner
);

router.get(
  "/service-form-status",
  authorize(["OPERATIONS", "SUPERADMIN", "OPERATOR", "SERVICE_PARTNER"]),
  servicePartnerController.GetServicePartnerFormStatus
);
router.get(
  "/signed-to/:id",
  servicePartnerController.GetSignedToServicePartnerUser
);

router.get(
  "/get-signed-operator/:id",
  servicePartnerController.GetServicePartnerFormAssignedToOperator
);

module.exports = router;
