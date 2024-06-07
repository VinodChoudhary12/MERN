import mongoose from "mongoose";
const productSchema=mongoose.Schema({
    "id":Number,
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    categoryname:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
    }, 
    thumbnail: String,
    images: Array,
    warrantyInformation:String
})

const product = mongoose.model("product",productSchema)

export default product;