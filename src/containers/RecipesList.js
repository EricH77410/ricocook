import React from 'react';
import { connect } from 'react-redux';
import RecipeItem from '../components/recipes/RecipeItem'
import getVisibleRecipes from '../selector/VisibleRecipes';
import MiniCard from '../components/recipes/MiniCard';

const RecipesList = (props) => {
    return (
        <div className="display-list">
            {props.recipes.map((r)=>{
                return <MiniCard key={r.id} recette={r} id={r.id}/>
            })}
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        recipes: getVisibleRecipes(state.recipes, state.filters),
        filters: state.filters
    }
}

export default connect(mapStateToProps)(RecipesList);