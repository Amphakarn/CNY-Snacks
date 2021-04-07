import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
// import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-light navbar-expand-lg sticky-top px-sm-5 '>
        <Link to='/'>
          <img
            src={"../img/logo.gif"}
            alt='logo'
            className='navbar-brand mr-5'
            style={{ width: "5em" }}
          />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#collapsibleNavbar'
          // aria-controls='collapsibleNavbar'
          // aria-expanded='false'
          // aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        {/* require fixes for collapse */}
        <div id='collapsibleNavbar' className='collapse navbar-collapse'>
          <ul className='navbar-nav align-items-center mx-auto'>
            <li className='nav-item mx-3'>
              <NavLink to='/' className='nav-link'>
                home
                {/* <span className='sr-only'>(current)</span> */}
              </NavLink>
            </li>
            <li className='nav-item mx-3'>
              <NavLink to='/products' className='nav-link'>
                products
              </NavLink>
            </li>
            <li className='nav-item mx-3'>
              <NavLink to='/smallBuckets' className='nav-link'>
                ปิ๊บเล็ก
              </NavLink>
            </li>
            <li className='nav-item mx-3'>
              <NavLink to='/contact' className='nav-link'>
                ติดต่อเรา
              </NavLink>
            </li>
          </ul>
          <NavLink to='/cart' className='ml-auto'>
            <ButtonContainer>
              <span className='mr-2'>
                <i className='fas fa-cart-plus'></i>
              </span>
              {/* testing to add number of item */}
              {/* <span className='fa-stack fa-2x has-badge data-count="5"'> */}
              {/* <i className='fa fa-circle fa-stack-2x fa-inverse'></i>
              <i className='fa fa-shopping-cart fa-stack-2x red-cart'></i> */}
              {/* <i className='fa fa-circle fa-stack-2x'></i>
              <i className='fa fa-shopping-cart fa-stack-1x fa-inverse'></i> */}
              {/* </span> */}
              my cart
            </ButtonContainer>
          </NavLink>
        </div>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainLightGrey);
  .nav-link {
    color: var(--mainDark) !important;
    font-size: 1.5rem;
    text-transform: capitalize;
  }
  .nav-link:hover {
    color: var(--mainOrange) !important;
  }
  .active {
    color: var(--mainOrange) !important;
  }
`;
