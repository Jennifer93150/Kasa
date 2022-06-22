import React from 'react';
import { useFetch } from '../utils/hooksLocation'

/** Components */
import Stars from '../components/Stars'

/** Styles */
import '../styles/location.css'

function InfosLocation() {

  // Récupération des données via le fichier hooks qui contient la methode fetch
  const { data } = useFetch()

  return (
    <div>
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
                    <Stars/>
                </div>
        </div>
    </div>   
  );
}

export default InfosLocation;
  