
export const getPoke = (valorBusqueda) => {
    let pokemones = {
        id: 0,
        name: "",
        url: ''
    };
    const url = `https://pokeapi.co/api/v2/pokemon/${valorBusqueda}`;
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => (
        pokemones.id = data.id,
        pokemones.name = data.name,
        pokemones.url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`
    ))
    
    return pokemones;
}