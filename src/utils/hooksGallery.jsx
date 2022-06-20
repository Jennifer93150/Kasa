import { useState, useEffect } from 'react'

export function useFetch() {
    const [datas, setDatas] = useState([]);
    
    // Recuperation des données Json avec fetch
    useEffect (function (){
        fetch(`/locations.json`)
        	.then(res => res.json())
            .then((data) => {
                //J'envoi les données vers la fonction setLocations
                setDatas(data)
            })
            .catch(err => console.log('an error occurs', err))
	},[])

    return { datas }
}