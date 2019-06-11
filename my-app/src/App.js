import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom'
import './App.css';
import CommentForm from './Components/CommentForm';


class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    bestFriends: [],
  }
}
  componentDidMount() {
    axios
        .get("https://best-friend-reminders.herokuapp.com/")
        .then(res => this.setState({ bestFriends: res.data }))
        .catch(err => console.log(err));
}
  render() { 
    return (
      <div className="App">
       <CommentForm /> 
        
      </div>
    );
  }
}

export default App;