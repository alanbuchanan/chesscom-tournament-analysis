import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import { PieChart } from "react-minimal-pie-chart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faChessPawn,
  faSurprise,
  faRunning,
  faWalking,
  faFlagCheckered,
  faSpinner,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import styled, { keyframes } from "styled-components";

const green = "#6E9C47";

const Container = styled.main`
  display: flex;
  justify-content: center;
  color: #eee;
  background-color: #000;
`;

const Panel = styled.div`
  text-align: center;
  background-color: #444;
  margin: 30px 0;
  padding: 20px;
`;

const Results = styled.div`
  margin-top: 70px;
`;

const H1 = styled.h1`
  font-family: "Fjalla One", sans-serif;
  text-transform: uppercase;
  font-size: 40px;
  margin-bottom: 40px;
`;

const H2 = styled.h2`
  font-family: "Fjalla One", sans-serif;
  text-transform: uppercase;
`;

const IconAndTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  font-size: 30px;
`;

const Section = styled.section`
  margin-top: 30px;
  margin-bottom: 60px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  margin: 10px 0;
`;

const Button = styled.button`
  font-family: "Fjalla One", sans-serif;
  text-transform: uppercase;
  border: none;
  background-color: ${green};
  color: #eee;
  font-size: 15px;
  border-radius: 4px;
  border-bottom: 3px solid #4f773b;
  margin-top: 10px;
  padding: 5px 10px;
  outline: none;
  cursor: pointer;
`;

const spin = keyframes`
  from {
      transform:rotate(0deg);
  }
  to {
      transform:rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  animation-name: ${spin};
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  margin-top: 20px;
`;
const Icon = ({ icon }) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      color={green}
      style={{ marginRight: "10px" }}
    />
  );
};
const LinkIcon = ({ url }) => {
  return (
    <a href={url} style={{ marginLeft: "10px" }} target="_blank">
      <FontAwesomeIcon icon={faExternalLinkAlt} style={{ cursor: "pointer" }} />
    </a>
  );
};
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

const getMostCommonOpening = (mostCommonOpeningsObj) => {
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

const pgnToObject = (pgn) => {
  const splitFeatures = pgn.match(/\[.*?]/gm);
  const featuresToObject = splitFeatures.reduce((acc, feature) => {
    const stripped = feature.replace(/[\[\]\"]/g, "");

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

function App() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [userInput, setUserInput] = useState();

  const [mostCommonOpening, setMostCommonOpening] = useState();
  const [biggestUpset, setBiggestUpset] = useState();
  const [winner, setWinner] = useState();
  const [winningOutcomes, setWinningOutcomes] = useState();
  const [mostMovesGame, setMostMovesGame] = useState();
  const [fewestMovesGame, setFewestMovesGame] = useState();

  const getData = async (evt) => {
    evt.preventDefault();
    setLoading(true);
    const slug = userInput.replace(/(.*\/)*/, "");
    try {
      const initialData = await axios.get(
        `https://api.chess.com/pub/tournament/${slug}`
      );
      const roundData = await axios.get(initialData.data.rounds[0]);

      if (roundData.data.games) {
        setData(roundData.data);
      } else if (roundData.data.groups) {
        const nonArenaData = await axios.get(roundData.data.groups[0]);
        setData(nonArenaData.data);
      } else {
        throw new Error();
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (data) {
      const openings = data.games.map((game) => {
        return game.eco;
      });
      console.log(
        "🚀 ~ file: App.js ~ line 231 ~ openings ~ openings",
        openings
      );

      const parsedOpenings = parseOpenings(_.compact(openings));
      const mostCommonOpeningsObj = _.countBy(parsedOpenings);
      const mostCommonOpening = getMostCommonOpening(mostCommonOpeningsObj);
      setMostCommonOpening(mostCommonOpening);

      const biggestUpset = data.games.reduce((acc, game) => {
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
      }, data.games[0]);
      setBiggestUpset(biggestUpset);

      const winner = data.players.find((player) => {
        if (_.get(player, "is_winner")) {
          return player.is_winner;
        } else {
          return player.place_finish === 1;
        }
      }).username;
      setWinner(winner);

      const gameOutcomes = data.games.reduce(
        (acc, game) => {
          acc[game.black.result] += 1;
          acc[game.white.result] += 1;
          return acc;
        },
        { draw: 0, win: 0, timeout: 0, resigned: 0, checkmated: 0 }
      );
      setWinningOutcomes(
        _.pick(gameOutcomes, ["checkmated", "timeout", "resigned"])
      );

      const gameWithMostMoves = data.games.reduce((acc, game) => {
        const pgnToObjCur = pgnToObject(
          game.pgn.replace(/{\[%clk.+?(?= |\n)/gims, "")
        );
        const pgnToObjAcc = pgnToObject(
          acc.pgn.replace(/{\[%clk.+?(?= |\n)/gims, "")
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
      }, data.games[0]);

      setMostMovesGame(gameWithMostMoves);

      const gameWithFewestMoves = data.games.reduce((acc, game) => {
        const pgnToObjCur = pgnToObject(
          game.pgn.replace(/{\[%clk.+?(?= |\n)/gims, "")
        );
        const pgnToObjAcc = pgnToObject(
          acc.pgn.replace(/{\[%clk.+?(?= |\n)/gims, "")
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

        return movesCountCur < movesCountAcc ? game : acc;
      }, data.games[0]);

      setFewestMovesGame(gameWithFewestMoves);
    }
  }, [data]);

  if (error) {
    return <div>Sorry, something went wrong. Please try again later.</div>;
  }

  return (
    <Container>
      <Panel>
        <H1>Chess.com Tournament Stats</H1>
        <H2>Enter a tournament URL:</H2>

        <form onSubmit={getData}>
          <Input onChange={(evt) => setUserInput(evt.target.value)}></Input>
          <Button type="submit">See Stats</Button>
        </form>

        {loading ? (
          <LoadingContainer>
            <FontAwesomeIcon icon={faSpinner} color="rgba(255,255,255,0.3)" />
          </LoadingContainer>
        ) : data ? (
          <Results>
            {winner && (
              <Section>
                <IconAndTitle>
                  <Icon icon={faTrophy} />
                  <H2>Winner</H2>
                </IconAndTitle>
                <p>{winner}</p>
              </Section>
            )}
            {_.get(mostCommonOpening, "opening") > 0 && (
              <Section>
                <IconAndTitle>
                  <Icon icon={faChessPawn} />
                  <H2>Most Common Opening</H2>
                </IconAndTitle>
                <p>
                  {mostCommonOpening.opening} - played {mostCommonOpening.count}{" "}
                  times
                </p>
              </Section>
            )}
            {winningOutcomes && (
              <Section>
                <IconAndTitle>
                  <Icon icon={faFlagCheckered} />
                  <H2>Result Types</H2>
                </IconAndTitle>
                <div style={{ width: 200, margin: "auto" }}>
                  <PieChart
                    label={({ dataEntry }) => {
                      return `${dataEntry.title}: ${dataEntry.value}`;
                    }}
                    labelStyle={{ fontSize: "5px" }}
                    data={[
                      {
                        title: "Checkmated",
                        value: winningOutcomes.checkmated,
                        color: "rgba(255,255,255,0.5)",
                      },
                      {
                        title: "Timeout",
                        value: winningOutcomes.timeout,
                        color: "rgba(255,255,255,0.2)",
                      },
                      {
                        title: "Resigned",
                        value: winningOutcomes.resigned,
                        color: "rgba(255,255,255,0.3)",
                      },
                    ]}
                  />
                </div>
              </Section>
            )}
            {biggestUpset && (
              <Section>
                <IconAndTitle>
                  <Icon icon={faSurprise} />
                  <H2>Biggest Upset</H2>
                </IconAndTitle>
                <p>
                  {biggestUpset.white.username} ({biggestUpset.white.rating}) vs{" "}
                  {biggestUpset.black.username} ({biggestUpset.black.rating})
                  <LinkIcon url={biggestUpset.url} />
                </p>
              </Section>
            )}
            {mostMovesGame && (
              <Section>
                <IconAndTitle>
                  <Icon icon={faWalking} />
                  <H2>Marathon</H2>
                </IconAndTitle>
                <p>
                  {mostMovesGame.white.username} vs{" "}
                  {mostMovesGame.black.username} had the most moves!
                  <LinkIcon url={mostMovesGame.url} />
                </p>
              </Section>
            )}
            {fewestMovesGame && (
              <Section>
                <IconAndTitle>
                  <Icon icon={faRunning} />
                  <H2>Sprint</H2>
                </IconAndTitle>
                <p>
                  {fewestMovesGame.white.username} vs{" "}
                  {fewestMovesGame.black.username} had the fewest moves!
                  <LinkIcon url={fewestMovesGame.url} />
                </p>
              </Section>
            )}
          </Results>
        ) : null}
      </Panel>
    </Container>
  );
}

export default App;
