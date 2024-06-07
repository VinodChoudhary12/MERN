import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    categoryName: {
        type: String
    }
})
const category = mongoose.model("category", categorySchema)
export default category;