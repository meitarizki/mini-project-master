const router = require("express").Router();
const {merchantController} = require("../controllers");

router.post("/merchant", merchantController.RegisertMerchant);

module.exports = router;
