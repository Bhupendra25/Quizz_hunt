import React from "react";

const Result = ({ score, playAgain }) => (
  <div className="score-board">
    <div className="score">You scored {score} / 5 correct answers!</div>
    <buttno className="playBtn" onClick={playAgain}>
      Play Again!
    </buttno>
  </div>
);

export default Result;
