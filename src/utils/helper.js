import axios from "axios";
export const makeUserName = (name) => {
  return name.split(" ").join("").toLowerCase();
};

// Upload Image to Cloudinary
export const uploadImageToCloudinary = async (photo) => {
  const formData = new FormData();
  formData.append("file", photo);
  formData.append(
    "upload_preset",
    import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
  );
  formData.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

  // API Call

  try {
    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
      }/image/upload`,
      formData
    );
    return res;
  } catch (error) {
    return error;
  }
};
