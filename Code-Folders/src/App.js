import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import CardMaker from './cardmaker';


class App extends React.Component {

  state = {
    followersURL : ""
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/stevenjhomem')
    .then(response => {
      console.log(response)
      this.setState({
        followersURL : response.data.followers_url
      })
    })
    .catch(error => {
      console.log('No Information Received')
    })
  }

  render(){
    return (
      <div className="App">
        <header className = "App-header">
          <h1>Code Buddies</h1>
        </header>
        <div className = 'Card-Container'>
          <h2>Find a Github User's Followers!</h2>
          <form>
            <label>Github Username: 
              <input type = 'text'
              placeholder = 'Enter Here'
              ></input>
              <button>Stalk!</button>
            </label>
          </form>
          <div className = 'mainUser'>
            <ul>
              <li>{this.state.followersURL}</li>
            </ul>
          </div>
          <CardMaker />
        </div>
      </div>
    );
  }
}

export default App;
