import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

import { generateQRCode } from "../../utils/shareCard/qrGenerator.js";
import { buildShareCard } from "../../utils/shareCard/shareCardBuilder.js";

const __filename =
  fileURLToPath(import.meta.url);

const __dirname =
  path.dirname(__filename);

export const createShareImageService =
  async (
    base64Image
  ) => {
    try {
      /* ------------------------------------------------------ */
      /*                CLEAN BASE64 IMAGE                       */
      /* ------------------------------------------------------ */

      const cleanBase64 =
        base64Image.replace(
          /^data:image\/\w+;base64,/,
          ""
        );

      const imageBuffer =
        Buffer.from(
          cleanBase64,
          "base64"
        );

      /* ------------------------------------------------------ */
      /*                    LOAD LOGO                           */
      /* ------------------------------------------------------ */

      const logoPath =
        path.join(
          __dirname,
          "../../assets/trimtokyo-logo.png"
        );

      const logoBuffer =
        await sharp(
          logoPath
        )
          .resize({
            width: 220,
          })
          .png()
          .toBuffer();

      /* ------------------------------------------------------ */
      /*                    GENERATE QR                         */
      /* ------------------------------------------------------ */

      const qrBuffer =
        await generateQRCode(
          "https://trimtokyo.vercel.app/"
        );

      /* ------------------------------------------------------ */
      /*                 BUILD SHARE CARD                       */
      /* ------------------------------------------------------ */

      const finalImage =
        await buildShareCard({
          hairstyleImageBuffer:
            imageBuffer,

          logoBuffer,

          qrBuffer,
        });

      /* ------------------------------------------------------ */
      /*                     RESPONSE                           */
      /* ------------------------------------------------------ */

      return {
        mimeType:
          "image/jpeg",

        image:
          finalImage.toString(
            "base64"
          ),
      };
    } catch (error) {
      console.error(
        "Share Service Error:",
        error
      );

      throw error;
    }
  };