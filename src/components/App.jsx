import React from 'react';
import Header from './Header';
import Properties from './Properties';
import Admin from './Admin';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      propertiesList: []
    };
    this.handleAddingNewPropertyToList = this.handleAddingNewPropertyToList.bind(this);
  }

  handleAddingNewPropertyToList(newProperty) {
    let newPropertiesList = this.state.propertiesList.slice();
    newPropertiesList.push(newProperty);
    this.setState({propertiesList: newPropertiesList});
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={()=> <Properties properties={this.state.propertiesList} /> } />
          <Route path='/admin' render={()=> <Admin onNewPropertyCreation={this.handleAddingNewPropertyToList} /> } />
        </Switch>

      </div>
    );
  }
}

export default App;
