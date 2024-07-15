import mongoose from "mongoose";


const connectToDB = async () => {
    mongoose.connect("mongodb://localhost:27017/TODO")
}

export default connectToDB();