export const getUserInfo = async () => {
  try {
    const res = await fetch("http://localhost:8082/api/User", {
      credentials: "include",
    });
    const info = await res.json();
    return info;
  } catch (error) {
    return {};
  }
};
