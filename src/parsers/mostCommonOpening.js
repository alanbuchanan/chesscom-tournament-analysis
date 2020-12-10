import _ from "lodash";

const openingTermsMilestones = [
  "Opening",
  "Defense",
  "Game",
  "Accepted",
  "Declined",
];

const removeAfterIfExists = (opening, milestones) => {
  return milestones.reduce((acc, milestone) => {
    if (acc.includes(milestone)) {
      return acc.substring(0, acc.indexOf(milestone) + milestone.length);
    } else {
      return acc;
    }
  }, opening);
};

const retrieveMostCommonOpening = (mostCommonOpeningsObj) => {
  return _.reduce(
    mostCommonOpeningsObj,
    (acc, value, key) => {
      if (value > acc.count) {
        return {
          opening: key,
          count: value,
        };
      } else {
        return acc;
      }
    },
    { opening: "", count: 0 }
  );
};

const parseOpenings = (openings) => {
  return openings.map((opening) => {
    const stripped = opening
      .replace("https://www.chess.com/openings/", "")
      .replace("-", " ");

    const removedAfterMilestones = removeAfterIfExists(
      stripped,
      openingTermsMilestones
    );
    return removedAfterMilestones;
  });
};

export const getMostCommonOpening = (games) => {
  const openings = games.map((game) => {
    return game.eco;
  });

  const parsedOpenings = parseOpenings(_.compact(openings));
  const mostCommonOpeningsObj = _.countBy(parsedOpenings);
  const mostCommonOpening = retrieveMostCommonOpening(mostCommonOpeningsObj);

  return mostCommonOpening;
};
