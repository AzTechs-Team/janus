export const cvService = async (imgUrl) => {
  try {
    console.log(imgUrl);
    const res = await fetch(
      `http://localhost:8082/api/Services/CV?img=${imgUrl}`,
      {
        credentials: "include",
      }
    );
    const info = await res.json();
    return info;
  } catch (error) {
    return [];
  }
};
