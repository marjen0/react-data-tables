import React from 'react';
import ReactTable from './containers/ReactTable/ReactTable';
import agGrid from './containers/agGrid/agGrid';
import {Route,Switch, BrowserRouter} from 'react-router-dom';
import Home from './containers/Home/Home';

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/react-table' component={ReactTable}/>
            <Route path='/agGrid' component={agGrid}/>
          </Switch>
        </BrowserRouter>  
    );
  }
}

export default App;
