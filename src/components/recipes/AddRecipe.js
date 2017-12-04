import React from 'react';
import { connect } from 'react-redux';
import { startAddRecipe } from '../../actions/recipesAction';
import RecipeForm from './RecipeForm';

export class AddRecipe extends React.Component {
    onSubmit = (recipe) => {
        this.props.startAddRecipe(recipe);
    }
    render(){
        return (
            <div className="content-container">
                <h3>Add Recipe</h3>
                <RecipeForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddRecipe: (recipe)=>dispatch(startAddRecipe(recipe))
    }
}

export default connect(undefined,mapDispatchToProps)(AddRecipe);
