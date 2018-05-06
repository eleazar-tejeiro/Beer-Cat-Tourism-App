/* eslint-disable */
import React, { Component } from 'react';
import SiteRouter from './Router.jsx';
import Brewery from './Brewery';
import Beer from './Beer';
import axios from 'axios';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      breweries: [],
      tours: [],
      tour_breweries: [],
      user_tours:[],
      users: [],
    };
  }

  componentDidMount() {
    axios.get('/api/breweries')
    .then(response => {
      console.log('Breweries Response', response)
      this.setState({breweries: response.data});
    })
    axios.get('/api/beers')
    .then(response => {
      console.log('Beers Response', response)
      this.setState({beers: response.data});
    })
    axios.get('/api/tours')
    .then(response => {
      console.log('Tours Response', response)
      this.setState({tours: response.data});
    })
    axios.get('/api/tour_breweries')
    .then(response => {
      console.log('Tour Breweries Response', response)
      this.setState({tour_breweries: response.data});
    })
    axios.get('/api/user_tours')
    .then(response => {
      console.log('User Tours Response', response)
      this.setState({user_tours: response.data});

    })
    axios.get('/api/users')
    .then(response => {
      console.log('Users Response', response)
      this.setState({users: response.data});
    })
    axios.post('/api/users', {
                              name: 'Fred',
                              email: 'fred@fred.fred',
                              username: 'yabbadabbaDO',
                              password_hash: 'asdf',
                              preference_ABV: 5,
                              preference_SRM: 5,
                              perference_IBU: 55,
                              perference_adventurous: true,
                              prefereence_sour: false

    })
    .then(function (response) {
      console.log(response);
    })

    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <SiteRouter />
      </div>
    );
  }
}

export default App