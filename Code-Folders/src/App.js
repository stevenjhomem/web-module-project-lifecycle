import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import CardMaker from './cardmaker';


class App extends Component {

  constructor(){
    super();
    this.state = {
      followersURL : "https://api.github.com/users/wlongmire/followers"
    }
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
              placeholder = 'Warren Longmire'
              ></input>
              <button>Stalk!</button>
            </label>
          </form>
          <div className = 'mainUser'>
            <CardMaker followersURL = {this.state.followersURL}/>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
