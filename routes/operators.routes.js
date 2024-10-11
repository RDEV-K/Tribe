const express = require("express");
const operatorController = require("../controllers/operator.controller");
const authorize = require("../middleware/authorization");

const router = express.Router();

router.post(
  "/create-operator",
  authorize(["OPERATIONS", "SUPERADMIN", "OPERATOR"]),
  operatorController.CreateOperator
);
router.get(
  "/get-operators",
  authorize(["OPERATIONS", "SUPERADMIN", "OPERATOR"]),
  operatorController.GetOperators
);
router.get(
  "/total-operators",
  authorize(["OPERATIONS", "SUPERADMIN"]),
  operatorController.GetTotalOperators
);
router.get(
  "/get-operator",
  authorize(["OPERATIONS", "SUPERADMIN", "OPERATOR"]),
  operatorController.GetOperator
);

router.patch(
  "/update-status",
  authorize(["OPERATIONS", "SUPERADMIN"]),
  operatorController.UpdateOperatorStatus
);
router.delete(
  "/delete-operator/:id",
  authorize(["OPERATIONS", "SUPERADMIN", "OPERATOR"]),
  operatorController.DeleteOperator
);

router.put(
  "/update-operator",
  authorize(["OPERATIONS", "SUPERADMIN", "OPERATOR"]),
  operatorController.UpdateOperator
);

router.get(
  "/operator-form-status",
  authorize(["OPERATIONS", "SUPERADMIN", "OPERATOR"]),
  operatorController.GetOperatorFormStatus
);

router.get("/signed-to/:id", operatorController.getSignedOperator);

module.exports = router;
