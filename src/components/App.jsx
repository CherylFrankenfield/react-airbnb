import React from 'react';
import Header from './Header';
import Properties from './Properties';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header />
      <Properties />
        // <Switch>
        //   App works!
        //
        // </Switch>
    </div>
  );
}

export default App;
