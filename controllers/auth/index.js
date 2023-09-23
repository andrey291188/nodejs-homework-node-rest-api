const registerUser = require("./registerUser")
const loginUser = require("./loginUser")
const getCurrent = require("./getCurrent")
const logout = require("./logout")
const updateSubscriptionCtrl = require("./updateSubscriptionCtrl")
const { ctrlWrapper } = require("../../helpers")

module.exports = {
    registerUser: ctrlWrapper(registerUser),
    loginUser: ctrlWrapper(loginUser),
    getCurrent: ctrlWrapper(getCurrent),
    logout: ctrlWrapper(logout),
    updateSubscriptionCtrl: ctrlWrapper(updateSubscriptionCtrl),
}