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
      url: 'https://best-friend-reminders.herokuapp.com/api/reminders',
      data: {
        receipientName: this.state.name,
        receipientEmail: this.state.age,
        message: this.state.height,
        category: this.state.category,
        sendDate: this.state.sendDate,
        sent: this.state.sent,
      }
    });
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
      <div className="FriendForm">
        <form onSubmit={this.addFriend}>
          <input
            onChange={this.handleInputChange}
            placeholder="Name"
            value={this.state.receipientName}
            name="receipientName"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="E-Mail"
            value={this.state.receipientEmail}
            name="receipientEmail"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Message"
            value={this.state.message}
            name="message"
          />
              <input
            onChange={this.handleInputChange}
            placeholder="Category"
            value={this.state.category}
            name="category"
          />
            <input
            onChange={this.handleInputChange}
            placeholder="Send Date"
            value={this.state.sendDate}
            name="sendDate"
          />
            <input
            onChange={this.handleInputChange}
            placeholder="Sent?"
            value={this.state.sent}
            name="sent"
          />
          <button type="submit">Add to the Friends List</button>
          {console.log(this.state)}
        </form>
      </div>
    );
  }
}

export default CommentForm;