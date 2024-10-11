const express = require("express");
const peerAmbassadorController = require("../controllers/peer_ambassador.controller.js");
const authorize = require("../middleware/authorization.js");

const router = express.Router();

router.post(
  "/create-peer",
  authorize(["HR", "OPERATIONS", "SUPERADMIN", "PEER_AMBASSADOR"]),

  peerAmbassadorController.CreatePeerAmbassador
);
router.get(
  "/get-peers",
  authorize(["HR", "OPERATIONS", "SUPERADMIN"]),
  peerAmbassadorController.GetPeerAmbassadors
);
router.get(
  "/total-peers",
  authorize(["HR", "OPERATIONS", "SUPERADMIN"]),
  peerAmbassadorController.GetTotalPeerAmbassadors
);
router.get(
  "/get-peer",
  authorize(["HR", "OPERATIONS", "SUPERADMIN", "PEER_AMBASSADOR"]),
  peerAmbassadorController.GetPeerAmbassador
);

router.patch(
  "/update-status",
  authorize(["HR", "OPERATIONS", "SUPERADMIN"]),
  peerAmbassadorController.UpdatePeerAmbassadorStatus
);

router.delete(
  "/delete-peer/:id",
  authorize(["HR", "OPERATIONS", "SUPERADMIN"]),
  peerAmbassadorController.DeletePeerAmbassador
);

router.put(
  "/update-peer",
  authorize(["HR", "OPERATIONS", "SUPERADMIN", "PEER_AMBASSADOR"]),
  peerAmbassadorController.UpdatePeerAmbassador
);

router.get(
  "/peer-form-status",
  authorize(["OPERATIONS", "SUPERADMIN", "OPERATOR", "PEER_AMBASSADOR"]),
  peerAmbassadorController.GetPeerAmbassadorFormStatus
);
router.get("/signed-to/:id", peerAmbassadorController.GetSignedToPeerUser);
router.get(
  "/get-signed-operator/:id",
  peerAmbassadorController.GetPeerAmbassadorFormAssignedToOperator
);

module.exports = router;
