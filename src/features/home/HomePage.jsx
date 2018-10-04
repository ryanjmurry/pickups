import React from 'react';
import { Segment } from 'semantic-ui-react';
import BackgroundSlideshow from 'react-background-slideshow';
import arcade from '../../app/assets/arcade.jpg'
import bball from '../../app/assets/bball.jpg';
import boardGame from '../../app/assets/board-game.jpg';
import bowling from '../../app/assets/bowling.jpg';
import tugOfWar from '../../app/assets/tugofwar.jpg';
import xbox from '../../app/assets/xbox.jpg';

const slideShowStyle = {
  height: '460px',
  width: '105%',
  marginLeft: '-10px'
};

const HomePage = () => {
  return (
    <div>
      <Segment style={slideShowStyle} textAlign="center">
        <BackgroundSlideshow images={[ arcade, bball, boardGame, bowling, tugOfWar, xbox]} animationDelay={6000}/>
      </Segment>
    </div>
  );
};

export default HomePage;
