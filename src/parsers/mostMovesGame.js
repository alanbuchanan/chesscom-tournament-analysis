import _ from "lodash";
import { pgnToObject } from "../utils/helperMethods";

export const getGameWithMostMoves = (games) => {
  const gameWithMostMoves = games.reduce((acc, game) => {
    const pgnToObjCur = pgnToObject(
      game.pgn.replace(/\{\[%clk.+?(?= |\n)/gims, "")
    );
    const pgnToObjAcc = pgnToObject(
      acc.pgn.replace(/\{\[%clk.+?(?= |\n)/gims, "")
    );

    const movesCountCur = _.replace(
      _.nth(Object.keys(pgnToObjCur.Moves), -2),
      /\./g,
      ""
    );

    const movesCountAcc = _.replace(
      _.nth(Object.keys(pgnToObjAcc.Moves), -2),
      /\./g,
      ""
    );

    return movesCountCur > movesCountAcc ? game : acc;
  }, games[0]);
  return gameWithMostMoves;
};
