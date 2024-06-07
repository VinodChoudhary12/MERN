import { v2 as cloudinary } from "cloudinary"
import fs from "fs"


cloudinary.config({
    cloud_name: "dapys6ybw",
    api_key: "549677616417383",
    api_secret: "OFFob1fPNWDGMl7CIBsZAm0Ko2k"
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
<<<<<<< HEAD
            resource_type: "auto"
=======
            resource_type: "auto"   
>>>>>>> 0a379cd49ea7260f16d85db1196c700928396ff5
        })
        // file has been uploaded successfull
        console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null;
    }
}



export { uploadOnCloudinary }