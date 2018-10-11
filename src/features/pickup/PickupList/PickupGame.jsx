import React from 'react';
import { Button, Segment, Grid, Progress, Header, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const PickupGame = ({ pickup }) => {
  let percentFull = (pickup.currentCapacity / pickup.maxCapacity).toFixed(2);
  return (
    <Segment style={{ width: '700px', margin: '0 auto 15px' }}>
      <Grid columns={3}>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment basic>
              <Header style={{ fontSize: '2.5em', marginBottom: '-2px' }}>
                {pickup.title}
                <div>
                  <Icon name="time" size="tiny" />
                  <span style={{ fontSize: '0.5em', marginBottom: '-2px' }}>pick up date</span>
                </div>
                <div>
                  <Icon name="map marker alternate" size="tiny" />
                  <span style={{ fontSize: '0.5em' }}>{pickup.city}</span>
                </div>
              </Header>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment basic />
            <Segment basic>
              <div style={{ position: 'relative', top: '55px' }}>
                <Button
                  as={Link}
                  to={`/pickup/${pickup.id}`}
                  content="details"
                  color="purple"
                  fluid
                  size="big"
                />
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment textAlign="right" basic>
              <span style={{ marginRight: '10px', fontSize: '1em' }}>
                {pickup.type} / <span style={{ fontStyle: 'italics' }}>{pickup.level}</span>
              </span>
              <Icon
                name={
                  pickup.type === 'rec'
                    ? 'soccer'
                    : pickup.type === 'table'
                      ? 'puzzle piece'
                      : 'gamepad'
                }
                size="huge"
                color="purple"
              />
            </Segment>
            <Segment basic />
            <Segment basic>
              <div style={{ position: 'relative', top: '20px' }}>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={7}>
                      <br />
                      {`${percentFull}% full`}
                    </Grid.Column>
                    <Grid.Column width={9}>
                      {`${pickup.currentCapacity} / ${pickup.maxCapacity}`}
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

export default PickupGame;
