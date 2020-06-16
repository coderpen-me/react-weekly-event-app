import React, { Component } from 'react';

class AppHeader extends Component {
  render() {
    return <header>
      <div className="container">
        <nav className="navbar">
          <a href="#">
            <img src="./static/assets/logo.png" height="30" alt="image" />
          </a>
        </nav>
      </div>
    </header>
  }
}

export default AppHeader
