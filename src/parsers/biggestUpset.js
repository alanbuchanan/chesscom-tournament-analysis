export const getBiggestUpset = (games) => {
  const biggestUpset = games.reduce((acc, game) => {
    const winningRating =
      game.white.result === "win"
        ? game.white.rating
        : game.black.result === "win"
        ? game.black.rating
        : null;

    if (!winningRating) return acc;

    const losingRating =
      game.white.result === "win"
        ? game.black.rating
        : game.black.result === "win"
        ? game.white.rating
        : null;

    const winningRatingExisting =
      acc.white.result === "win"
        ? acc.white.rating
        : acc.black.result === "win"
        ? acc.black.rating
        : null;
    const losingRatingExisting =
      acc.white.result === "win"
        ? acc.black.rating
        : acc.black.result === "win"
        ? acc.white.rating
        : null;

    const gap = losingRating - winningRating;

    const gapExisting = losingRatingExisting - winningRatingExisting;

    return gap > gapExisting ? game : acc;
  }, games[0]);
  return biggestUpset;
};
