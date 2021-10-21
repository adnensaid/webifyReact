import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import NavbarPortfolio  from '../../../navbarportfolio/NavbarPortfolio';
import Style from './Portfolio.module.scss';
import img1 from '../../../../assets/images/portfolio1.png';
import img2 from '../../../../assets/images/portfolio2.png';
import img3 from '../../../../assets/images/portfolio3.png';
import img4 from '../../../../assets/images/portfolio4.png';
import img5 from '../../../../assets/images/portfolio5.png';
import img6 from '../../../../assets/images/ms.png';
import img8 from '../../../../assets/images/mockups.png';
import img9 from '../../../../assets/images/ones.png';
import img10 from '../../../../assets/images/fotowork.png';


export default class Portfolio extends Component{
  render(){
    return(
      <section className={ Style.portfolio }>
        <p className="titre">NOTRE PORTFOLIO</p>
        <Container>
          <div className={ Style.portfolioContent+ " d-flex flex-column" }>
            <p className="titre-secondary text-center">NOS DERNIERS RÉALISATIONS</p>
            <NavbarPortfolio />
            <div className={ Style.latest}>
              <div className="row">
                <div className="col-8">
                  <div className="row gx-5 gy-5">
                    <div className="item col-6">
                      <img src={ img1 } className="w-100" />
                      <img src={ img2 } className="w-100" />
                      <img src={ img3 } className="w-100" />
                      <img src={ img4 } className="w-100" />
                      <img src={ img5 } className="w-100" />    
                    </div>
                    <div className="item col-6 ">
                      <img src={ img6 } className="w-100" />    
                    </div>
                    <div className="item">
                    <img src={ img8 } className="w-100 mt-5" />    
                    </div>
                  </div>
                </div>
                <div className="col-4 d-flex flex-column">
                  <div className="row item">
                    <img src={ img9 } className="w-100 mb-5" />
                  </div>
                  <div className="row item">
                    <img src={ img10 } className="w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    )
  }
}