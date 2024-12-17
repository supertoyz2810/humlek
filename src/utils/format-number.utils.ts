export const formatLikeNumber = (num: number) => {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K"; // Handle thousands
  }
  return num.toString(); // Return the number as is if it's less than 1,000
};
