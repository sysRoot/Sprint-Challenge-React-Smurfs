import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => {
        console.log(res.data) 
        this.setState({ smurfs: res.data })})
      .catch(err =>
        console.log(
          err,
          `cDMount-time error, axios may have performed incorrectly`
        )
      );
  }

  refreshCall = () => {
    console.log(`am I being fired`);
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err =>
        console.log(err, `Refresh error, axios may have performed incorrectly`)
      );
  };

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className='App'>
        <NavBar />
        <Route
          path='/add-smurf'
          render={props => (
            <SmurfForm {...props} refreshCall={this.refreshCall} />
          )}
        />
        <Route
          path='/smurfs'
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
      </div>
    );
  }
}

export default App;
