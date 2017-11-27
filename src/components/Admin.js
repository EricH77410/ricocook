import React from 'react'
import { connect } from 'react-redux'
import recettes from './recettes'
import { startAddRecipe } from '../actions/recipesAction';

export class Admin extends React.Component{
    constructor(props){
        super(props);
    }
    uploadRecipe=(r)=>{
        this.props.startAddRecipe(r);
    }

 render(){
    const liste = recettes.map((recette)=>{
        return (
            <div className="card" key={recette.nom}>
                <form className="admin-form">
                    <input
                        type="text"
                        name="nom"
                        placeholder="Nom de la recette"
                        value={recette.nom}/>
                    <textarea
                        name="description"
                        rows="3"
                        value={recette.description}
                        placeholder="Description de la recette">
                    </textarea>
                    <input
                        type="text"
                        name="image"
                        placeholder="URL de l'image"
                        value={recette.image}/>
                    <input
                        type="text"
                        name="video"
                        placeholder="URL de la video"
                        value={recette.video}/>
                    <input
                        type="text"
                        name="tempsPreparation"
                        placeholder="Temps de préparation"
                        value={recette.tempsPreparation}/>
                    <input
                        type="text"
                        name="tempsCuisson"
                        placeholder="Temps de cuisson"
                        value={recette.tempsCuisson}/>
                    <textarea
                        name="ingredients"
                        rows="3"
                        value={recette.ingredients}
                        placeholder="Liste des ingrédients"></textarea>
                    <textarea
                        name="instructions"
                        rows="15"
                        value={recette.instructions}
                        placeholder="Liste des instructions"></textarea>
                        <select value={recette.categorie}>
                            <option value="preparation">Préparation</option>
                            <option value="patisserie">Patisserie</option>
                            <option value="plat">Plat</option>
                            <option value="dessert">Dessert</option>
                            <option value="entree">Entrée</option>
                        </select>
                </form>
                <button className="button" onClick={()=>this.uploadRecipe(recette)}>Save to firebase</button>
            </div>
        )
    })
 return (
     <div>
        {liste}
     </div>
     
 )
    
 }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddRecipe:(recette)=>dispatch(startAddRecipe(recette))
    }
}

export default connect(undefined, mapDispatchToProps)(Admin)