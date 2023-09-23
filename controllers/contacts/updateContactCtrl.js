const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const updateContactCtrl = async (req, res) => {
  const { contactId } = req.params;
  const contactUpdate = await Contact.findByIdAndUpdate(contactId, {...req.body}, {new: true, runValidators: true});
  if (!contactUpdate) {
    throw HttpError(404, "Not found");
  }
  res.json({
    status: "Success",
    code: 200,
    data: {
      result: contactUpdate,
    },
  });
};

module.exports = updateContactCtrl;
