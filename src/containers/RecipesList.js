import React from 'react';
import { connect } from 'react-redux';
import RecipeItem from '../components/recipes/RecipeItem'
import getVisibleRecipes from '../selector/VisibleRecipes';

const RecipesList = (props) => {
    return (
        <div>
            {props.recipes.map((r)=>{
                return <RecipeItem key={r.id} recipe={r}/>
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