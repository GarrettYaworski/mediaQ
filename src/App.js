import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='navbar'>
          <p className='header-text'> Start Bootstrap</p>
          <div className='navlinks'>
            <div className='link'>SERVICES</div>
            <div className='link'>PORTFOLIO</div>
            <div className='link'>ABOUT</div>
            <div className='link'>TEAM</div>
            <div className='link'>CONTACT</div>
            <button class='toggle-button'>MENU&#9776;</button>
          </div>
        </div>
        <div className='middle'>
          <p className='welcome-text'>Welcome To Our Studio!</p>
          <p className= 'meet-text'>IT'S NICE TO MEET YOU</p>
          <button>TELL ME MORE</button>
        </div>
      </div>
    );
  }
}

export default App;
