export const getQuotes = async () => {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const val = await response.json();
    return val.content;
  } catch (error) {
    console.error(error);
    return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis
          aenean tristique malesuada ipsum at eget. Pharetra cursus purus
          habitasse iaculis at porttitor. Morbi non mauris nibh aliquet. aenean
          tristique malesuada ipsum at eget. Pharetra cursus purus`;
  }
};
