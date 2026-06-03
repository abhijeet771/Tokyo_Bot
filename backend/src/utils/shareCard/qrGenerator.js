import QRCode from "qrcode";

export const generateQRCode =
  async (
    url = "https://trimtokyo.vercel.app/"
  ) => {
    return await QRCode.toBuffer(
      url,
      {
        width: 220,
        margin: 1,
      }
    );
  };