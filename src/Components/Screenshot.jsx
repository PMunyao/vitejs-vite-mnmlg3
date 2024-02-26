import React from 'react';

function GameScreenshot({ imageSrc }) {
  return (
    <div className="screenshot">
      <img src={imageSrc} alt="Game Screenshot" />
    </div>
  );
}

export default GameScreenshot;
