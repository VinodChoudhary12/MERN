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
export const allProduct =async (req,res)=>{
        try {
            const products = await product.find()
            if(!product)
                return res.status(404).json("Products not Found")
            return res.status(200).json(products)
        } catch (err) {
            return res.status(500).json("Internal Server Error")
        }
}