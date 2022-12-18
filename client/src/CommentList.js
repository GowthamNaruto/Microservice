import React from 'react';

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;

    if (comment.status === 'approved') {
      content = comment.content;
    }

    if (comment.status === 'Pending') {
      content = 'This comment is awaiting moderation';
    }

    if (comment.status === 'rejected') {
      content = 'This comment is violating our community guidelines';
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
