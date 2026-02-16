import { v2 as cloudinary } from "cloudinary";


const CLOUDINARY_CONFIG = {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
};


// cloudinary.config({
//   CLOUDINARY_CONFIG
// });

cloudinary.config({
  cloud_name:"dnjtrlnme",
  api_key:"455276942132399",
  api_secret:"cONuBM5Ilq7anA19iQ5JT_xf6Xw",
});

export default cloudinary;
export { CLOUDINARY_CONFIG };