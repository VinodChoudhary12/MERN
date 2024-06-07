
import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trime: true
    },
    email: {
        type: String,
        required: true,
        trime: true
    },
    contact: {
        type: String,
        required: true,
        trime: true
    },
    password: {
        type: String,
        required: true,
        trime: true
    },
    address: {
        type: String,
        trime: true
    },
})

const user = mongoose.model("user", userSchema);
export default user;