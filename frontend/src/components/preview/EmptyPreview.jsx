import "./EmptyPreview.scss";

import {
  Sparkles,
  Upload,
  Scissors,
  ImageIcon,
} from "lucide-react";

const EmptyPreview = () => {
  return (
    <div className="empty-preview">
      <div className="empty-preview__icon">
        <Sparkles size={40} />
      </div>

      <h2>Your AI Generated Look</h2>

      <p>
        Upload your photo and select a
        hairstyle to see your amazing
        AI-powered transformation.
      </p>

      <div className="preview-steps">
        <div className="preview-step">
          <Upload size={18} />

          <span>
            Upload Photo
          </span>
        </div>

        <div className="preview-step">
          <Scissors size={18} />

          <span>
            Select Hairstyle
          </span>
        </div>

        <div className="preview-step">
          <ImageIcon size={18} />

          <span>
            Generate Look
          </span>
        </div>
      </div>

      <div className="preview-placeholder">
        <Sparkles size={50} />

        <span>
          Result Preview
        </span>
      </div>
    </div>
  );
};

export default EmptyPreview;