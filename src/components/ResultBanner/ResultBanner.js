import React, { Fragment } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function ResultBanner({ guessCount, gameWon, answer }) {
  return (
    <Fragment>
      {guessCount === NUM_OF_GUESSES_ALLOWED && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
      {gameWon && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{guessCount} guesses</strong>.
          </p>
        </div>
      )}
    </Fragment>
  );
}

export default ResultBanner;
