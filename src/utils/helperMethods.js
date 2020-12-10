const movesToObject = (str) => {
  const onlyMoves = str.split(/\n\n/g)[1];
  const splitBySpace = onlyMoves.split("  ");
  const obj = splitBySpace.reduce((acc, cur) => {
    const [moveNumber, move] = cur.split(" ");
    acc[moveNumber] = move;
    return acc;
  }, {});
  return obj;
};

export const pgnToObject = (pgn) => {
  const splitFeatures = pgn.match(/\[.*?]/gm);
  const featuresToObject = splitFeatures.reduce((acc, feature) => {
    const stripped = feature.replace(/[[\]"]/g, "");

    const splitF = stripped.split(/ (.+)/);
    acc[splitF[0]] = splitF[1];
    return acc;
  }, {});

  const featuresToObjectWithMoves = {
    ...featuresToObject,
    Moves: movesToObject(pgn),
  };
  return featuresToObjectWithMoves;
};
