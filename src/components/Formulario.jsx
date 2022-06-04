import '../css/form.css'
import {useState} from 'react'
import {firebase} from '../firebase'
import { getPoke } from '../helpers/getPoke'

let pokemones;

export const Formulario =({setCategoriasBusqueda})=>{
    const [valorBusqueda, setValorBusqueda] = useState('');
    const [url, setUrl] = useState('');
    const [nombre, setNombre] = useState('')
    const [lista, setLista] = useState([])

    pokemones = getPoke(valorBusqueda)

    const guardar = async (e) =>{
        try {
            const db = firebase.firestore()
            const nuevoPokemon = {
                nombre: pokemones.name,
                url: pokemones.url
            }
            
            setLista([...lista,
                {
                    nombre: pokemones.name,
                    url: pokemones.url
                }
            ])
            
            await db.collection('PokeAPP').add(nuevoPokemon)

            setNombre('')
            setUrl('')

        } catch (error) {
            console.log(error)
        }
    }

    const cambiarValorBusqueda= (e) => {
        setValorBusqueda(e.target.value);
    }

    const buscar = (e)=>{
        e.preventDefault();
        if (valorBusqueda.trim().length > 0){
          setCategoriasBusqueda(valores => [valorBusqueda, ...valores])
          setValorBusqueda('')
        }
        guardar()
    }

    return(
        <>
            <form onSubmit={buscar}>
                <p>Buscar Pokemon</p>
                <input 
                    type="text" 
                    placeholder="Que pokemon desea buscar" 
                    id="Valorusqueda"
                    value = {valorBusqueda}
                    onChange={cambiarValorBusqueda}
                />
                <button className='boton' type="submit">Buscar</button>
            </form>
        </>
    );
}

