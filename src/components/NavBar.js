import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
// import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { Navbar } from "react-bootstrap";

export default class NavBar extends Component {
  render() {
    return (
      <NavWrapper>
        <Navbar className='nav-wrapper' bg='light' expand='lg' sticky='top'>
          <Link to='/'>
            <img
              className='d-inline-block align-top mx-3 my-2'
              src={"../img/logo.gif"}
              alt='logo'
              style={{ width: "5em" }}
            />
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <ul className='navbar-nav mx-auto'>
              <li className='nav-item mx-3'>
                <NavLink to='/' className='nav-link'>
                  หน้าหลัก
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
            <NavLink to='/cart' className='mx-3 my-2'>
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
            <br />
            {/* <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='outline-success'>Search</Button>
          </Form> */}
          </Navbar.Collapse>
        </Navbar>
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
