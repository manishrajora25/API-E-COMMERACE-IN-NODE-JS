import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "user_images", // cloudinary folder name
    allowed_formats: ["jpg", "png", "jpeg"],
    public_id: (req, file) => `user-${Date.now()}`, // image name
  },
});

export const uploadCloud = multer({ storage: storage });
