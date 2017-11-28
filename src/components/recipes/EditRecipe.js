import React from 'react';
import { connect } from 'react-redux';
import { startEditRecipe, startRemoveRecipe } from '../../actions/recipesAction';
import RecipeForm from './RecipeForm';

export class EditRecipe extends React.Component{
    
    constructor(props){
        super(props);
    }

    onSubmit = (r) => {
        const id = this.props.match.params.id
        this.props.startEditRecipe(id, r)
        this.props.history.push('/')
    }

    render(){
        return (
            <div>
                Edit Recipe
                <div className="container">
                    <RecipeForm
                        recette={this.props.recipe}
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        recipe: state.recipes.find((r)=>r.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        startEditRecipe: (id,recette)=>dispatch(startEditRecipe(id,recette)),
        startRemoveRecipe:(id)=>dispatch(startRemoveRecipe(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditRecipe);