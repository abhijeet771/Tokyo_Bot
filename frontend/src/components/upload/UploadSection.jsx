import "./UploadSection.scss";

import {
  Upload,
  ShieldCheck,
} from "lucide-react";

const UploadSection = ({
  frontImage,
  setFrontImage,
}) => {
  const handleImageUpload =
    (event) => {
      const file =
        event.target.files?.[0];

      if (!file) return;

      setFrontImage(file);
    };

  return (
    <div className="upload-section">
      <h1 className="upload-section__title">
        <span>AI</span> Hairstyle Studio
      </h1>

      <p className="upload-section__subtitle">
        Upload your photo, choose a hairstyle
        and see your new look{" "}
        <span>instantly</span> with AI
      </p>

      <div className="upload-section__cards">
        <div className="upload-card">
          <h3>
            Upload Front Photo
          </h3>

          <p>
            Upload a clear front
            face photo
          </p>

          <label className="upload-card__dropzone">
            <Upload size={28} />

            <h4>
              Click to upload
            </h4>

            <span>
              JPG, PNG, WEBP
            </span>

            <input
              type="file"
              accept="image/*"
              onChange={
                handleImageUpload
              }
              hidden
            />
          </label>

          {frontImage && (
            <div className="upload-card__preview">
              <img
                src={URL.createObjectURL(
                  frontImage
                )}
                alt="Preview"
              />

              <div className="success-badge">
                ✓
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="upload-section__privacy">
        <ShieldCheck size={16} />

        <span>
          Your photos are secure
          and will not be shared.
        </span>
      </div>
    </div>
  );
};

export default UploadSection;