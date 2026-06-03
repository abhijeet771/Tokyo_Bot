import Jimp from "jimp";

export const addWatermark =
  async (imageBuffer) => {
    try {
      const image =
        await Jimp.read(imageBuffer);

      const font =
        await Jimp.loadFont(
          Jimp.FONT_SANS_32_WHITE
        );

      image.print(
        font,
        20,
        20,
        "TrimTokyo"
      );

      return await image.getBufferAsync(
        Jimp.MIME_PNG
      );
    } catch (error) {
      throw new Error(
        "Watermark failed"
      );
    }
  };