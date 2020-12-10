import _ from "lodash";

export const getResultTypes = (games) => {
  const gameOutcomes = games.reduce(
    (acc, game) => {
      acc[game.black.result] += 1;
      acc[game.white.result] += 1;
      return acc;
    },
    { draw: 0, win: 0, timeout: 0, resigned: 0, checkmated: 0 }
  );

  return _.pick(gameOutcomes, ["checkmated", "timeout", "resigned"]);
};
