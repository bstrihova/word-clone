import React from "react";

function GuessResults({ guessHistory }) {
  return (
    <div className="guess-results">
      {guessHistory.map(({ id, text }) => (
        <p className="guess" key={id}>
          {text}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
