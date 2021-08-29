import React, { Component } from 'react';
import Style from "./Footer.module.scss";
export default class Footer extends Component{
  render(){
    return(
      <footer className={ Style.footer }>
        <ul>
          <li><a href="#">ACCEUIL</a></li>
          <li><a href="#">SERVICES</a></li>
          <li><a href="#">PORTFOLIO</a></li>
          <li><a href="#">TÉMOIGNAGES</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
        <p>© TOUS DROIT RÉSERVÉS</p>  
      </footer>
    )
  }
}