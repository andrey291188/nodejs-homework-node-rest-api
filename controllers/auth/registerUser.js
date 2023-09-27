const { User } = require("../../models");
const bcrypt = require("bcrypt")
const gravatar = require("gravatar")
const {nanoid} = require("nanoid")
const {HttpError, sendEmail} = require("../../helpers")
require("dotenv").config();

const {BASE_URL} = process.env;

const registerUser = async (req,res) => {
    const {email, password} = req.body
    
    const user = await User.findOne({email});

    if (user) {
        throw HttpError(409, "Email in use")
    }

    const hashPassword = await bcrypt.hash(password, 10)
    const avatarURL = gravatar.url(email)
    const verificationToken = nanoid();

    const newUser = await User.create({...req.body, password: hashPassword, avatarURL, verificationToken});

    const verifyEmail = {
        to: email,
        subject: "Verify email",
        html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Click to verify email</a>`,
    }

    await sendEmail(verifyEmail)

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