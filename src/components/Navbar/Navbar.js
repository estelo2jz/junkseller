import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from "./Menuitems";
import { Button } from "../Button";
import './navbar.css';

class Navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }

  render() {
    return (
      <nav className="navbar-items">
        <div className="nav-header-container">
          <Link to="/" className="navbar-logo">
            BlingBling <i class="fas fa-gem"></i>
          </Link>
        </div>
        <div className="nav-menu-container">
          <div className="menu-icon" onClick={this.handleClick}>
            <li className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></li> 
          </div>
          <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map((item, index) => {
              return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
              )
            })}
          </ul>

        </div>
        {/* <div className="nav-button-container">
          <Button>Sign Up</Button>
        </div> */}
      </nav>
    )
  }
}

export default Navbar;