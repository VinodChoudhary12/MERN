import todo from "../model/todo.model.js";
import user from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const InsertData = async (req, res) => {
    const task = await todo.create({
        name: req.body.name,
        userID: req.body.userID,
    });
    return res.status(201).json({ message: "Task Added Succesfully", task });
};
export const getData = async (req, res) => {
    try {
        const { userID } = req.params;
        const data = await todo.find({ userID });
        res.status(200).json({ data });
    } catch (err) {
        console.log(err);
        res.status(500).json({ err });
    }
};
export const signUpController = async (req, res) => {
    try {
        console.log(req.body);
        const existedUser = await user.find({ email: req.body.email });
        if (!existedUser)
            return res
                .status(200)
                .json({ message: "User Already Exist", existedUser });
        if (!req.body.confirmPassword === req.body.password) {
            return res.status(200).json({ message: "Password Does not match" });
        }
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(req.body.password, salt);
        const newUser = await user.create({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword,
        });
        if (!newUser)
            return res.status(500).json({ message: "Something went wrong" });
        return res
            .status(201)
            .json({ message: "User is Created Successfully", newUser });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error", err });
    }
};
export const logIn = async (req, res) => {
    try {
        const foundUser = await user.findOne({ email: req.body.email });
        if (!foundUser) return res.status(404).json({ message: "User Not Found" });
        const hashPassword = bcrypt.compareSync(
            req.body.password,
            foundUser.password
        );
        if (!hashPassword)
            return res.status(403).json({ message: "Password is incorect" });
        const token = jwt.sign({ id: foundUser._id }, "This is my token");
        res.cookie("token", token);
        res.cookie("user", JSON.stringify(foundUser), { httpOnly: true });
        return res
            .status(200)
            .json({ message: "User Found Successfully", foundUser, token, });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went Wrong", error });
    }
};
