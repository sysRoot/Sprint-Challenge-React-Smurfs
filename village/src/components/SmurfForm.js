import React, { Component} from 'react';
import axios from 'axios';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'


class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios
      .post(`http://localhost:3333/smurfs`, {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      })
      .then(res => this.props.refreshCall())
      .catch(err => console.log(err, `Refresh error, perhaps ajax post failed?`))

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Container>
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
        <FormControl variant="filled">
        <InputLabel htmlFor="component-filled">Name</InputLabel>
        <FilledInput id="component-filled" value={this.state.name} onChange={this.handleInputChange} />
      </FormControl>
      <FormControl variant="filled">
        <InputLabel htmlFor="component-filled">Height</InputLabel>
        <FilledInput id="component-filled" value={this.state.height} onChange={this.handleInputChange} />
      </FormControl>
      <FormControl variant="filled">
        <InputLabel htmlFor="component-filled">Age</InputLabel>
        <FilledInput id="component-filled" value={this.state.age} onChange={this.handleInputChange} />
      </FormControl>
          <Button variant="outlined" color="primary" type="submit">Add to the village</Button>
        </form>
      </div>
      </Container>
    );
  }
}

export default SmurfForm;