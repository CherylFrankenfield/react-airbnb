import React from 'react';
import Header from './Header';
import Properties from './Properties';
import Admin from './Admin';
import { v4 } from 'uuid';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      propertiesList: [
        { city: 'Santa Barbara',
          state: 'California',
          type: 'house',
          price: 150,
          bedrooms: 2,
          title: 'Amazing View! Beach front bungalow',
          image: 'https://a0.muscache.com/im/pictures/4987161/7b8afcae_original.jpg',
          id: v4()
        },
        { city: 'Austin',
          state: 'Texas',
          type: 'airstream',
          price: 130,
          bedrooms: 1,
          title: 'Super cute retro airstream',
          image: 'https://a0.muscache.com/im/pictures/7151074/aecc9790_original.jpg',
          id: v4()
        },
        { city: 'Pioneertown',
          state: 'California',
          type: 'house',
          price: 300,
          bedrooms: 4,
          title: 'Off-grid modern house in the desert',
          image: 'https://a0.muscache.com/im/pictures/45680811/f4987a12_original.jpg',
          id: v4()
        }
      ]
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
