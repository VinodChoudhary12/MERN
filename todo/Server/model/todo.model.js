import mongoose from 'mongoose'
import user from './user.model.js';
const todoSchema = mongoose.Schema({
    name: {
        type: String,
        trime: true
    },
    userID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: user

    }
});

const todo = mongoose.model("todo", todoSchema)
export default todo;