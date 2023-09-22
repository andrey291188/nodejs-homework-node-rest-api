const { User } = require("../../models");
const bcrypt = require("bcrypt")

const {HttpError} = require("../../helpers")

const registerUser = async (req,res) => {
    const {email, password} = req.body
    console.log(email)
    const user = await User.findOne({email});

    if (user) {
        throw HttpError(409, "Email in use")
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({...req.body, password: hashPassword});

    res.status(201).json({
        status: "Success",
        code: 200,
        user: {
            email: newUser.email
        },
    })
}

module.exports = registerUser