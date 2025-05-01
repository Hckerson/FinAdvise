import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const url = cloudinary.image("cloud_castle.jpg", {transformation: [
  {width: 350, crop: "scale"},
  {fetch_format: "auto"}
  ]});
console.log(url);