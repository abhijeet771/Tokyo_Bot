import "./OverlayControls.css";

const OverlayControls = ({
  overlaySettings,
  setOverlaySettings,
}) => {
  /* -------------------------------------------------------------------------- */
  /*                            UPDATE SETTINGS                                 */
  /* -------------------------------------------------------------------------- */

  const updateSetting =
    (key, value) => {
      setOverlaySettings(
        (prev) => ({
          ...prev,

          [key]:
            Number(value),
        })
      );
    };

  return (
    <div className="overlay-controls">
      {/* -------------------------------------------------------------------------- */}
      {/*                                  HEADER                                    */}
      {/* -------------------------------------------------------------------------- */}

      <div className="overlay-header">
        <h2>
          Overlay Controls
        </h2>

        <p>
          Adjust hairstyle
          alignment manually
        </p>
      </div>

      {/* -------------------------------------------------------------------------- */}
      {/*                                 SCALE                                      */}
      {/* -------------------------------------------------------------------------- */}

      <div className="control-group">
        <div className="control-top">
          <label>
            Scale
          </label>

          <span>
            {
              overlaySettings.scale
            }
          </span>
        </div>

        <input
          type="range"
          min="0.3"
          max="1.5"
          step="0.01"
          value={
            overlaySettings.scale
          }
          onChange={(e) =>
            updateSetting(
              "scale",
              e.target.value
            )
          }
        />
      </div>

      {/* -------------------------------------------------------------------------- */}
      {/*                                OFFSET X                                    */}
      {/* -------------------------------------------------------------------------- */}

      <div className="control-group">
        <div className="control-top">
          <label>
            Horizontal
          </label>

          <span>
            {
              overlaySettings.offsetX
            }
          </span>
        </div>

        <input
          type="range"
          min="-300"
          max="300"
          step="1"
          value={
            overlaySettings.offsetX
          }
          onChange={(e) =>
            updateSetting(
              "offsetX",
              e.target.value
            )
          }
        />
      </div>

      {/* -------------------------------------------------------------------------- */}
      {/*                                OFFSET Y                                    */}
      {/* -------------------------------------------------------------------------- */}

      <div className="control-group">
        <div className="control-top">
          <label>
            Vertical
          </label>

          <span>
            {
              overlaySettings.offsetY
            }
          </span>
        </div>

        <input
          type="range"
          min="-300"
          max="300"
          step="1"
          value={
            overlaySettings.offsetY
          }
          onChange={(e) =>
            updateSetting(
              "offsetY",
              e.target.value
            )
          }
        />
      </div>

      {/* -------------------------------------------------------------------------- */}
      {/*                                ROTATION                                    */}
      {/* -------------------------------------------------------------------------- */}

      <div className="control-group">
        <div className="control-top">
          <label>
            Rotation
          </label>

          <span>
            {
              overlaySettings.rotation
            }
            °
          </span>
        </div>

        <input
          type="range"
          min="-180"
          max="180"
          step="1"
          value={
            overlaySettings.rotation
          }
          onChange={(e) =>
            updateSetting(
              "rotation",
              e.target.value
            )
          }
        />
      </div>
    </div>
  );
};

export default OverlayControls;