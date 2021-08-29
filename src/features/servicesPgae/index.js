import React from 'react';
import { Packs, Footer } from './components';
export default () =>{
  return(
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column'}}>
      <Packs />
      <Footer />
    </div>
  )
}