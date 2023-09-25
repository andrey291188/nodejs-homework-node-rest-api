const express = require("express");

const {authCtrl: ctrl} = require("../../../controllers")

const { validateBody, authenticate, upload } = require("../../../middlewares")
const { schemaUser, subscriptionSchemaUser } = require("../../../schemas")

const router = express.Router();

router.post("/register", validateBody(schemaUser), ctrl.registerUser)

router.post("/login", validateBody(schemaUser), ctrl.loginUser)

router.get("/current", authenticate, ctrl.getCurrent)

router.post("/logout", authenticate, ctrl.logout)

router.patch('/subscription', authenticate, validateBody(subscriptionSchemaUser), ctrl.updateSubscriptionCtrl)

router.patch('/avatars', authenticate, upload.single("avatar"), ctrl.updateAvatarCtrl)

module.exports = router;
