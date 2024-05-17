import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaBehance, FaSearch } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css'

const Navbar = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [query, setQuery] = useState('');

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      // Perform search operation with the query
      console.log('Searching for:', query);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-custom p-3">
      <div className="container">
        <div className='logo-container'>
        <a className="navbar-brand brand-text font-weight-bold text-white" id="page-logo" href="/">Healthy Bonding
</a></div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link nav-item-text text-white" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-item-text text-white" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-item-text text-white" href="/article">Article</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-item-text text-white" href="/contact">Contact Us</a>
            </li>
            <li className="nav-item d-none d-sm-block">
              <a className="nav-link" href="/"><FaFacebook className="text-white" /></a>
            </li>
            <li className="nav-item d-none d-sm-block">
              <a className="nav-link" href="/"><FaTwitter className="text-white" /></a>
            </li>
            <li className="nav-item d-none d-sm-block">
              <a className="nav-link" href="/"><FaYoutube className="text-white" /></a>
            </li>
            <li className="nav-item d-none d-sm-block">
              <a className="nav-link" href="/"><FaPinterest className="text-white" /></a>
            </li>
            <li className="nav-item d-none d-sm-block">
              <a className="nav-link" href="/"><FaBehance className="text-white" /></a>
            </li>
            <li className="nav-item d-none d-sm-block">
              <a className="nav-link" href="/" onClick={toggleSearch}><FaSearch className="text-white" /></a>
            </li>
          </ul>
          {searchVisible && (
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search"
                value={query} onChange={handleInputChange} onKeyPress={handleSearch} />
            </form>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
