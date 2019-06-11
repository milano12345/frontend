import React from 'react';

const commentList = props => {
  return (
    <div className="Friend">
      <h3>Name: {props.receipientName}</h3>
      <p>Email: {props.receipientEmail} </p>
      <strong>Message: {props.message}</strong>
      <p>Category: {props.category}</p>
      <p>Send Date: {props.sendDate}</p>
      <p>Sent: {props.sent}</p>
    </div>
  );
};

commentList.defaultProps = {
  receipientName: '',
  receipientEmail: '',
  message: '',
  category: '',
  sendDate: '',
  sent: '',
};

export default CommentList;