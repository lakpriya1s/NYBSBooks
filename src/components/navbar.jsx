import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="/#">NYBS Books</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/#">Books List <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/topbooks">Top 5 Books</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/aboutus">About us</a>
                </li>
              </ul>
            </div>
          </nav>
       );
    }
}
 
export default NavBar;