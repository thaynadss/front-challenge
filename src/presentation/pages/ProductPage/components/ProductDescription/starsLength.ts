export const starsLength = (rating: number) => {
  const yellowStars = new Array(rating).fill(1);
  const grayStars = new Array(5 - rating).fill(1);

  return { yellowStars, grayStars }
};