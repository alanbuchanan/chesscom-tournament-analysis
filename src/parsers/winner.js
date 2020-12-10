import _ from "lodash";

export const getWinner = (players) => {
  const found = players.find((player) => {
    if (_.get(player, "is_winner")) {
      return player.is_winner;
    } else {
      return player.place_finish === 1;
    }
  });

  return found ? found.username : "";
};
