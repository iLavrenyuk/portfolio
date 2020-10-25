import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Title from './Title';
import Projects from './Projects';
import Calculate1 from './Calculate1';
import Instruments from './Instruments';
import Contacts from './Contacts';


const Calculate2 = () => <>Calculate 2</>;
const Calculate3 = () => <>Calculate 3</>;
const Calculate4 = () => <>Calculate 4</>;
const Result = () => <>Result</>;


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
        </Router>
        <Instruments />
        <Contacts />
      </>
    );
  }
}

export default App;
