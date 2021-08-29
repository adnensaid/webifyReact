import React, { Component } from 'react';
import facebook from '../../../../assets/images/facebook.png';
import instagram from '../../../../assets/images/instagram.png';
import linkedin from '../../../../assets/images/linkedin.png';
import Style from './Footer.module.scss';
export default class footer extends Component{
  render(){
    return(
      <div className={ Style.footer }>
        <div className="container">
          <div className={ Style.footerContent }>
            <div className={ Style.socials }>
              <img src={ facebook } alt="fcb" />
              <img src={ linkedin } alt="lin" />
              <img src={ instagram } alt="ins" />
            </div>
            <p>
              © 2021 WEBIFY TECHNOLOGY, Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    )
  }
}