import { createShareImageService } from "./share.service.js";

export const createShareImage =
  async (
    req,
    res
  ) => {
    try {
      const { image } =
        req.body;

      if (!image) {
        return res.status(400).json({
          success: false,
          message:
            "Image is required",
        });
      }

      const result =
        await createShareImageService(
          image
        );

      return res.status(200).json({
        success: true,
        message:
          "Share image created successfully",
        data: result,
      });
    } catch (error) {
      console.error(
        "Share Controller Error:",
        error
      );

      return res.status(500).json({
        success: false,
        message:
          error.message ||
          "Failed to create share image",
      });
    }
  };