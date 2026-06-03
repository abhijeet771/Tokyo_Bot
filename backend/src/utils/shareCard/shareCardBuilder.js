import sharp from "sharp";

import { getShareCardTemplate } from "./shareCardTemplate.js";

export const buildShareCard =
  async ({
    hairstyleImageBuffer,
    logoBuffer,
    qrBuffer,
  }) => {
    const {
      cardWidth,
      cardHeight,
      backgroundSvg,
    } =
      getShareCardTemplate();

    const resizedHairstyleImage =
      await sharp(
        hairstyleImageBuffer
      )
        .resize({
          width: 900,
          height: 900,
          fit: "contain",
          background:
            "#ffffff",
        })
        .jpeg()
        .toBuffer();

    const finalImage =
      await sharp({
        create: {
          width:
            cardWidth,
          height:
            cardHeight,
          channels: 4,
          background:
            "#ffffff",
        },
      })
        .composite([
          {
            input:
              Buffer.from(
                backgroundSvg
              ),
            top: 0,
            left: 0,
          },

          /* Logo */
          {
            input:
              logoBuffer,
            top: 25,
            left: 430,
          },

          /* Generated Hairstyle */
          {
            input:
              resizedHairstyleImage,
            top: 300,
            left: 90,
          },

          /* QR */
          {
            input:
              qrBuffer,
            top: 1160,
            left: 430,
          },
        ])
        .jpeg({
          quality: 95,
        })
        .toBuffer();

    return finalImage;
  };