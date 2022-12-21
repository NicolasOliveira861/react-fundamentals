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

      <Post
        likes={20}
        post={{
          title: 'Title',
          subtitle: 'Subtitle',
        }}
      />
      <Post
        likes={20}
        post={{
          title: 'Title',
          subtitle: 'Subtitle',
        }}
      />
      <Post
        likes={20}
        post={{
          title: 'Title',
          subtitle: 'Subtitle',
        }}
      />
      <Post
        likes={20}
        post={{
          title: 'Title',
          subtitle: 'Subtitle',
        }}
      />
      <Post
        likes={20}
        post={{
          title: 'Title',
          subtitle: 'Subtitle',
        }}
      />
      <Post
        likes={20}
        post={{
          title: 'Title',
          subtitle: 'Subtitle',
        }}
      />
    </>
  );
}

export default App;
