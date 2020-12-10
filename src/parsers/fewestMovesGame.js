import _ from "lodash";
import { pgnToObject } from "../utils/helperMethods";

export const getGameWithFewestMoves = (games) => {
  const gameWithFewestMoves = games.reduce((acc, game) => {
    const pgnToObjCur = pgnToObject(
      game.pgn
        .replace(/\{\[%clk.+?(?= |\n)/gims, "")
        .replace(/ 1-0/gims, "")
        .replace(/ 0-1/gims, "")
        .replace(/ 1\/2-1\/2/gims, "")
    );
    const pgnToObjAcc = pgnToObject(
      acc.pgn
        .replace(/\{\[%clk.+?(?= |\n)/gims, "")
        .replace(/ 1-0/gims, "")
        .replace(/ 0-1/gims, "")
        .replace(/ 1\/2-1\/2/gims, "")
    );

    const movesCountCur = _.replace(
      _.last(Object.keys(pgnToObjCur.Moves)),
      /\./g,
      ""
    );

    const movesCountAcc = _.replace(
      _.last(Object.keys(pgnToObjAcc.Moves)),
      /\./g,
      ""
    );

    return Number(movesCountCur) < Number(movesCountAcc) ? game : acc;
  }, games[0]);

  return gameWithFewestMoves;
};
