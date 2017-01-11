import React, { Component } from 'react';
import './App.css';
import RoomSelect from './roomSelect';
import TextEnter from './TextEnter';
import MessageList from './MessageList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div id='title'>
          <h1>ChatterPractice</h1>
        </div>
        <RoomSelect />
        <TextEnter />
        <MessageList />
      </div>
    );
  }
}

export default App;
