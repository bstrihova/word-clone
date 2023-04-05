import React, { Fragment, useState } from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import ResultBanner from "../ResultBanner/ResultBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistory, setGuessHistory] = useState([]);
  const [gameWon, setGameWon] = useState(false);

  const guessCount = guessHistory.length;

  const addGuess = (text) => {
    if (guessCount >= NUM_OF_GUESSES_ALLOWED) return;
    const newArr = [...guessHistory, { id: crypto.randomUUID(), text }];
    setGuessHistory(newArr);
    checkGuess(text, answer).every(({ status }) => status === "correct") &&
      setGameWon(true);
  };

  return (
    <Fragment>
      <div className="guess-results">
        {guessHistory.map(({ id, text }) => {
          return <Guess guess={checkGuess(text, answer)} key={id} />;
        })}
        {range(0, NUM_OF_GUESSES_ALLOWED - guessCount).map((i) => (
          <Guess key={i} />
        ))}
      </div>
      <ResultBanner guessCount={guessCount} gameWon={gameWon} answer={answer} />
      <GuessInput
        addGuess={addGuess}
        disabled={guessCount <= NUM_OF_GUESSES_ALLOWED || gameWon}
      />
    </Fragment>
  );
}

export default Game;
