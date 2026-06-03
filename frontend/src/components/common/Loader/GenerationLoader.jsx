import "./GenerationLoader.scss";

import {
  Sparkles,
  Scissors,
  WandSparkles,
} from "lucide-react";

const GenerationLoader = () => {
  return (
    <div className="generation-loader">
      <div className="generation-loader__animation">
        <div className="loader-ring"></div>

        <div className="loader-icon">
          <Sparkles size={30} />
        </div>
      </div>

      <h2>Creating Your New Look</h2>

      <p>
        Our AI is analyzing your face and
        generating the perfect hairstyle.
      </p>

      <div className="generation-steps">
        <div className="step active">
          <Scissors size={16} />
          <span>Analyzing Face</span>
        </div>

        <div className="step active">
          <WandSparkles size={16} />
          <span>Matching Hairstyle</span>
        </div>

        <div className="step">
          <Sparkles size={16} />
          <span>Generating Look</span>
        </div>
      </div>
    </div>
  );
};

export default GenerationLoader;