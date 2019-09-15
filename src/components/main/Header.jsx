import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  const homeButton = props.history.location.pathname !== '/' ?
    <Link className="home-link" to='/'>
      <i className="fas fa-long-arrow-alt-left" />Back
    </Link> :
    null

  return (
    <header >
      {homeButton}
      <div className="social-links">
        <a href="https://www.linkedin.com/in/mason-chinkin/">
          <i className="fab fa-linkedin" /> LinkedIn
        </a>
        <a href="https://github.com/MasonChinkin">
          <i className="fab fa-github" /> Github
        </a>
        <a href="https://twitter.com/MChinkin">
          <i className="fab fa-twitter" /> Twitter
        </a>
      </div>
    </header>
  );
};

export default Header;