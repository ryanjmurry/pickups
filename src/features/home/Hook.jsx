import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const sloganHeaderStyles = {
  fontFamily: 'Righteous',
  fontSize: '5em',
  color: 'white',
  textAlign: 'center'
};

const sloganTagStyles = {
  fontFamily: 'Righteous',
  fontSize: '2.8em',
  color: 'white',
  textAlign: 'center'
};

const buttonStyles = {
  fontWeight: 'bold'
};

const Hook = () => {
  return (
    <Grid centered>
      <Grid.Row centered>
        <h1 style={sloganHeaderStyles}>p i c k u p s</h1>
      </Grid.Row>
      <Grid.Row>
        <h3 style={sloganTagStyles}>bringing people together through games</h3>
      </Grid.Row>
      <Grid.Row>
        <Button as={Link} to='/signup' basic color='white' inverted size='huge' style={buttonStyles}>Join Today!</Button>
      </Grid.Row>
    </Grid>
  );
};

export default Hook;
