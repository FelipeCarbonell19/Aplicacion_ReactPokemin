import { getPokemon } from "../../helpers/getPokemon";

describe('Prueba helper getPokemon',() => {
    test('debera traer 1 elemento', async () =>{
        const pokemon = await getPokemon('pikachu');
        expect(pokemon.nombre).toBe('pikachu');      
    })   
})