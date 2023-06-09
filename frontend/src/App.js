import React, { useState } from 'react';
import { Route, Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AddReview from './components/add-review';
import MoviesList from './components/movies-list';
import Movie from './components/movie';
import Login from './components/login';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {//default user to null
    setUser(user)
  }

  async function logout() {
    setUser(null)
  }

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Movie Reviews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse className='mr-auto'>
          <Nav.Link>
            <Link to={"/movies"}>Movies</Link>
          </Nav.Link>
          <Nav.Link >
            {user ? (
              <a onClick={logout}>Logout user</a>
            ) : (
              <Link to={"/login"}>Login</Link>
            )}
          </Nav.Link>
        </NavbarCollapse>
      </Navbar>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movies/:id/review" element={<AddReview user={user} />} />
        <Route path="/movies/:id/" element={<Movie user={user} />} />
        <Route path="/login" element={<Login login={login} />} />
      </Routes>

    </div>
  )
}

export default App;
