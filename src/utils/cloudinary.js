import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


cloudinary.config({ 
  cloud_name: "dmori3ojw", 
  api_key: "424721492592495", 
  api_secret: "tMNmqHEEGX4Ky_fiNWwPmDtsSqc "
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        // if (!localFilePath) return null
        //upload the file on cloudinary

        console.log('Cloudinary Config:', cloudinary.config());
        console.log("local path :",localFilePath);
        
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });
        // const response = await cloudinary.uploader.upload(localFilePath)
        // file has been uploaded successfull
        console.log("file is uploaded on cloudinary ", response);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        // fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}



export default uploadOnCloudinary