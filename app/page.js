// pages/index.js
import React from 'react';
import Planet from './Planet';

const Home = () => {
  return (
    <main className="flex min-h-screen max-h-screen items-center justify-center p-24 relative">
      <Planet />
    </main>
  );
};

export default Home;
