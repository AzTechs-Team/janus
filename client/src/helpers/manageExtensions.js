export const manageExtensions = async (extensions) => {
  console.log(extensions);
  try {
    const res = await fetch(
      `http://localhost:8082/api/Extensions?extension=${extensions}`,
      {
        credentials: "include",
      }
    );
    const info = await res.json();
    localStorage.setItem("userDetails", JSON.stringify(info));
    return info;
  } catch (error) {
    return {};
  }
};
