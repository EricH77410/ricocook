import React from 'react'
import { Link } from 'react-router-dom';

const MiniCard = ({id, recette}) => {
    return (
        <section className="mini-card">
    	    <ul>
      	        <li className="card" tabIndex="0" aria-haspopup="true">
        	        <div className="intro">
          	            <img src={recette.image} width="140" height="140" alt="Pixelmator app icon" />
          	            <h3>{recette.nom}</h3>
        	        </div>
        	        <div className="info">
          	            <p className="publisher"><strong>{recette.nom}</strong></p>
						<p className="description">{recette.description}</p>
          	            <Link to={'/view/'+id} >
						    <button className="btn btn-success">Voir...</button>
						</Link>
        	        </div>
      	        </li>
            </ul>
        </section>
    )
}

export default MiniCard;