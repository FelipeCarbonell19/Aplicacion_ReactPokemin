import {useEffect, useState} from 'react'
import { getPoke } from '../helpers/getPoke'

export const useGetPokemones = (searchVal) => {

    const [estado, setEstado] = useState({
        Poke: [],
        cargando: true
    })

    useEffect(() =>{
        setTimeout(() =>{
            let Poke = getPoke(searchVal)
            setEstado({
                Poke: Poke,
                cargando: false
            })
        }, 20)
    }, [searchVal])

    return estado;
  
}