import React from 'react';
import { Segment } from 'semantic-ui-react';
import BackgroundSlideshow from 'react-background-slideshow';
import bball from '../../app/assets/bball.jpg';
import boardGame from '../../app/assets/board-game.jpg';
import bowling from '../../app/assets/bowling.jpg';
import tugOfWar from '../../app/assets/tugofwar.jpg';
import controller from '../../app/assets/controller.jpg'
import arcadeGame from '../../app/assets/arcarde-game.jpg'
import cards from '../../app/assets/cards.jpg'

const slideShowStyle = {
  height: '460px',
  width: '105%',
  marginLeft: '-10px'
};

const Slideshow = () => {
  return (
    <div>
      <Segment style={slideShowStyle}>
        <BackgroundSlideshow
          images={[controller, arcadeGame, tugOfWar, bowling, boardGame, bball, cards]}
          animationDelay={6000}
        />
      </Segment>
    </div>
  );
};

export default Slideshow;