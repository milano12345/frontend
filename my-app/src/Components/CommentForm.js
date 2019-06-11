import React, {Component} from 'react';
import axios from 'axios';

class CommentForm extends Component {
   constructor() {
    super();
    this.state={
        receipientName: '',
        receipientEmail: '',
        message: '',
        category: '',
        sendDate: '',
        sent: '',
   }
}
addFriend = event => {
    event.preventDefault();
    axios({
      method: 'post',
      url: 'https://best-friend-reminders.herokuapp.com/',
      data: {
        receipientName: this.state.receipientName,
        receipientEmail: this.state.receipientEmail,
        message: this.state.message,
        category: this.state.category,
        sendDate: this.state.sendDate,
        sent: this.state.sent,

      }
    });
    this.setState({
        receipientName: '',
        receipientEmail: '',
        message: '',
        category: '',
        sendDate: '',
        sent: '',
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="FriendForm">
        <form onSubmit={this.addFriend}>
          <input
            className=""
            type="text"
            onChange={this.handleInputChange}
            placeholder="Name"
            value={this.state.receipientName}
            name="receipientName"
          /> <br/>
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="E-mail"
            value={this.state.receipientEmail}
            name="E-mail"
          /> <br/>
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="Message"
            value={this.state.message}
            name="Message"
          /> <br/>
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="Category"
            value={this.state.category}
            name="Category"
          /> <br/>
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="Send Date"
            value={this.state.sendDate}
            name="Send Date"
          /> <br/>
          <button type="submit">Add to the List</button>
        </form>
      </div>
    );
  }
}


export default CommentForm;
