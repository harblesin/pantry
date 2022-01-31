const router = require("express").Router();
const userRouteController = require("../../controllers/userRouteController");

router.route("/login").get(userRouteController.login);

module.exports = router;