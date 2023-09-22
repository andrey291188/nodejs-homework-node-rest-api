const { User } = require("../../models");

const updateSubscriptionCtrl = async (req, res) => {
  const {_id} = req.user;
  const { subscription } = req.body
  await User.findByIdAndUpdate(_id, { subscription });

  res.json({
    status: "Success",
    code: 200,
    message: `Subscription ${subscription}`,
  });
};

module.exports = updateSubscriptionCtrl;