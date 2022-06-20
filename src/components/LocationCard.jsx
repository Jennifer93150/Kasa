import React from 'react'
import { useFetch } from '../utils/hooksGallery'
import { Link } from 'react-router-dom';

/** Styles */
import '../styles/locationCard.css'

function LocationCard() {
    // Récupération des données via le fichier hooks qui contient la methode fetch
    const { datas } = useFetch()

    return (
        <div className="location-gallery">
        {/** J'utilise l'id sur Link pour qu'il me renvoi sur l'appart correspondant */}
            {datas.map((location) =>
            <Link to={"/location/"+location.id} key={location.id}>
                <div className="location-card" style={{backgroundImage: `url(${location.cover})`}}>
                    <h5 className="location-title">{location.title}</h5>
                </div>
            </Link>
                
            )}
        </div>
	)
}

export default LocationCard