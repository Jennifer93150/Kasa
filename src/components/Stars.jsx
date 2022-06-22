import React from 'react';
import { useFetch } from '../utils/hooksLocation'

/** Styles */
import '../styles/location.css'

/** Assets */
import star from '../assets/star.png'
import starEmpty from '../assets/empty-star.png'

function Stars() {

  // Récupération des données via le fichier hooks qui contient la methode fetch
  const { data } = useFetch()
  
  return (    
    <div className='stars'>
        {Array.from({length: parseInt(data.rating)}, (x, index)=> <img key={`'${x}'-${index}`} src={star} alt='star'/>)}
        {Array.from({length: 5 - parseInt(data.rating)}, (x, index) => <img key={`'${x}'-${index}`} src={starEmpty} alt='star'/>)}
    </div> 
  );
}

export default Stars;
  