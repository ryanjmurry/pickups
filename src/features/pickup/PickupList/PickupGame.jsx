import React from 'react';
import { Button, Segment, Grid, Progress, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const PickupGame = ({ pickup }) => {
  return (
    <Segment style={{ width: '700px', margin: 'auto' }}>
      <Grid columns={3}>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment basic>
              <Header style={{fontSize: '2.5em', marginBottom: '-2px'}}>title</Header>
              <p style={{fontSize: '1.5em', marginBottom: '-2px'}}>datetime</p>
              <p style={{fontSize: '1.2.5em'}}>city</p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment basic />
            <Segment basic>
              <div style={{position: 'relative', top: '55px'}}>
                <Button content="details" color="purple" fluid />
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment textAlign="right" basic>
              game type
            </Segment>
            <Segment basic />
            <Segment basic>
              <div style={{ position: 'relative', top: '20px' }}>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={7}>
                      <br />
                      100% full
                    </Grid.Column>
                    <Grid.Column width={9}>
                      capacity
                      <Progress indicating size="small" />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

// gamepad
// basketball ball
// chess
export default PickupGame;
