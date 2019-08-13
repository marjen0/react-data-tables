import React from 'react';
import Automobiles from './classes/Automobiles/Automobiles';


class App extends React.Component {
  render() {
    const auto = new Automobiles();
    console.log(auto.automobiles)
    return (
      <div>
        hello
      </div>
    );
  }
}

export default App;
