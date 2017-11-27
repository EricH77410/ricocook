import React from 'react'
import { Link } from 'react-router-dom';

const RecipeItem = (props) => {
    const id = props.recipe.id
    return (
        <div>
            <Link to={`edit/${id}`}>
                <h4>{props.recipe.nom}</h4>
            </Link>
        </div>
    )
}

export default RecipeItem;