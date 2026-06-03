import "./ShareButtons.scss";

import {
  MessageCircle,
  Facebook,
  Download,
  Share2,
  Instagram,
  Twitter,
} from "lucide-react";

import { createShareImage } from "../../services/share.service";

const ShareButtons = ({
  generatedImage,
}) => {
  const getShareCard =
    async () => {
      try {
        const base64 =
          generatedImage.replace(
            /^data:image\/\w+;base64,/,
            ""
          );

        const response =
          await createShareImage(
            base64
          );

        if (
          !response.success
        ) {
          throw new Error(
            response.message
          );
        }

        const image =
          response.data.image;

        return `data:image/jpeg;base64,${image}`;
      } catch (error) {
        console.error(error);

        alert(
          "Failed to create share image"
        );

        return null;
      }
    };

  const downloadShareCard =
    async () => {
      const shareImage =
        await getShareCard();

      if (!shareImage)
        return;

      const link =
        document.createElement(
          "a"
        );

      link.href =
        shareImage;

      link.download =
        "trimtokyo-share.jpg";

      link.click();
    };

  return (
    <div className="share-section">
      <div className="share-section__header">
        <Share2 size={18} />

        <h3>
          Share Your New Look
        </h3>
      </div>

      <p>
        Show off your new hairstyle
        with friends and family.
      </p>

      <div className="share-buttons">
        <button
          className="share-btn whatsapp"
          onClick={
            downloadShareCard
          }
        >
          <MessageCircle size={18} />
          WhatsApp
        </button>

        <button
          className="share-btn facebook"
          onClick={
            downloadShareCard
          }
        >
          <Facebook size={18} />
          Facebook
        </button>

        <button
          className="share-btn x"
          onClick={
            downloadShareCard
          }
        >
          <Twitter size={18} />
          X
        </button>

        <button
          className="share-btn instagram"
          onClick={
            downloadShareCard
          }
        >
          <Instagram size={18} />
          Instagram
        </button>

        <button
          className="share-btn download"
          onClick={
            downloadShareCard
          }
        >
          <Download size={18} />
          Download
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;