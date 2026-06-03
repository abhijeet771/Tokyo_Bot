import API_BASE_URL from "./api";

export const createShareImage =
  async (image) => {
    const response =
      await fetch(
        `${API_BASE_URL}/api/share`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            image,
          }),
        }
      );

    return await response.json();
  };