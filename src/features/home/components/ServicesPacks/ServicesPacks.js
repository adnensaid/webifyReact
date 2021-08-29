import React, { Component } from 'react';
import Style from './ServicesPacks.module.scss';
import service1 from '../../../../assets/images/3.png';
import service2 from '../../../../assets/images/2.png';
import service3 from '../../../../assets/images/3.png';
import service4 from '../../../../assets/images/4.png';

export default class ServicesPacks extends Component{
  render(){
    return(
      <section className={ Style.services }>
          <p className="titre">NOS SERVICES ET PACKS</p>
          <div className="container">
            <div className={ Style.servicesList }>
              <div className={Style.servicesElem}>
                  <div className={Style.servicesText}>
                    <p className="titre-secondary">PACK VITRINE</p>
                    <p className="paragraphe">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Illum, quae facere pariatur sunt voluptas dolor aliquid
                      libero maxime? Aspernatur, eius officia. Ex sit minus saepe 
                      impedit fugit    
                    </p>
                    <button href="#" className="btn btn-primary">Je découvre</button>  
                  </div>    
                  <img src={ service1 } alt="service" data-aos="fade-left" />    
              </div>
              <div className={Style.servicesElem}>
                  <img src={ service2 } alt="service" data-aos="fade-right" />
                  <div className={Style.servicesText}>
                    <p className="titre-secondary">PACK E-COMMERCE</p>
                    <p className="paragraphe">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Illum, quae facere pariatur sunt voluptas dolor aliquid
                      libero maxime? Aspernatur, eius officia. Ex sit minus saepe 
                      impedit fugit    
                    </p>
                    <button href="#" className="btn btn-primary">Je découvre</button>  
                  </div>    
              </div>  
              <div className={Style.servicesElem}>
                  <div className={Style.servicesText}>
                    <p className="titre-secondary">PACK APP. MOBILE</p>
                    <p className="paragraphe">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Illum, quae facere pariatur sunt voluptas dolor aliquid
                      libero maxime? Aspernatur, eius officia. Ex sit minus saepe 
                      impedit fugit    
                    </p>
                    <button href="#" className="btn btn-primary">Je découvre</button>  
                  </div>    
                  <img src={ service3 } alt="service" data-aos="fade-right" />
              </div>
              <div className={Style.servicesElem}>
                  <img src={ service4 } alt="service" data-aos="fade-right" />
                  <div className={Style.servicesText}>
                    <p className="titre-secondary">PACK SUR MESURE</p>
                    <p className="paragraphe">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Illum, quae facere pariatur sunt voluptas dolor aliquid
                      libero maxime? Aspernatur, eius officia. Ex sit minus saepe 
                      impedit fugit    
                    </p>
                    <button href="#" className="btn btn-primary">Je découvre</button>  
                  </div>    
              </div>
            </div>
          </div>
      </section>    
    )
  }
}
