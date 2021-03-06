import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Home from 'views/Home';
import Detail from 'views/Detail';
import Statistics from 'views/Statistics';
import NoMatch from 'views/NoMatch';
import styled from 'styled-components';

const AppWrapper = styled.div`
max-width: 520px;
margin: 0 auto;
`;

function App() {
  return (
          <AppWrapper>
            <Router>
              <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/detail" component={Detail}/>
                <Route path="/statistics" component={Statistics}/>
                <Redirect exact from="/" to="/home"/>
                <Route path="*" component={NoMatch}/>
              </Switch>
            </Router>
          </AppWrapper>
  );
}

export default App;

