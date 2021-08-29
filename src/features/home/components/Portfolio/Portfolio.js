import React, { Component } from 'react';
import Style from './Portfolio.module.scss';
export default class Portfolio extends Component{
  render(){
    return(
      <section className={ Style.portfolio }>
        <p className="titre">NOTRE PORTFOLIO</p>
        <div className="container">
          <div className={ Style.portfolioContent }>
            <p className="titreSecondary text-center">NOS DERNIERS RÉALISATIONS</p>
            <ul className={Style.portfolioMenu}>
              <li> <a href="#" className={Style.textPortfolio}>TOUS</a> </li>
              <li> <a href="#" className={Style.textPortfolio}>DESIGN WEB</a> </li>
              <li> <a href="#" className={Style.textPortfolio}>LOGOS</a> </li>
              <li> <a href="#" className={Style.textPortfolio}>GRAPHIQUE</a> </li>
              <li> <a href="#" className={Style.textPortfolio}>APPLICATIONS MOBILES</a> </li>
            </ul>
            <div className={ Style.portfolioLatest }>
              <div className={ Style.portfolioLatestElem }>
                <div className={ Style.portfolioLatestElemImg }></div>
                <div className={ Style.portfolioLatestElemImg }></div>  
              </div>
              <div className={ Style.portfolioLatestElem }>
                <div className={ Style.portfolioLatestElemImg }></div>
              </div>
              <div className={ Style.portfolioLatestElem }>
                <div className={ Style.portfolioLatestElemImg }></div>
                <div className={ Style.portfolioLatestElemImg }></div>  
              </div>
            </div>
          </div>

        </div>
      </section>
    )
  }
}