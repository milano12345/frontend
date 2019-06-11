import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import CommentForm from './Components/CommentForm';
import Register from './Components/Register/Register'
import CommentList from './Components/CommentList'

class App extends Component {
  constructor(){
    super();
    this.state={
      friends: []
    }
  }
  componentDidMount() {
    axios.get(`https://best-friend-reminders.herokuapp.com/`)
      .then(res => {
        const friends = res.data;
        this.setState({ friends });
      })
  }

  render() { 
    return (
      <div className="App">
       <CommentForm /> 
       <CommentList data={this.state.friends}/>
       <Register />
      </div>
    );
  }
}

export default App;