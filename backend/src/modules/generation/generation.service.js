import replicate from "../../config/replicate.js";
import uploadBufferToCloudinary from "../../utils/uploadBufferToCloudinary.js";

import {
  HAIRSTYLE_PROMPTS,
} from "../../constants/hairstylePrompts.js";

/* -------------------------------------------------------------------------- */
/*                          GENERATE HAIRSTYLE                                */
/* -------------------------------------------------------------------------- */

export const generateHairstyleService =
  async ({
    frontImage,
    hairstyleKey,
  }) => {
    try {
      console.log(
        "\n=================================================="
      );
      console.log(
        "GENERATION REQUEST STARTED"
      );
      console.log(
        "==================================================\n"
      );

      const hairstylePrompt =
        HAIRSTYLE_PROMPTS[
          hairstyleKey
        ];

      if (
        !hairstylePrompt
      ) {
        throw new Error(
          "Invalid hairstyle selected"
        );
      }

      console.log(
        "Selected Hairstyle:",
        hairstyleKey
      );

      console.log(
        "Image Size:",
        (
          frontImage.size /
          1024 /
          1024
        ).toFixed(2),
        "MB"
      );

      /* -------------------------------------------------- */
      /* UPLOAD INPUT IMAGE                                 */
      /* -------------------------------------------------- */

      console.log(
        "\n========== UPLOADING IMAGE ==========\n"
      );

      console.time(
        "cloudinary-upload"
      );

      const uploadedImage =
        await uploadBufferToCloudinary(
          frontImage.buffer,
          "hairstyle-inputs"
        );

      console.timeEnd(
        "cloudinary-upload"
      );

      const imageUrl =
        uploadedImage.secure_url;

      console.log(
        "Input URL:",
        imageUrl
      );

      /* -------------------------------------------------- */
      /* BUILD PROMPT                                       */
      /* -------------------------------------------------- */

      const prompt = `
${hairstylePrompt}

IMPORTANT:

Use the input image as the identity reference.

Identity preservation is the highest priority.

Keep the same person exactly.
Keep the same facial features.
Keep the same face shape.
Keep the same eyes.
Keep the same eyebrows.
Keep the same nose.
Keep the same lips.
Keep the same jawline.
Keep the same ears.
Keep the same beard and facial hair.
Keep the same skin tone.
Keep the same age.
Keep the same ethnicity.
Keep the same expression.
Keep the same clothing.
Keep the same camera angle.
Keep the same background.
Keep the same lighting.

Only modify the hairstyle.

Professional barber haircut.
Natural black hair.
Realistic hair strands.
Clean hairline.
Photorealistic portrait.
High detail.

Do not beautify the face.
Do not modify facial structure.
Do not alter identity.
Hair transformation only.
`;

      /* -------------------------------------------------- */
      /* REPLICATE CALL                                     */
      /* -------------------------------------------------- */

      console.log(
        "\n========== GENERATING ==========\n"
      );

      console.time(
        "replicate-generation"
      );

      const output =
        await replicate.run(
          "black-forest-labs/flux-2-pro",
          {
            input: {
              prompt,

              input_images: [
                imageUrl,
              ],

              aspect_ratio:
                "match_input_image",

              resolution:
                "match_input_image",

              output_format:
                "jpg",
            },
          }
        );

      console.timeEnd(
        "replicate-generation"
      );

      console.log(
        "Replicate completed successfully"
      );

      /* -------------------------------------------------- */
      /* GET OUTPUT URL                                     */
      /* -------------------------------------------------- */

      const generatedUrl =
        output.url();

      console.log(
        "Generated URL:",
        generatedUrl
      );

      /* -------------------------------------------------- */
      /* DOWNLOAD GENERATED IMAGE                           */
      /* -------------------------------------------------- */

      console.log(
        "\n========== DOWNLOADING RESULT ==========\n"
      );

      console.time(
        "image-download"
      );

      const response =
        await fetch(
          generatedUrl
        );

      console.log(
        "Download Status:",
        response.status
      );

      const arrayBuffer =
        await response.arrayBuffer();

      console.timeEnd(
        "image-download"
      );

      console.log(
        "Downloaded Size:",
        (
          arrayBuffer.byteLength /
          1024 /
          1024
        ).toFixed(2),
        "MB"
      );

      /* -------------------------------------------------- */
      /* CONVERT TO BASE64                                  */
      /* -------------------------------------------------- */

      console.log(
        "\n========== CONVERTING ==========\n"
      );

      console.time(
        "base64-conversion"
      );

      const imageBuffer =
        Buffer.from(
          arrayBuffer
        );

      const generatedImage =
        {
          mimeType:
            "image/jpeg",

          data:
            imageBuffer.toString(
              "base64"
            ),
        };

      console.timeEnd(
        "base64-conversion"
      );

      console.log(
        "Base64 Length:",
        generatedImage.data
          .length
      );

      console.log(
        "\n============= RESULT =============\n"
      );

      console.log(
        "Image Generated:",
        !!generatedImage
      );

      console.log(
        "\n==================================\n"
      );

      return {
        hairstyle:
          hairstyleKey,

        image:
          generatedImage,
      };
    } catch (error) {
      console.error(
        "\n=================================="
      );

      console.error(
        "GENERATION SERVICE ERROR"
      );

      console.error(
        "==================================\n"
      );

      console.error(
        error
      );

      throw error;
    }
  };