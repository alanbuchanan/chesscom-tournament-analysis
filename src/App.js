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
} from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  Panel,
  Results,
  H1,
  H2,
  IconAndTitle,
  Section,
  Input,
  Button,
  LoadingContainer,
  ErrorMessage,
} from "./styles";
import { getMostCommonOpening } from "./parsers/mostCommonOpening";
import { getBiggestUpset } from "./parsers/biggestUpset";
import { getWinner } from "./parsers/winner";
import { getResultTypes } from "./parsers/resultTypes";
import { getGameWithMostMoves } from "./parsers/mostMovesGame";
import { getGameWithFewestMoves } from "./parsers/fewestMovesGame";

import { Icon, LinkIcon } from "./utils/utilityComponents";

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
    setError(false);

    // Take every after the last backslash. This is the relevant part of the URL.
    const slug = userInput.replace(/(.*\/)*/, "");

    try {
      const initialData = await axios.get(
        `https://api.chess.com/pub/tournament/${slug}`
      );
      const roundData = await axios.get(initialData.data.rounds[0]);

      // Data can be returned in two different ways; handle each case here.
      if (roundData.data.games) {
        setData(roundData.data);
      } else if (roundData.data.groups) {
        const nonArenaData = await axios.get(roundData.data.groups[0]);
        setData(nonArenaData.data);
      } else {
        throw new Error();
      }
    } catch (err) {
      // This will trigger an error message to be shown indicating the input may be incorrect.
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // This runs when data is successfully retrieved.
    // Get and set data for the information that displays underneath the input field.
    if (data) {
      const mostCommonOpening = getMostCommonOpening(data.games);
      setMostCommonOpening(mostCommonOpening);

      const biggestUpset = getBiggestUpset(data.games);
      setBiggestUpset(biggestUpset);

      const winner = getWinner(data.players);
      setWinner(winner);

      const resultTypes = getResultTypes(data.games);
      setWinningOutcomes(resultTypes);

      const gameWithMostMoves = getGameWithMostMoves(data.games);
      setMostMovesGame(gameWithMostMoves);

      const gameWithFewestMoves = getGameWithFewestMoves(data.games);
      setFewestMovesGame(gameWithFewestMoves);
    }
  }, [data]);

  return (
    <Container>
      <Panel>
        <H1>Chess.com Tournament Stats</H1>
        <H2>Enter a tournament URL:</H2>

        <form onSubmit={getData}>
          <Input onChange={(evt) => setUserInput(evt.target.value)}></Input>
          <Button type="submit">See Stats</Button>
        </form>

        {error ? (
          <ErrorMessage>
            Sorry, no data could be found for that tournament. Please
            double-check the tournament URL you entered.
          </ErrorMessage>
        ) : loading ? (
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
            {_.get(mostCommonOpening, "count") > 0 && (
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
