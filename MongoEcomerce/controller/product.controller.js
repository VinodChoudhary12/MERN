import { uploadOnCloudinary } from "../middleware/cloudinary.js";
import product from "../model/product.model.js"
export const saveInBulk = async (req, res) => {
    const { id, title, price, description, categoryname, rating, brand, warrantyInformation, images, thumbnail, stock } = req.body
    try {
        const products = await product.insertMany(req.body)
        if (!product) {
            return res.status(400).json({ message: "Request body must be an array of products" });
        }
        return res.status(201).json({ products });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ err });
    }

}
export const allProduct = async (req, res) => {
    try {
        const products = await product.find()
        if (!product)
            return res.status(404).json("Products not Found")
        return res.status(200).json(products)
    } catch (err) {
        return res.status(500).json("Internal Server Error")
    }
}
export const getProductById = async (req, res) => {
    const id = req.params.id;
    const Product = await product.findById(id)
    if (!product)
        return res.status(404).json("Product Not Found")
    return res.status(200).json({ message: "product Found", Product })
}
export const addProduct = async (req, res) => {
    const { title, price, description, categoryname, rating, brand, warrantyInformation, images, thumbnail, stock } = req.body



    let imgArray = [];
    if (req.files && req.files.images) {
        for (const br of req.files.images) {

            const result = await uploadOnCloudinary(br.path)
            if (result) {
                imgArray.push(result.url);
            }
            else {
                return res.status(500).json({ message: "Error uploading images" });
            }

        }
    }
    const thumbnailimg = req.files.thumbnail[0].path;
    const thumPath = await uploadOnCloudinary(thumbnailimg);
    console.log(thumPath);
    console.log(imgpath);
    const addedProduct = await product.create({
        title,
        price,
        description,
        categoryname,
        rating,
        brand,
        warrantyInformation,
        images: imgArray,
        thumbnail: thumPath.url,
        stock
    })
    return res.status(200).json({ message: "Product Added Sucessfully", addedProduct })
}

export const updateProduct = async (req, res) => {
    const id = req.params.id
    const updatedData = req.body;
    console.log(updatedData);
    try {
        const updatedProduct = await product.findByIdAndUpdate(id, updatedData, { new: true })
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product Not Found" })
        }
        return res.status(200).json({ message: "Product Updated Successfully", updatedProduct })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" })
    }
}
export const deleteProduct = async (req, res) => {
    const id = req.params.id
    try {
        const deletedUser = await product.deleteOne({ _id: id })
        if (!deletedUser.deletedCount) {
            return res.status(404).json({ message: "Product Not Found" })
        }
        return res.status(404).json({ message: "Product Deleted Successfully" })
    } catch (error) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" })
    }
}