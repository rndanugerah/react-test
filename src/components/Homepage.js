import React from 'react';


function Home({ setToken }) {
  const handleLogout = () => {
    setToken(null);
  };

  return (
    <div>
      <h2>Welcome to the Home page</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
