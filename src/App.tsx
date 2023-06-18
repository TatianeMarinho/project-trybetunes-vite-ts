import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Layout from './pages/Layout';
import Favorites from './pages/Favorites';

function App() {
  return (
    <main>
      <p>Trybetunes</p>
      <Routes>
        <Route index element={ <Login /> } />
        <Route path="/" element={ <Layout /> }>
          <Route path="/search" element={ <Search /> } />
          <Route path="/album/:id" element={ <Album /> } />
          <Route path="/favorites" element={ <Favorites /> } />
          {/* <Route path="/profile" element={ <Profile /> } />
          <Route path="/profile/edit" element={ <PorfileEdit /> } />
          <Route path="*" element={ <NotFound /> } /> */}
        </Route>
      </Routes>
    </main>
  );
}

export default App;
