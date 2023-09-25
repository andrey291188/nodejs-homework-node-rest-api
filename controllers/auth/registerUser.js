const { User } = require("../../models");
const bcrypt = require("bcrypt")
const gravatar = require("gravatar")

const {HttpError} = require("../../helpers")

const registerUser = async (req,res) => {
    const {email, password} = req.body
    
    const user = await User.findOne({email});

    if (user) {
        throw HttpError(409, "Email in use")
    }

    const hashPassword = await bcrypt.hash(password, 10)
    const avatarURL = gravatar.url(email)

    const newUser = await User.create({...req.body, password: hashPassword, avatarURL});

    res.status(201).json({
        status: "Success",
        code: 200,
        user: {
            email: newUser.email,
            avatarURL,
        },
    })
}

module.exports = registerUser