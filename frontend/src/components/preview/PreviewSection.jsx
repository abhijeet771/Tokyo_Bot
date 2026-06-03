import "./PreviewSection.scss";

import {
  Sparkles,
  Download,
} from "lucide-react";

import ShareButtons from "../share/ShareButtons";
import EmptyPreview from "./EmptyPreview";
import GenerationLoader from "../common/Loader/GenerationLoader";

const PreviewSection = ({
  loading,
  generatedImage,
}) => {
  const handleDownload =
    () => {
      if (!generatedImage)
        return;

      const link =
        document.createElement(
          "a"
        );

      link.href =
        generatedImage;

      link.download =
        "trimtokyo-look.jpg";

      document.body.appendChild(
        link
      );

      link.click();

      document.body.removeChild(
        link
      );
    };

  if (loading) {
    return (
      <GenerationLoader />
    );
  }

  if (!generatedImage) {
    return (
      <EmptyPreview />
    );
  }

  return (
    <div className="preview-section">
      <div className="preview-section__header">
        <h2>
          Your AI Generated Look
        </h2>

        <div className="generated-badge">
          <Sparkles size={14} />

          Generated
        </div>
      </div>

      <div className="preview-image">
        <img
          src={generatedImage}
          alt="Generated Hairstyle"
        />
      </div>

      <ShareButtons
        generatedImage={
          generatedImage
        }
      />

      <button
        className="download-btn"
        onClick={
          handleDownload
        }
      >
        <Download size={18} />

        Download Image
      </button>
    </div>
  );
};

export default PreviewSection;