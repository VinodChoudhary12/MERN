import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
<<<<<<< HEAD
    categoryName: {
        type: String
    }
})
const category = mongoose.model("category", categorySchema)
=======
    categoryName:{
        type:String
    }
})
const category = mongoose.model("category",categorySchema)
>>>>>>> 0a379cd49ea7260f16d85db1196c700928396ff5
export default category;