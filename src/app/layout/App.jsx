import React, { Component } from 'react';
import NavBar from '../../features/nav/NavBar/NavBar';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import {Container} from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
    <div>
      <Container className="main">
        <NavBar></NavBar>
        <EventDashboard></EventDashboard>
      </Container>
    </div>
    );
  }
}

export default App;
