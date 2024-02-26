// GameContent.js
import React from 'react';
import GameScreenshot from './Screenshot';
import './GameContent.css';
import '@fontsource/yomogi';

function GameContent() {
  return (
    <div className="game-content">
      <div className="banner">
        <img
          src="https://i.pinimg.com/originals/89/90/02/899002b7912c69d58893889ff425387f.jpg"
          alt="Game-Banner"
        />
      </div>
      <h1>Zone:9</h1>
      <h4>Romdeau studios. &#169;2023</h4>
      <p>
        Welcome to this brand new world of darkness. Zone:9. My first solo
        indiedev title under my new studio, registered Romdeau Studios. This is
        my first ever gamedev project taken from conception to release and it is
        still very early in development. But alas, Rome...{' '}
      </p>

      <p>
        Basically, Zone:9 is a game where you get to see the unique stories of
        different characters from their POVs. Do not be fooled though, this
        world is not for the faint of heart. You will come across dire
        challenges that will make you want to rage quit and emanations which are
        the stuff of nightmares.
      </p>

      <p>
        This is only the first chapter of this story. Are you ready to take on
        the challenge?
      </p>
      {/* Add other game content */}
      <div className="screenshot-section">
        <h3>Game engine editor and Gameplay Screenshots</h3>
        <div className="screenshot-gallery">
          <GameScreenshot imageSrc="https://i.pinimg.com/originals/22/06/68/2206683077a99a6b6ae6f3ce2d8f0e81.jpg" />
          <GameScreenshot imageSrc="https://i.pinimg.com/originals/c2/f7/d2/c2f7d21cf520d79b06f0a189567aca1a.jpg" />
          <GameScreenshot imageSrc="https://i.pinimg.com/originals/37/a8/f6/37a8f6762f5fc0b17c4de80c06af4bb1.jpg" />
          <GameScreenshot imageSrc="https://i.pinimg.com/originals/3b/93/a7/3b93a7132c76c377187619adf5f95660.jpg" />
          <GameScreenshot imageSrc="https://i.pinimg.com/originals/08/69/05/086905721534ef6aba02ad2defe59545.png" />
          <GameScreenshot imageSrc="https://i.pinimg.com/originals/fb/16/20/fb1620f8bde5722fdc3373675f48a827.jpg" />
          <GameScreenshot imageSrc="https://i.pinimg.com/originals/a2/52/a7/a252a7edf01be8ec4c94c8a28c11b943.jpg" />
          <GameScreenshot imageSrc="https://i.pinimg.com/originals/1c/e5/8c/1ce58c0d385b83bf100a74abb83816ba.jpg" />
          {/* Add more screenshots */}
        </div>
      </div>
      <div>
        <a href="https://mega.nz/folder/xjNCGBCK#V9NOXtoRlR9v4PWcKkB1fw">
          Download Demo
        </a>
      </div>
    </div>
  );
}

export default GameContent;
