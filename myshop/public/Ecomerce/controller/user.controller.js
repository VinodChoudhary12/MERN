
import user from "../model/user.model.js";
// let signup;

export const signup = (req, res, next) => {

    let { username, password, email, contact } = req.body;

    user.create({ username, password, email, contact })
        .then(data => res.status(201).json({ msg: "User insert Successfully", "user": data }))
        .catch(err => res.status(500).json({ msg: "Internal server error", "error": err }))

};

export const login = (req, res, nexe) => {
    let { email, password } = req.body;
    user.findOne({ raw: true, where: { email: email, password: password } })
        .then(data => res.status(200).json({ msg: `welcome ${email}` }))
        .catch(err => res.status(500).json({ msg: "internal server error", msg: err }))
}