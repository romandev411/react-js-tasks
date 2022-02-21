import './App.css';
import React from 'react';
import PlaceholderPostHook from './PlaceholderPostHook';
import CommentHook from './CommentHook';
import Comment2Hook from './Comment2Hook';
import Comment2 from './Comment2';


function App() {
  return (
    <>
      <Comment2 />
      <Comment2Hook />
      <CommentHook />
      <PlaceholderPostHook />
    </>
  );
}

export default App;
