import React, { useState } from 'react';
import { ThemeProvider } from './context';
import Header from './header';
import Post from './post';

const category = 'Posts da semana';

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: 'Title#01',
      subtitle: 'Sub#01',
      likes: 20,
      read: true,
    },
    {
      id: Math.random(),
      title: 'Title#02',
      subtitle: 'Sub#02',
      likes: 20,
      read: false,
    },
    {
      id: Math.random(),
      title: 'Title#03',
      subtitle: 'Sub#03',
      likes: 20,
      read: false,
    },
  ]);

  function handleRefresh() {
    setPosts((prev) => [
      ...prev,
      {
        id: Math.random(),
        title: `Title#0${prev.length + 1}`,
        subtitle: `Sub#0${prev.length + 1}`,
        likes: 50,
        read: true,
      },
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prev) => prev.filter((post) => post.id !== postId));
  }

  return (
    <ThemeProvider>
      <Header title="JStacks's Blog">
        <h2>
          {category}
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post
          key={post.id}
          likes={post.likes}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}
    </ThemeProvider>
  );
}

export default App;
