import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {guess
        ? guess.map(({ letter, status }, i) => (
            <span className={`cell ${status}`} key={i}>
              {letter}
            </span>
          ))
        : range(0, 5).map((i) => <span className="cell" key={i} />)}
    </p>
  );
}

export default Guess;
