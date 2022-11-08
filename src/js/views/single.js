import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

export const Single = props => {

	const [pokemon, setPokemon] = useState()

	useEffect(async ()=>{

		const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.theid}`)
		const data = await resp.json()
		setPokemon(data)
	},[])

	const params = useParams();

	return (
		<div className="jumbotron">
			<h1>Detalle del Pokemon {pokemon && pokemon.name}! </h1>
			{	pokemon &&
				<img src={pokemon.sprites.front_default} alt={pokemon.name}/>
			}
			<hr className="my-4" />
				<h3>Types 🧨</h3>
				<ul>
					{
						pokemon && pokemon.types.map(
						(type)=>
							<li key={type.type.name}>
								{type.type.name}
							</li>
						)
					}
				</ul>
				<h3>Moves 🎀</h3>
				<ol>
					{pokemon && pokemon.moves.map((skill, index)=>
						<li key={index}>
							{skill.move.name}
						</li>
					)}
				</ol>
			<Link to="/">

			</Link>
		</div>
	);
};
