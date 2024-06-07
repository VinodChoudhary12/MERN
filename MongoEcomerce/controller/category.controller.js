import category from "../model/category.model";

export const newCategory = async (req, res) => {
    const newCa = await category.create({
        categoryName: req.body
    })
}