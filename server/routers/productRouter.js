const {productController} = require("../controllers");
const router = require("express").Router();

router.post("/register", productController.addProduct);

module.exports = router;
