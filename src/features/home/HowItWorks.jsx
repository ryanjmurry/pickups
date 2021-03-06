import React from 'react';
import { Grid, Step, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const headerText = {
  fontFamily: 'Righteous',
  fontSize: '4em'
};

const HowItWorks = () => {
  return (
    <Grid centered>
      <Grid.Row>
        <h1 style={headerText}>how pickups works</h1>
      </Grid.Row>
      <Grid.Row>
        <Step.Group size='huge'>
          <Step as={Link} to='/signup'>
            <Icon name='user plus' />
            <Step.Content>
              <Step.Title style={{marginBottom: '15px', color: '#a333c8'}}>sign up</Step.Title>
              <Step.Description>don't worry, it's free!</Step.Description>
            </Step.Content>
          </Step>
          <Step as={Link} to='/pickups'>
            <Icon name='search' />
            <Step.Content>
              <Step.Title style={{marginBottom: '15px', color: '#a333c8'}}>find a pickup</Step.Title>
              <Step.Description>hurry, games fill up fast!</Step.Description>
            </Step.Content>
          </Step>
          <Step as={Link} to='/newpickup'>
            <Icon name='add circle' />
            <Step.Content>
              <Step.Title style={{marginBottom: '15px', color: '#a333c8'}}>create a pickup</Step.Title>
              <Step.Description>can't find a pickup? create one!</Step.Description>
            </Step.Content>
          </Step>
          <Step>
            <Icon name='users' />
            <Step.Content>
              <Step.Title style={{marginBottom: '15px', color: '#a333c8'}}>make friends</Step.Title>
              <Step.Description>it's that simple!</Step.Description>
            </Step.Content>
          </Step>
        </Step.Group>
      </Grid.Row>
    </Grid>
  );
};

export default HowItWorks;
