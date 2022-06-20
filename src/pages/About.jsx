import React from 'react';

/** Components */
import Header from '../components/Header';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';

/** Datas */
import { listCollapseAbout } from '../datas/listCollapseAbout'

/** Assets */
import banner from '../assets/banner-about.png'

/** Styles */
import '../styles/about.css'

function About() {

    return (
        <div>
            <div className="main-container">
                <Header/>
                <Banner>
                    <img src={banner} className="banner-about" alt="Bannière" />
                </Banner>
                {/** J'utilise les props title et text crée ds Collapse
                 * ce qui me permet de reutiliser le Collapse et d'adapter le contenu
                 * à la fois sur la page About et Location 
                */}
                {listCollapseAbout.map(({title, text, index}) => 
                    <div key={`${title}-${index}`} className='wrapper-collapse-about'>
                        <Collapse title={title} text={text}/>
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    )
}
export default About