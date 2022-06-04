import React from 'react'
import '../css/contenedor.css'
import { useGetPokemones } from '../hooks/useGetPokemones'
import ItemsPokemon from './ItemsPokemon'
import { firebase } from '../firebase'
import { BiTrashAlt, BiEditAlt } from 'react-icons/bi'
import 'animate.css'

export const Contenedor = ({ valorBusqueda }) => {
  const { pokemones, cargando } = useGetPokemones(valorBusqueda)
  const [lista, setLista] = React.useState([])

  React.useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const db = firebase.firestore()
        const data = await db.collection('PokeAPP').get()
        const array = data.docs.map(item => ({
          id: item.id,
          ...item.data()
        }))
        setLista(array)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerDatos()
  }, [lista])

  const eliminar = id => {
    try {
      const db = firebase.firestore()
      db.collection('PokeAPP')
        .doc(id)
        .delete()
      const aux = lista.filter(item => item.id !== id)
      setLista(aux)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      {cargando && (
        <p className='animate__animated animate__flash'>Cargando...</p>
      )}

      <div
        className='card-grid animate__animated animate__bounceInUp contenedor'
        id='contenedor'
      >
        {
          <div className='card animate__animated animate__fadeIn'>
            <p>{valorBusqueda.nombre}</p>
            <img src={valorBusqueda.url} alt={valorBusqueda.nombre} />
          </div>
        }
        <hr className='spCard' />
        <div>
          <button
            className='canecatbn'
            onClick={() => eliminar(valorBusqueda.id)}
          >
            <BiTrashAlt />
          </button>
        </div>
      </div>
    </>
  )
}
