import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar sticky-top navbar-expand-sm navbar-dark px-sm-5'>
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon Creative
        Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */}
        <Link to='/'>
          <img src={logo} alt='logo' className='navbar-brand mr-5' />
        </Link>
        {/* require fixes for collapse */}
        <div id='navbarResponsive' className='collapse navbar-collapse'>
          <ul className='navbar-nav align-items-center mx-auto'>
            <li className='nav-item mx-2'>
              <Link to='/' className='nav-link'>
                home
              </Link>
            </li>
            <li className='nav-item mx-2'>
              <Link to='/products' className='nav-link'>
                products
              </Link>
            </li>
            <li className='nav-item mx-2'>
              <Link to='/smallBuckets' className='nav-link'>
                ปิ๊บเล็ก
              </Link>
            </li>
            <li className='nav-item mx-2'>
              <Link to='/contact' className='nav-link'>
                contact us
              </Link>
            </li>
          </ul>
          <Link to='/cart' className='ml-auto'>
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
          </Link>
        </div>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
