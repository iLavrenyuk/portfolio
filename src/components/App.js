import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Title from './Title';
import Projects from './Projects';
import Calculate1 from './Calculate1';
import Calculate2 from './Calculate2';
import Calculate3 from './Calculate3';
import Calculate4 from './Calculate4';
import Result from './Result';
import Instruments from './Instruments';
import Contacts from './Contacts';
import HorizontalStepper from './Stepper';




class App extends React.Component {
  render() {
    return (
      <>
        <Title />
        <Projects />
        <Router>
          <Switch>
            <Route exact path="/" component={Calculate1} />
            <Route exact path="/calculate2" component={Calculate2} />
            <Route exact path="/calculate3" component={Calculate3} />
            <Route exact path="/calculate4" component={Calculate4} />
            <Route exact path="/result" component={Result} />
          </Switch>
          <HorizontalStepper />
        </Router>
        <Instruments />
        <Contacts />
      </>
    );
  }
}

export default App;
