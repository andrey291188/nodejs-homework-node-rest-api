const { Contact } = require("../../models");

const getAllCtrl = async (req, res) => {
  const { _id: owner } = req.user;
  const favoriteQuery = req.query.favorite;

  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  const contactsList =
    favoriteQuery !== undefined
      ? await Contact.find(
          { owner, favorite: favoriteQuery },
          "-createdAt -updateAt",
          { skip, limit }
        ).populate("owner", "email subscription")
      : await Contact.find({ owner }, "-createdAt -updateAt", {
          skip,
          limit,
        }).populate("owner", "email subscription");

  res.json({
    status: "Success",
    code: 200,
    data: {
      result: contactsList,
    },
  });
};

module.exports = getAllCtrl;
