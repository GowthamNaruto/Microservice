import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get('http://posts.com/posts');
    // console.log(res.data);
    setPosts(res.data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(posts);

  const renderPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        style={{
          width: '50%',
          marginBottom: '20px',
          backgroundColor: '#CDCDCD',
        }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentList comments={post.comments} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-column flex-wrap justify-content-between">
      {renderPosts}
    </div>
  );
};
export default PostList;

// axios.post('http://localhost:4000/events', event).catch((err) => {
//   console.log(err.message);
// });
// axios.post('http://localhost:4001/events', event).catch((err) => {
//   console.log(err.message);
// });
// axios.post('http://localhost:4002/events', event).catch((err) => {
//   console.log(err.message);
// });
// res.send({ status: 'OK' });
