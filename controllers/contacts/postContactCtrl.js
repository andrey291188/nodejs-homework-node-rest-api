const { Contact } = require("../../models");

const postContactCtrl = async (req, res) => {
  const {_id: owner} = req.user;
  const addContact = await Contact.create({...req.body, owner});
  res.status(201).json({
    status: "Success",
    code: 201,
    data: {
      result: addContact,
    },
  })
};

module.exports = postContactCtrl