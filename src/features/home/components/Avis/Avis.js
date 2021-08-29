import React, { Component } from 'react';
import Style from './Avis.module.scss';
import stella from '../../../../assets/images/stella.png';
import stellaFade from '../../../../assets/images/stella-fade.png';
import quote from '../../../../assets/images/quote1.png';
import quoteFade from '../../../../assets/images/quote.png';
import person1 from '../../../../assets/images/person1.png';
import person2 from '../../../../assets/images/person2.png';
import person3 from '../../../../assets/images/person3.png';

export default class Avis extends Component{
  render(){
    return(
      <section className={ Style.avis }>
        <p className="titre">AVIS DE NOS CLIENTS</p>
        <div className="container">
          <ul className={Style.avisList}>
            <li className={Style.avisElem}>
              <p className={Style.avisElemText}>
                <img src={ quote } alt="quote" />
                <img src={ quote } alt="quote" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid non, fuga expedita eaque perspiciatis esse
                deserunt dolore magni est iste quis fugiat nostrum.  
              </p>
              <div className={Style.avisElemProfil}>
                <div className={ Style.imgProfil }>
                  <img src={person1} alt="person" />
                </div>
                <p>HEBERT King</p>
               <div className={ Style.skill }>
                <img src={stella} alt="skill" className={Style.imgSkill}/>
                <img src={stella} alt="skill" className={Style.imgSkill}/>
                <img src={stella} alt="skill" className={Style.imgSkill}/>
                <img src={stella} alt="skill" className={Style.imgSkill}/>
                <img src={stella} alt="skill" className={Style.imgSkill}/>   
               </div>
               <div className={ Style.quoteFade }>
                  <img src={ quoteFade } alt="quote" className="quote-fade"/>   
                  <img src={ quoteFade } alt="quote" className="quote-fade"/>   
               </div>
              </div>
            </li>
            <li className={Style.avisElem}>
              <p className={Style.avisElemText}>
                <img src={ quote } alt="quote" />
                <img src={ quote } alt="quote" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid non, fuga expedita eaque perspiciatis esse
                deserunt dolore magni est iste quis fugiat nostrum.  
              </p>
              <div className={Style.avisElemProfil}>
                <div className={ Style.imgProfil }>
                  <img src={person2} alt="person"/>
                </div>
                <p>Jean paul</p>
               <div className={ Style.skill }>
                <img src={stella} alt="skill" className={Style.imgSkill}/>
                <img src={stella} alt="skill" className={Style.imgSkill}/>
                <img src={stella} alt="skill" className={Style.imgSkill}/>
                <img src={stellaFade} alt="skill" className={Style.imgSkill}/>
                <img src={stellaFade} alt="skill" className={Style.imgSkill}/>
               </div>
               <div className={ Style.quoteFade }>
                  <img src={ quoteFade } alt="quote" className="quote-fade"/>   
                  <img src={ quoteFade } alt="quote" className="quote-fade"/>   
               </div>
              </div>
            </li>
            <li className={Style.avisElem}>
              <p className={Style.avisElemText}>
                <img src={ quote } alt="quote" />
                <img src={ quote } alt="quote" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid non, fuga expedita eaque perspiciatis esse
                deserunt dolore magni est iste quis fugiat nostrum.  
              </p>
              <div className={Style.avisElemProfil}>
                <div className={ Style.imgProfil }>
                  <img src={person3} alt="person" />
                </div>
                <p>Florent pagny</p>
               <div className={ Style.skill }>
                <img src={stella} alt="skill" className={Style.imgSkill}/>
                <img src={stella} alt="skill" className={Style.imgSkill}/>
                <img src={stellaFade} alt="skill" className={Style.imgSkill}/>
                <img src={stellaFade} alt="skill" className={Style.imgSkill}/>
                <img src={stellaFade} alt="skill" className={Style.imgSkill}/>
               </div>
               <div className={ Style.quoteFade }>
                  <img src={ quoteFade } alt="quote" className="quote-fade"/>   
                  <img src={ quoteFade } alt="quote" className="quote-fade"/>   
               </div>
              </div>
            </li>  
          </ul>
        </div>
      </section>
    )
  }
}