import { uploadToCloudinary } from "../../utils/cloudinary.js";

export const uploadImagesService = async (
  req
) => {
  const response = {
    frontImage: null,
    sideImage: null,
  };

  try {
    /* =========================
       FRONT IMAGE
    ========================= */

    if (
      req.files?.frontImage &&
      req.files.frontImage.length > 0
    ) {
      const frontFile =
        req.files.frontImage[0];

      const uploadedFront =
        await uploadToCloudinary(
          frontFile.buffer,
          "trimtokyo/front"
        );

      response.frontImage = {
        originalName:
          frontFile.originalname,

        publicId:
          uploadedFront.public_id,

        url:
          uploadedFront.secure_url,
      };
    }

    /* =========================
       SIDE IMAGE
    ========================= */

    if (
      req.files?.sideImage &&
      req.files.sideImage.length > 0
    ) {
      const sideFile =
        req.files.sideImage[0];

      const uploadedSide =
        await uploadToCloudinary(
          sideFile.buffer,
          "trimtokyo/side"
        );

      response.sideImage = {
        originalName:
          sideFile.originalname,

        publicId:
          uploadedSide.public_id,

        url:
          uploadedSide.secure_url,
      };
    }

    return response;
  } catch (error) {
    console.error(
      "Upload Service Error:",
      error
    );

    throw error;
  }
};