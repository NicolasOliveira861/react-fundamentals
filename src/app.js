import React from 'react';
import Header from './header';
import Post from './post';

const category = 'Posts da semana';

function App() {
  return (
    <>
      <Header title="JStacks's Blog">
        <h2>{category}</h2>
      </Header>

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
