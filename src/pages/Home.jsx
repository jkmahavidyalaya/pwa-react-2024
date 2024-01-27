import React from 'react';

function Home({ user }) {
  return (
    <div>
      <h2>Welcome, {user ? user.email : 'Guest'}</h2>
      <p>This is the home page. You can put your content here.</p>
    </div>
  );
}

export default Home;
