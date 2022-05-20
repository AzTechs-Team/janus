export const handleImageFile = async (files, updateImageState) => {
  for (const key in files) {
    if (key !== "length" && key !== "item") {
      const _image = files[key];
      const rf = new FileReader();
      rf.readAsDataURL(_image);
      rf.onloadend = (event) => {
        handleApiCall(event.target.result, updateImageState);
      };
    }
  }
};

const handleApiCall = async (result, updateImageState) => {
  const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG_API_KEY}`;
  const body = new FormData();
  body.append("image", result.split(",").pop());
  body.append("name", "test.jpg");
  body.append("expiration", "300");
  try {
    let res = await fetch(url, {
      method: "POST",
      body: body,
    });
    res = await res.json();
    updateImageState(res.data.url);
    return await res.data.url;
  } catch (error) {
    console.log(error);
    return "";
  }
};
