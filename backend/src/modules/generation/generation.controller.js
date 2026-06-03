import { generateHairstyleService } from "./generation.service.js";

export const generateHairstyle = async (
  req,
  res,
  next
) => {
  try {
    const frontImage =
      req.files?.frontImage?.[0];

    const { hairstyleKey } =
      req.body;

    if (!frontImage) {
      return res.status(400).json({
        success: false,
        message:
          "Front image is required",
      });
    }

    if (!hairstyleKey) {
      return res.status(400).json({
        success: false,
        message:
          "Hairstyle key is required",
      });
    }

    const result =
      await generateHairstyleService({
        frontImage,
        hairstyleKey,
      });

    return res.status(200).json({
      success: true,
      message:
        "Hairstyle generated successfully",
      data: result,
    });
  } catch (error) {
    console.error(
      "Generation Controller Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        error.message ||
        "Failed to generate hairstyle",
    });
  }
};