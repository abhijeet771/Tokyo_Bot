export const getShareCardTemplate =
  () => {
    const cardWidth = 1080;
    const cardHeight = 1500;

    const backgroundSvg = `
    <svg
      width="${cardWidth}"
      height="${cardHeight}"
    >
      <defs>
        <linearGradient
          id="bg"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop
            offset="0%"
            stop-color="#faf5ff"
          />
          <stop
            offset="100%"
            stop-color="#ffffff"
          />
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect
        width="100%"
        height="100%"
        fill="url(#bg)"
      />

      <!-- Image Frame -->
      <rect
        x="40"
        y="280"
        width="1000"
        height="920"
        rx="40"
        fill="#ffffff"
        stroke="#e9d5ff"
        stroke-width="3"
      />

      <!-- Main Title -->
      <text
        x="540"
        y="205"
        text-anchor="middle"
        font-size="64"
        font-weight="700"
        fill="#111827"
      >
        My New TrimTokyo Look
      </text>

      <!-- Footer Title -->
      <text
        x="540"
        y="1360"
        text-anchor="middle"
        font-size="42"
        font-weight="600"
        fill="#4b5563"
      >
        Powered by TrimTokyo AI
      </text>

      <!-- Footer Subtitle -->
      <text
        x="540"
        y="1410"
        text-anchor="middle"
        font-size="26"
        fill="#9ca3af"
      >
        Scan QR to Try Your Next Hairstyle
      </text>
    </svg>
    `;

    return {
      cardWidth,
      cardHeight,
      backgroundSvg,
    };
  };