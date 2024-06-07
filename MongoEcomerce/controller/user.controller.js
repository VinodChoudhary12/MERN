import bcryptjs from "bcryptjs";
import { validationResult } from "express-validator";
import user from "../model/user.model.js";
import jwt from "jsonwebtoken";
import { json } from "express";

export const singupController = async (req, res) => {
    const { name, contact, email, password } = req.body;
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(403).json(result.array()[0].msg);
    }
    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);
    console.log(hashPassword);
    const User = await user.create({
        name,
        email,
        contact,
        password: hashPassword,
    });

    return res.status(201).json({ message: "User Created Successfully", User });
};

export const loginController = async (req, res) => {

    try {
        const { email, contact, password } = req.body
        const User = await user.findOne({
            $or: [
                { email }, { contact }
            ]
        });
        const realPassword = await bcryptjs.compare(password, User.password);
        if (!realPassword)
            return res.status(403).json({ message: "password is Incorrect" })
        const token = jwt.sign({ id: User._id }, "This is my secret key")
        return res.status(200).json({ User, token: token })
    } catch (err) {
        console.log(err);
        return res.status(200).json({ err })
    }

}


export const getUserById = async (req, res) => {
    const id = req.params.id;
    const User = await user.findById(id)
    if (!User)
        return res.status(404).json("User not Found")


    return res.status(200).json({ message: "User Found", user: User })
}





