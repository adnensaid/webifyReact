import React, { Component } from 'react';
import Style from './Banner.module.scss';

export default class Banner extends Component{
  
  render(){
    return(
      <div className={ Style.banner }>
        <div className="container">
          <div className={ Style.bannerContent }>
            <div className={ Style.bannerText }>
              <h1> CRÉATION DE SITES WEB <br /> ET APPLICATION MOBILE <br /> SUR MESURE</h1>
              <div className="underline"></div>
              <p className="paragraphe">
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Impedit asperiores excepturi
                omnis molestias Impedit asperiores excepturi
                omnis molestias 
              </p>
              <button href="#" className="btn btn-primary">Découvrez-nous!</button>           
            </div>
          </div>
        </div>
      </div>
    )
  }
}