import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ShareIcon from '@material-ui/icons/Share';
// import { BurgerIcon } from './'
import styled from "styled-components";

const Navigation = styled.header`
  width: 100%;
  border-bottom: 0.2em solid #dddddd;
  border-shadow:3px 3px 5px 6px #ccc; 
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px 0;
  height: 140px;
  margin-bottom: 60px;
  background: #f8f8f8;

  .logo a {
    font-size:2em;
    padding-top: 33px;
    display: flex;
    flex-direction: column;
    clear: both;
    padding-bottom: 30px;
    text-decoration: none;

    p {
      width: 500px;
      display: block;
    }
  }
  .gray {
    color: #ccc;
  }
  a {
    color: #222;
    opacity: 0.55;
    transition: all 0.6s;
    color: #222;
    font-size: 1em;
  }
  a:hover {
    opacity: 1;
  }
  .fa-bars {
    display: none;
    color: #222;
    font-size: 2rem;
  }
  nav {
    ul {
      display: flex;
      justify-content: space-between;
    }
    li {
      margin: 0 15px;
      justify-content: space-between;
      font-size: 1em;
    }
    @media only screen and (max-width: 1000px) {
      li {
        font-size: 0.75rem;
      }
    }
    a {
      font-size: 1em;
      text-decoration: none;
      .active {
        color: tomato;
      }
    }
    a.active {
      color: #222;
    }
  }

  @media only screen and (max-width: 800px) {
    padding: 0px;
    .logo {
      padding-left: 15px;
      padding-top: 0px !important;
    }
  }
  @media only screen and (max-width: 600px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
    .logo {
      width: 100%;
      display: block;
      padding-top: 20px;
      margin: 0px;
      margin-left: -1px;
      a {
        padding: 20px 0px;
      }
    }
    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;

      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.is-expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }
      li {
        padding: 15px 10px;
        margin: 0px 0px;
        width: 100%;
      }
    }
  }
`;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }
  render() {
    const { isExpanded } = this.state;

    return (
      <Navigation>
        <div className="logo">
          <Link to="/">
            <span><span style={{color:"#4e3620"}}>D</span><span style={{color:"#ce1212"}}>S</span><span style={{color:"#f0c929"}}>I</span></span>
          </Link>
        </div>
        <nav className="nav">
          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={(e) => this.handleToggle(e)}
          />
          <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
            <NavLink activeClassName="active" to="/">
              <li className="listFont">Services</li>
            </NavLink>
            <NavLink activeClassName="active" to="/">
              <li className="listFont">Product</li>
            </NavLink>
            <NavLink activeClassName="active" to="/">
              <li className="listFont">Technology</li>
            </NavLink>
            <NavLink activeClassName="active" to="/">
              <li className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</li>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Contact Us</a>
                <a class="dropdown-item" href="#">Our Services</a>
                <a class="dropdown-item" href="#">Rating</a>
              </div>
            </NavLink>
            <NavLink activeClassName="active" to="/">
            <li className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Client</li>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Notes</a>
                <a class="dropdown-item" href="#">Technology</a>
                <a class="dropdown-item" href="#">Products</a>
              </div>
            </NavLink>
            <NavLink activeClassName="active" to="/">
              <li className="listFont">Partner</li>
            </NavLink>
            <NavLink activeClassName="active" to="/">
              <li className="listFont"><HomeIcon fontSize="small" /></li>
            </NavLink>
            <NavLink activeClassName="active" to="/">
              <li className="listFont"><MailOutlineIcon fontSize="small" /></li>
            </NavLink>
            <NavLink activeClassName="active" to="/">
              <li className="listFont"><ShareIcon fontSize="small" /></li>
            </NavLink>
          </ul>
        </nav>
      </Navigation>
    );
  }
}

export default Nav;