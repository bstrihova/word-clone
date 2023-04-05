import React, { useState } from "react";

function GuessInput({ addGuess, disabled }) {
  const [guess, setGuess] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    addGuess(guess);
    setGuess("");
  };
  return (
    <form onSubmit={onFormSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        autoFocus
        pattern=".{5,}"
        maxLength={5}
        disabled={disabled}
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
