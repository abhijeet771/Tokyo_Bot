import streamifier from "streamifier";

import cloudinary from "../config/cloudinary.js";

/* -------------------------------------------------------------------------- */
/*                         UPLOAD BUFFER TO CLOUDINARY                        */
/* -------------------------------------------------------------------------- */

export const uploadToCloudinary = (
  buffer,
  folder = "trimtokyo"
) => {
  return new Promise(
    (resolve, reject) => {
      const uploadStream =
        cloudinary.uploader.upload_stream(
          {
            folder,
            resource_type: "image",
          },
          (
            error,
            result
          ) => {
            if (error) {
              return reject(error);
            }

            resolve(result);
          }
        );

      streamifier
        .createReadStream(buffer)
        .pipe(uploadStream);
    }
  );
};

/* -------------------------------------------------------------------------- */
/*                   UPLOAD AI GENERATED IMAGE BUFFER                         */
/* -------------------------------------------------------------------------- */

export const uploadGeneratedImage =
  async (
    imageBuffer,
    folder =
      "trimtokyo/generated"
  ) => {
    if (!imageBuffer) {
      throw new Error(
        "Generated image buffer is required"
      );
    }

    return uploadToCloudinary(
      imageBuffer,
      folder
    );
  };

/* -------------------------------------------------------------------------- */
/*                      DELETE IMAGE FROM CLOUDINARY                          */
/* -------------------------------------------------------------------------- */

export const deleteFromCloudinary =
  async (publicId) => {
    return cloudinary.uploader.destroy(
      publicId
    );
  };

/* -------------------------------------------------------------------------- */
/*                                EXPORTS                                     */
/* -------------------------------------------------------------------------- */

export default {
  uploadToCloudinary,
  uploadGeneratedImage,
  deleteFromCloudinary,
};