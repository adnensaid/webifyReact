import React, { Component } from 'react';
import { Formik } from 'formik'
import Style from './Packs.module.scss';
import packImg from '../../../../assets/images/vitrine.png';

export default class Packs extends Component{

  constructor(props){
    super(props);
    this.state = {
     currentPage :0,
     pages : [
       {
         title:"TYPE DE SITE WEB",
         name:'type',
         list : ['Site vitrine', 'Site e-commerce', 'Application mobile', 'Sur mesure']
       },
       {
        title:"QUELLES SONT VOS ATTENTES CONCERNANT LE DESIGN DU SITE",
        name:'design',
        list : [ 'Un design standard, simple et efficace', 
        'Un design soigné à partir de vos propres maquettes',
        'Un design haut de gamme entièrement sur mesure']
      },{
        title:"VOTRE SITE DOIT_IL ËTRE DISPONIBLE EN PLUSIEURS LANGUES ?",
        name:'langues',
        list : ["OUI", "NON"]
      },
      {
        title:"VOTRE SITE DOIT-IL PERMETTRE D4ENCAISSER DES PAIEMENTS ?",
        name:'payement',
        list :['Oui des paiements simples par CB / Paypal',
        'Oui des paiements récurrents pour des abonnements',
        'Non'
      ]
      },
      {
        title:"FONCTIONNALITÈS SOUHAITÈES",
        name:'fonctionnaliter',
        list:['Blog', 'intégration des réseaux sociaux', 'Inscription Newsletter', 'Moteur de recherche interne',
        'Module de demande de devis', 'Gestion des factures'
       ]
      },
      {
        title:"HÈBERGEMENT DU SITE",
        name:'hebergement',
        list:["Je compte m'en occuper moi-même", "Je souhaite un hébergement standard", "Je souhaite un hébergement premium (pour un site à fort trafic)" ]
      }
     ]
     } 
  }



  updateSelectedPage = (index)=>{
   this.setState({
     currentPage : index
   }) 
  }
  submit = values => {
    console.log(values);
  }

  render(){
    return(
      <div className={ Style.packs }>
        <div className="container">
                <Formik
                  onSubmit = { this.submit }
                  initialValues = {{ pack : this.state.packs }}
                >
                  {(
                    {
                      values,
                      handleBlur,
                      handleChange,
                      handleSubmit,
                      isSubmitting
                    }
                  )=> (
                  <form onSubmit = { handleSubmit } className={ Style.form }>
                    { this.state.pages.map((p, index)=>(
                      <div className={ Style.pack } key={ index }>
                        { index===0 ? (
                          <>
                          <img src={ packImg } alt="vitrine" className={ Style.packImg } />
                          <div className={ Style.packText }>
                            <h1>PACK VITRINE</h1>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.   
                            </p>
                          </div>  
                          </>  
                        ) : null
                        }
                        <div className={ Style.packService }>
                          <div className={ Style.containerL }>
                            <label><span className="boule">{ index + 1 }</span><p>{p.title}</p></label>   
                            { 
                            p.list.length >= 4 ? (
                              p.list.map(l=>(
                                <input
                                key={index+l}
                                type="button"
                                name="typeSite"
                                value={l}
                                style={{
                                  gridColumn:"span 1"
                                }}
                                onChange = { this.props.handleChange }
                                onBlur = { this.props.handleBlur }
                                />  
                              )) 
                            ): (
                              p.list.map(l=>(
                                <input
                                type="button"
                                name="typeSite"
                                value={l}
                                style={{
                                  gridColumn:"span 2"
                                }}
                                onChange = { this.props.handleChange }
                                onBlur = { this.props.handleBlur }
                                key={index+l}

                                />  
                              )) 
                            )
                            }
                          </div>
                        </div>
                      </div>    
                    )) 
                    }
{/*                     <div className={ Style.pack }>
                      <img src={ packImg } alt="vitrine" className={ Style.packImg } />
                      <div className={ Style.packText }>
                        <h1>PACK VITRINE</h1>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.   
                        </p>
                      </div>    
                      <div className={ Style.packService }>
                        <div className={ Style.containerL }>
                          <label><span className="boule">{ this.state.currentPage + 1 }</span><p>{this.state.pages[0].title}</p></label>                 
                          <input
                           type="button"
                           name="typeSite"
                           value={this.state.pages[0].list[0]}
                           style={{
                             gridColumn:"span 1"
                           }}
                           onChange = { this.props.handleChange }
                           onBlur = { this.props.handleBlur }
                           placeholder = { this.props.p }
                           />
                          <input
                           type="button"
                           name="typeSite"
                           value={this.state.pages[0].list[1]}
                           style={{
                             gridColumn:"span 1"
                           }}
                           onChange = { this.props.handleChange }
                           onBlur = { this.props.handleBlur }
                           placeholder = { this.props.p }
                           />         
                          <input
                           type="button"
                           name="typeSite"
                           value={this.state.pages[0].list[2]}
                           style={{
                             gridColumn:"span 1"
                           }}
                           onChange = { this.props.handleChange }
                           onBlur = { this.props.handleBlur }
                           placeholder = { this.props.p }
                           />  
                          <input
                           type="button"
                           name="typeSite"
                           value={this.state.pages[0].list[3]}
                           style={{
                             gridColumn:"span 1"
                           }}
                           onChange = { this.props.handleChange }
                           onBlur = { this.props.handleBlur }
                           placeholder = { this.props.p }
                           />     
                         </div>  
                      </div>  
                    </div>

                    <div className={ Style.pack }>
                      <div className={ Style.packService }>
                        <div className={ Style.containerL }>
                          <h2>PACK VITRINE</h2>
                          <label><span className="boule">2</span><p>{this.state.pages[1].title}</p></label>                 
                          <input
                           type="button"
                           name="typeSite"
                           value={this.state.pages[1].list[0]}
                           style={{
                             gridColumn:"span 2"
                           }}
                           onChange = { this.props.handleChange }
                           onBlur = { this.props.handleBlur }
                           placeholder = { this.props.p }
                           />
                          <input
                           type="button"
                           name="typeSite"
                           value={ this.state.pages[1].list[1] }
                           style={{
                             gridColumn:"span 2"
                           }}
                           onChange = { this.props.handleChange }
                           onBlur = { this.props.handleBlur }
                           placeholder = { this.props.p }
                           />         
                          <input
                           type="button"
                           name="typeSite"
                           value={ this.state.pages[1].list[2] }
                           style={{
                             gridColumn:"span 2"
                           }}
                           onChange = { this.props.handleChange }
                           onBlur = { this.props.handleBlur }
                           placeholder = { this.props.p }
                           />      
                         </div>  
                      </div>  
                    </div>
                    <div className={ Style.pack }>
                      <div className={ Style.packService }>
                        <div className={ Style.containerL }>
                          <h2>PACK VITRINE</h2>
                          <label><span className="boule">3</span><p>{this.state.pages[2].title}</p></label>                 
                          <input
                           type="button"
                           name="typeSite"
                           value={ this.state.pages[2].list[0] }
                           style={{
                             gridColumn:"span 2"
                           }}
                           onChange = { this.props.handleChange }
                           onBlur = { this.props.handleBlur }
                           placeholder = { this.props.p }
                           />
                          <input
                           type="button"
                           name="typeSite"
                           value={ this.state.pages[2].list[1] }
                           style={{
                             gridColumn:"span 2"
                           }}
                           onChange = { this.props.handleChange }
                           onBlur = { this.props.handleBlur }
                           placeholder = { this.props.p }
                           />             
                         </div>  
                      </div>  
                    </div>  

                    <div className={ Style.pack }>
                      <div className={ Style.packService }>
                        <div className={ Style.containerL }>
                          <h2>PACK VITRINE</h2>
                          <label><span className="boule">4</span><p>{this.state.pages[3].title}</p></label>                 
                          <input
                           type="button"
                           name="typeSite"
                           value={ this.state.pages[3].list[0] }
                           style={{
                             gridColumn:"span 2"
                           }}
                           onChange = { this.props.handleChange }
                           onBlur = { this.props.handleBlur }
                           placeholder = { this.props.p }
                           />
                          <input
                           type="button"
                           name="typeSite"
                           value={ this.state.pages[3].list[1] }
                           style={{
                             gridColumn:"span 2"
                           }}
                           onChange = { this.props.handleChange }
                           onBlur = { this.props.handleBlur }
                           placeholder = { this.props.p }
                           />         
                          <input
                           type="button"
                           name="typeSite"
                           value={ this.state.pages[3].list[2] }
                           style={{
                             gridColumn:"span 2"
                           }}
                           onChange = { this.props.handleChange }
                           onBlur = { this.props.handleBlur }
                           placeholder = { this.props.p }
                           />      
                         </div>  
                      </div>  
                    </div>  

                    <div className={ Style.pack }>
                      <div className={ Style.packService }>
                        <div className={ Style.containerL }>
                          <h2>PACK VITRINE</h2>
                          <label><span className="boule">5</span><p>{this.state.pages[4].title}</p></label>                 
                          <input
                           type="button"
                           name="typeSite"
                           value={ this.state.pages[4].list[0] }
                           style={{
                             gridColumn:"span 1"
                           }}
                           onChange = { this.props.handleChange }
                           onBlur = { this.props.handleBlur }
                           placeholder = { this.props.p }
                           />
                          <input
                           type="button"
                           name="typeSite"
                           value={ this.state.pages[4].list[1] }
                           style={{
                             gridColumn:"span 1"
                           }}
                           onChange = { this.props.handleChange }
                           onBlur = { this.props.handleBlur }
                           placeholder = { this.props.p }
                           />         
                          <input
                           type="button"
                           name="typeSite"
                           value={ this.state.pages[4].list[2] }
                           style={{
                             gridColumn:"span 1"
                           }}
                           onChange = { this.props.handleChange }
                           onBlur = { this.props.handleBlur }
                           placeholder = { this.props.p }
                           />     
                          <input
                           type="button"
                           name="typeSite"
                           value={ this.state.pages[4].list[3] }
                           style={{
                             gridColumn:"span 1"
                           }}
                           onChange = { this.props.handleChange }
                           onBlur = { this.props.handleBlur }
                           placeholder = { this.props.p }
                           />   
                          <input
                           type="button"
                           name="typeSite"
                           value={ this.state.pages[4].list[4] }
                           style={{
                             gridColumn:"span 1"
                           }}
                           onChange = { this.props.handleChange }
                           onBlur = { this.props.handleBlur }
                           placeholder = { this.props.p }
                           />   
                          <input
                           type="button"
                           name="typeSite"
                           value={ this.state.pages[4].list[5] }
                           style={{
                             gridColumn:"span 1"
                           }}
                           onChange = { this.props.handleChange }
                           onBlur = { this.props.handleBlur }
                           placeholder = { this.props.p }
                           />                 
                         </div>  
                      </div>  
                    </div>  
                    <div className={ Style.pack }>
                      <div className={ Style.packService }>
                        <div className={ Style.containerL }>
                          <h2>PACK VITRINE</h2>
                          <label><span className="boule">6</span><p>{this.state.pages[5].title}</p></label>                 
                          <input
                           type="button"
                           name="typeSite"
                           value={ this.state.pages[5].list[0] }
                           style={{
                             gridColumn:"span 2"
                           }}
                           onChange = { this.props.handleChange }
                           onBlur = { this.props.handleBlur }
                           placeholder = { this.props.p }
                           />
                          <input
                           type="button"
                           name="typeSite"
                           value={ this.state.pages[5].list[1] }
                           style={{
                             gridColumn:"span 2"
                           }}
                           onChange = { this.props.handleChange }
                           onBlur = { this.props.handleBlur }
                           placeholder = { this.props.p }
                           />         
                          <input
                           type="button"
                           name="typeSite"
                           value={ this.state.pages[5].list[2] }
                           style={{
                             gridColumn:"span 2"
                           }}
                           onChange = { this.props.handleChange }
                           onBlur = { this.props.handleBlur }
                           placeholder = { this.props.p }
                           />                      
                         </div>  
                      </div>  
                    </div>   */}
                  </form>  
                  )}
                </Formik>  
        </div>
      </div>
    )
  }
}