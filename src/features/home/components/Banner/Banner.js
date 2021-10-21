import React, { Component } from 'react';
import Style from './Banner.module.scss';

export default class Banner extends Component{
  
  render(){
    return(
      <div className={ " d-flex flex-column justify-content-center "+Style.banner }>
        <div className="container">
            <div className={ Style.bannerText+" d-flex flex-column" }>
              <h1> CRÉATION DE SITES WEB <br /> ET APPLICATION MOBILE <br /> SUR MESURE</h1>
              <div className="underline"></div>
              <p className="paragraphe paragraphe-primary">
                  Lorem ipsum dolor sit amet, consectutur
                  adipiscing elit, sed do eiusmod tempor
                  Ut enim ad Lorem ipsum dolor sit amet,  
              </p>
              <button href="#" className="btn shadow-none">Découvrez-nous!</button>           
            </div>
        </div>
      </div>
    )
  }
}