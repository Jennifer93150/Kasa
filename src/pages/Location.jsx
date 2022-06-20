import React from 'react';
import { useFetch } from '../utils/hooksLocation'

/** Components */
import Header from '../components/Header'
import Slide from '../components/Slide'
import Collapse from '../components/Collapse'
import Error from './Error'
import Footer from '../components/Footer'

/** Styles */
import '../styles/location.css'

/** Assets */
import star from '../assets/star.png'
import starEmpty from '../assets/empty-star.png'

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
              <Slide  picture={data.pictures}/>
              <div className='wrapper-infos'>
                <div>
                  <h1 className='title'>{data.title} </h1>
                  <p className='location'>{data.location}</p>
                  <div className='tags'>
                    {data.tags.map(tag=>
                      <div className='tag' key={tag}>{tag}</div>
                    )}
                  </div>
                </div>
                <div className='wrapper-profil'>
                    <div className='wrapper-name-picture'>
                      <p className='name'>{data.host.name}</p>
                      <div>
                        <img className='picture' src={data.host.picture} alt={data.host.name}/>
                      </div>
                    </div>
                    <div className='stars'>
                      {Array.from({length: parseInt(data.rating)}, (x, index)=> <img key={`'${x}'-${index}`} src={star} alt='star'/>)}
                      {Array.from({length: 5 - parseInt(data.rating)}, (x, index) => <img key={`'${x}'-${index}`} src={starEmpty} alt='star'/>)}
                    </div>
                </div>
              </div>
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
  