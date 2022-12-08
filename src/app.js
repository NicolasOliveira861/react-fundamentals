import React from 'react';
import Post from './post';

const category = 'Posts da semana';

function App() {
  return (
    <>
      <h1>JStacks's Blog</h1>
      <h2>{category}</h2>

      <hr />

      <Post title="Title" subtitle="Subtitle" />
      <Post title="Title" subtitle="Subtitle" />
      <Post title="Title" subtitle="Subtitle" />
      <Post title="Title" subtitle="Subtitle" />
      <Post title="Title" subtitle="Subtitle" />
      <Post title="Title" subtitle="Subtitle" />
    </>
  );
}

export default App;
