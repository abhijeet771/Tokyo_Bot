import "./AIStudio.scss";

import { useState } from "react";

import UploadSection from "../components/upload/UploadSection";
import HairstyleSelector from "../components/hairstyle/HairstyleSelector";
import PreviewSection from "../components/preview/PreviewSection";

import { Sparkles } from "lucide-react";

import { generateHairstyle } from "../services/generation.service";

const AiStudio = () => {
  const [
    frontImage,
    setFrontImage,
  ] = useState(null);

  const [
    selectedHairstyle,
    setSelectedHairstyle,
  ] = useState("");

  const [
    generatedImage,
    setGeneratedImage,
  ] = useState(null);

  const [
    loading,
    setLoading,
  ] = useState(false);

  const handleGenerate =
    async () => {
      try {
        if (!frontImage) {
          alert(
            "Please upload a photo"
          );

          return;
        }

        if (
          !selectedHairstyle
        ) {
          alert(
            "Please select a hairstyle"
          );

          return;
        }

        setLoading(true);

        const response =
          await generateHairstyle({
            frontImage,
            hairstyleKey:
              selectedHairstyle,
          });

        if (
          !response.success
        ) {
          throw new Error(
            response.message
          );
        }

        const image =
          response.data.image;

        setGeneratedImage(
          `data:${image.mimeType};base64,${image.data}`
        );
      } catch (error) {
        console.error(
          error
        );

        alert(
          error.message
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="ai-studio">
      <div className="ai-studio__left">
        <UploadSection
          frontImage={
            frontImage
          }
          setFrontImage={
            setFrontImage
          }
        />

        <HairstyleSelector
          selectedHairstyle={
            selectedHairstyle
          }
          setSelectedHairstyle={
            setSelectedHairstyle
          }
        />

        <button
          className="generate-btn"
          onClick={
            handleGenerate
          }
          disabled={loading}
        >
          <Sparkles size={20} />

          {loading
            ? "Generating..."
            : "Generate My New Look"}
        </button>

        <div className="login-required">
          Login required to generate
          your hairstyle
        </div>
      </div>

      <div className="ai-studio__right">
        <PreviewSection
          generatedImage={
            generatedImage
          }
          loading={loading}
        />
      </div>
    </div>
  );
};

export default AiStudio;