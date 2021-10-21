import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';
import Style from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
export default class Header extends Component{

  render(){
    return(
     <>
        <Navbar bg={ this.props.scrollTop === 0 && this.props.location.pathname === "/home" ? "transparent" : "light" } expand="lg" fixed="top" className={ Style.header+" py-5" }>
          <Container>
            <Navbar.Brand href="#home">
              <img src={ logo } alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="ms-auto">
                <NavLink to="/home" className={ this.props.scrollTop === 0 && this.props.location.pathname === "/home" ? Style.navlink+" text-white" : Style.navlink+" text-dark" } activeClassName="text-white active">ACCEUIL</NavLink>
                <NavLink to="/services"  className={ this.props.scrollTop === 0 && this.props.location.pathname === "/home" ? Style.navlink+" text-white" : Style.navlink+" text-dark" } activeClassName="text-white active">SERVICES</NavLink>
                <NavLink to="/portfolio" className={ this.props.scrollTop === 0 && this.props.location.pathname === "/home" ? Style.navlink+" text-white" : Style.navlink+" text-dark" } activeClassName="text-white active" >PORTFOLIO</NavLink>
                <NavLink to="/temoignages" className={ this.props.scrollTop === 0 && this.props.location.pathname === "/home" ? Style.navlink+" text-white" : Style.navlink+" text-dark" } activeClassName="text-white active" >TÉMOIGNAGES</NavLink>
                <NavLink to="/contact" className={ this.props.scrollTop === 0 && this.props.location.pathname === "/home" ? Style.navlink+" text-white" : Style.navlink+" text-dark" } activeClassName="text-white active">CONTACT</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
     </>
    )
  }
}

/* 

      { this.props.location.pathname === "/home" && this.props.scrollTop ===0 ? (
        <header className={Style.header1 }  >
          <div className="container">
            <div className="d-flex flex-row align-items-center">
              <div className="flex-fill">
                <a href={ this.props.photos } className={ Style.logo }>
                  <img src={ logo } alt="" />
                </a>
              </div>  
              <ul className="d-flex flex-row align-items-center justify-content-center border-radius-5">
                <li style={{ borderRadius:'0.5rem'}}>
                  <NavLink to="/home" className={ Style.navlink } activeClassName="active">ACCEUIL</NavLink>    
                </li>
                <li>
                  <NavLink to="/services"  className={ Style.navlink } activeClassName="active">SERVICES</NavLink>
                </li>
                <li>
                  <NavLink to="/portfolio" className={ Style.navlink } activeClassName="active" >PORTFOLIO</NavLink>
                </li>
                <li>
                  <NavLink to="/temoignages" className={ Style.navlink } activeClassName="active" >TÉMOIGNAGES</NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className={ Style.navlink } activeClassName="active" >CONTACT</NavLink>    
                </li>
              </ul>       
            </div> 
          </div>
        </header>
      ) : (
        <header className={Style.header2} >
          <div className="container">
            <div className="d-flex flex-row align-items-center">
              <div className="flex-fill">
                <a href={ this.props.photos } className={ Style.logo }>
                  <img src={ logo } alt="" />
                </a>
              </div>  
              <ul className="d-flex flex-row align-items-center justify-content-center border-radius-5 ">
                <li style={{ borderRadius:'0.5rem'}}>
                  <NavLink to="/home" activeClassName="active" className={ Style.navlink } >ACCEUIL</NavLink>    
                </li>
                <li>
                  <NavLink to="/services" activeClassName="active" className={ Style.navlink } >SERVICES</NavLink>
                </li>
                <li>
                  <NavLink to="/portfolio" activeClassName="active" className={ Style.navlink } >PORTFOLIO</NavLink>
                </li>
                <li>
                  <NavLink to="/temoignages" activeClassName="active" className={ Style.navlink } >TÉMOIGNAGES</NavLink>
                </li>
                <li>
                  <NavLink to="/contact" activeClassName="active" className={ Style.navlink } >CONTACT</NavLink>    
                </li>
              </ul>       
            </div> 
          </div>
      </header>
      
      )}
*/