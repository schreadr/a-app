const router = require("express").Router();

router.use("/", require("./index"));
router.use("/search", require("./getSearch"));
router.use("/save", require("./postSave"));

module.exports = router;
