import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";


const Card = (props) => {

	const { store ,actions } = useContext(Context)

    return (
        <>
            <div className="col-3 p-3">
					<div className="card">
						<div className="card-body">
							<h5>
								{ props.pokemon.name }
							</h5>
							<img src={props.pokemon.sprites.front_default} alt={props.pokemon.name}/>
							<Link to={`/single/${props.pokemon.id}`}>
								<button className="btn btn-primary m-1">Details</button>
							</Link>
							<button 
								className={`btn btn-${ props.pokemon && store.favorites.includes(props.pokemon.name) ? "info" : "warning"  } m-1`} 
								onClick={() => actions.addFavorite(props.pokemon.name) 
								}> Add 🧡
							</button>
						</div>
					</div>
            </div>
        </>
    )
}

export default Card;