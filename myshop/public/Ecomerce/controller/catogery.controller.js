import category from "../model/catogery.model.js";

export const getcatogery = (req, res, next) => { };
// export const addInBulk = (req, res, next) => {
//   const categoryNames = req.body;

//   Promise.all(
//     categoryNames.map((categoryName) => {
//       return category
//         .create({ catogeryName: categoryName })
//         .then((data) => data)
//         .catch((err) => err);
//     })
//   )
//     .then((results) => {
//       // Send response after all operations are completed
//       res
//         .status(201)
//         .json({ msg: "Categories saved successfully", result: results });
//     })
//     .catch((err) => {
//       res.status(500).json({ msg: "Internal server error", error: err });
//     });
// };

// export const addInBulk = async (req, response, next) => {
//     const categoryNames = req.body;
//     try {
//         for (const name of categoryNames) {

//             await category.create({ categoryName: name })
//         }
//         return response.status(200).json({ message: "All Product Saved..." });
//     } catch (error) {
//         return response.status(500).json({ error: "Internal Server Error", msg: error })

//     }
// }
export const addInBulk = async (req, response, next) => {
    const categoryNames = req.body;
    try {
        for (const name of categoryNames) {
            await category.create({ catogeryName: name });
        }
        return response.status(200).json({ message: "All Categories Saved Successfully." });
    } catch (error) {
        return response.status(500).json({ error: "Internal Server Error", msg: error });
    }
};
