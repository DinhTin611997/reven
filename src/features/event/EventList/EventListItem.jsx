import React, { Component } from 'react'
import {Segment, Item, Icon, List, Button} from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';
class EventListItem extends Component {
  render() {
    return (
           <Segment.Group>
              <Segment>
                <Item.Group>
                  <Item>
                    <Item.Image size="tiny" circular src="circular scr='https://randoumuser.me/api/portaits/women/42.jpg" />
                    <Item.Content>
                      <Item.Header as="a">Event Title</Item.Header>
                      <Item.Description>
                        Hosted by <a>hosted by</a>
                      </Item.Description>
                    </Item.Content>
                  </Item>
                </Item.Group>
              </Segment>
              <Segment>
                <span>
                  <Icon name="clock" /> date |
                  <Icon name="marker" /> time
                </span>
              </Segment>
              <Segment secondary>
                <List horizontal>
                <EventListAttendee/>
                <EventListAttendee/>
                <EventListAttendee/>
                </List>
              </Segment>
              <Segment clearing>
                <Button as="a" color="teal" floated="right" content="View" />
              </Segment>
            </Segment.Group>
    )
  }
}
export default EventListItem;