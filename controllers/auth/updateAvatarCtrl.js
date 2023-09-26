const { User } = require("../../models");
const Jimp = require("jimp");
const path = require("path");
const fs = require("fs/promises");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatarCtrl = async (req, res) => {
  const { _id } = req.user;

  const { path: tempUpload, originalname } = req.file;
  const fileName = `${_id}_${originalname}`;

  const resultUpload = path.join(avatarDir, fileName);
 
    const image = await Jimp.read(tempUpload);
    await image.resize(250, 250);
    await image.writeAsync(resultUpload);

    await fs.unlink(tempUpload);

    const avatarURL = path.join("avatars", fileName);
    await User.findByIdAndUpdate(_id, { avatarURL });
    res.json({
      avatarURL,
    });
 
};

module.exports = updateAvatarCtrl;
