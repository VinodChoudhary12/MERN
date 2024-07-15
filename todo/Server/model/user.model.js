import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    email: {
        type: String,
        trime: true,
        require: true
    },
    name: {
        type: String,
        trime: true,
        require: true
    },
    password: {
        type: String,
        trime: true,
        require: true
    }
})

const user = mongoose.model("user", userSchema)

export default user;