import API_BASE_URL from "./api";

export const generateHairstyle =
  async ({
    frontImage,
    hairstyleKey,
  }) => {
    try {
      const formData =
        new FormData();

      formData.append(
        "frontImage",
        frontImage
      );

      formData.append(
        "hairstyleKey",
        hairstyleKey
      );

      const response =
        await fetch(
          `${API_BASE_URL}/api/generation`,
          {
            method: "POST",
            body: formData,
          }
        );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Failed to generate hairstyle"
        );
      }

      return data;
    } catch (error) {
      console.error(
        "Generation Service Error:",
        error
      );

      throw error;
    }
  };