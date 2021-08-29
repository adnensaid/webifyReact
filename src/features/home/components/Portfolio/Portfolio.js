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
              <li> <span className={Style.textPortfolio}>TOUS</span></li>
              <li> <span className={Style.textPortfolio}>DESIGN WEB</span></li>
              <li> <span className={Style.textPortfolio}>LOGOS</span></li>
              <li> <span className={Style.textPortfolio}>GRAPHIQUE</span></li>
              <li> <span className={Style.textPortfolio}>APPLICATIONS MOBILES</span></li>
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