import React from 'react';
import { useFetch } from '../utils/hooksLocation'

/** Components */
import Header from '../components/Header'
import Slide from '../components/Slide'
import InfosLocation from '../components/InfosLocation'
import Collapse from '../components/Collapse'
import Error from './Error'
import Footer from '../components/Footer'

/** Styles */
import '../styles/location.css'

function Location() {

  // Récupération des données via le fichier hooks qui contient la methode fetch
  const { data, isLoading, error} = useFetch()

  if (error) {
    return <div><Error/></div>
  }
  return (
     <div>
      {/** J'utilise mon état des données 
       * Si false renvoi une page 404
       * Sinon affiche le composant appartemnt
       */}
      {!isLoading ? (
        <Error />
      ) : (
        <div>
          <div className="main-container" key={data.id}>
              <Header/>
              <Slide picture={data.pictures}/>
              <InfosLocation/>
              <div className='wrapper-collapse-location'>
                <Collapse  className="collapse-location" title="Description" text={data.description}/>
                <Collapse className="collapse-location" title="Equipements" text={data.equipments.map(equipment =>
                  <div key={equipment}>{equipment}</div>
                )}/>
              </div>
          </div>
          <Footer/>
        </div>
      )}
    </div>   
  );
}

export default Location;
  