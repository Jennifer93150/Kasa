import { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'

export function useFetch() {
    const [data, setData] = useState({id:'', title:'', location:'', tags:[], description:'', equipments:[], pictures:[], rating:'', host:{'name':'', 'picture':''}})
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    // Recup id depuis l'URL.
    let { id } = useParams()

    // Recuperation des données Json avec fetch
    useEffect(() => {
      fetch(`/locations.json`)
      .then(res =>res.json())
      .then((data) => {
        data.forEach(location=>{
            if(location.id === id){
              //J'init un état des données à true 
              setLoading(true)
              //J'envoi les données vers la fonction setLocations
              setData(location)
            }
        })
      })
      .catch ((err) =>{
        console.log(err)
        setError(true)
      })
    }, [])

    return { isLoading, data , error}
}