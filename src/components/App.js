import React from 'react';
import UserBar from './UserBar';
import Post from './Post';
import posts from '../posts';

const App = () => {    
  return (
    <React.Fragment>
      <UserBar />
      {posts.map((post, i) => {
        return <Post 
          key={i}  
          title={post.title} 
          content={post.content} 
          author={post.author} 
        />
      })}
    </React.Fragment>
  );
}

export default App;
