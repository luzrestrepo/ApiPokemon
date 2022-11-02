import React, { useState, useEffect } from 'react';
import axios from 'axios';
const ApiPokemon = () => {

    const [firstRender, setFirstRender] = useState(false);
    const [pokemons, setPokemos] = useState([]);
    const [toggleFetch, setToggleFetch] = useState(false);
    const FetchPokes = () => {
        setToggleFetch(!toggleFetch);
    }


    useEffect(() => {
        setFirstRender(true);
    }, [])

    useEffect(() => {
        if (firstRender) {
            console.log("POKEANDO");
            axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
                .then(response => {
                    console.log(response);
                    setPokemos(response.data.results);

                })
        }
        // eslint-disable-next-line
    }, [toggleFetch])

    return (

        <div className='container'>
            <button className='btn btn-success' onClick={FetchPokes}>Todos los pokemons</button>
            <ul className='list-unstyled'>
                {
                    pokemons.map((pokemon, index) => {
                        return (
                            <li key={pokemon + index}>
                                <img className='mr-2' src="https://tse1.mm.bing.net/th?id=OIP.wtRMlCXcSM9Sh255XYBNtwHaHI&pid=Api&P=0" alt={pokemon.name} height="25" />
                                <strong>{pokemon.name}</strong>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default ApiPokemon;