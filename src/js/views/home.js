import React, { useState, useEffect, useRef } from "react";
import "../../styles/home.css";

export const Home = () => {

	const [ pokemones, setPokemones ] = useState([])
	
	useEffect(async ()=>{
		try{
			let auxArray = []
			for(let i = 1; i < 20; i++){
				auxArray.push( await fetchPokemon(i) )
			}
			setPokemones([ ...auxArray])
		}catch(err){
			console.log('Ah ocurrido un error', err)
		}
	}, [])
	
	
	const fetchPokemon = async (id) => {
		let peticion = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
		let data = await peticion.json()
		return data
	}
	//parte del template
	return (
		<div className="text-center mt-5">
			<h1>Pokemon API</h1>
			<div className="flex-wrap d-flex">
			{ pokemones && pokemones.length > 0 &&	pokemones.map(
				(pokemon) => 
				<div key={pokemon.name} className="col-3 p-3">
					<div className="card">
					<div className="card-body">
						<h5>
							{ pokemon.name }
						</h5>
						<img src={pokemon.sprites.front_default} alt={pokemon.name}/>
					</div>
					</div>
				</div>)
			}
			</div>
		</div>
	);
}