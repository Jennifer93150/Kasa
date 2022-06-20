import React from 'react';

/** Components */
import Header from '../components/Header'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

/** Assets */
import banner from '../assets/banner.png'

/** Styles */
import '../styles/banner.css'
import '../styles/index.css'

function Home() {
    return (
      <div>
        <div className="main-container">
          <Header/>
          <Banner>
            <img src={banner} className="banner" alt="Bannière" />
            <p className='banner-text'>Chez vous, partout et ailleurs</p>
          </Banner>
          <Gallery/>
        </div>
        <Footer/>
      </div>
      
    );
}
  
export default Home;
  