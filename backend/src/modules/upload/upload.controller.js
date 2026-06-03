import { uploadImagesService } from "./upload.service.js";

export const uploadImages = async (
  req,
  res,
  next
) => {
  try {
    const {
      frontImage,
      sideImage,
    } =
      await uploadImagesService(
        req
      );

    return res.status(200).json({
      success: true,
      message:
        "Images uploaded successfully",
      data: {
        frontImage,
        sideImage,
      },
    });
  } catch (error) {
    console.error(
      "Upload Controller Error:",
      error
    );

    next(error);
  }
};