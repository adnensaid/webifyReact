import React from 'react';

import { Banner, Expertises, ServicesPacks, Portfolio, Avis, Newsletter, Footer } from './components';

const index  = () =>{
  return(
    <>
    <Banner />
    <Expertises />
    <ServicesPacks />
    <Portfolio />
    <Avis />
    <Newsletter />
    <Footer />
    </>
  )
}
export default index;