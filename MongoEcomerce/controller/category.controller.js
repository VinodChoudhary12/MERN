import category from "../model/category.model";

<<<<<<< HEAD
export const newCategory = async (req, res) => {
    const newCa = await category.create({
        categoryName: req.body
    })
}
=======
export const newCategory = async (req,res)=>{
    const newCa= await category.create({
        categoryName: req.body
})}
>>>>>>> 0a379cd49ea7260f16d85db1196c700928396ff5
