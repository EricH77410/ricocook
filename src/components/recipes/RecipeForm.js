import React from 'react'

export default class RecipeForm extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className="card" key={this.props.recette.nom}>
                    <form className="admin-form">
                        <input
                            type="text"
                            name="nom"
                            placeholder="Nom de la recette"
                            value={this.props.recette.nom}/>
                        <textarea
                            name="description"
                            rows="3"
                            value={this.props.recette.description}
                            placeholder="Description de la recette">
                        </textarea>
                        <input
                            type="text"
                            name="image"
                            placeholder="URL de l'image"
                            value={this.props.recette.image}/>
                        <input
                            type="text"
                            name="video"
                            placeholder="URL de la video"
                            value={this.props.recette.video}/>
                        <input
                            type="text"
                            name="tempsPreparation"
                            placeholder="Temps de préparation"
                            value={this.props.recette.tempsPreparation}/>
                        <input
                            type="text"
                            name="tempsCuisson"
                            placeholder="Temps de cuisson"
                            value={this.props.recette.tempsCuisson}/>
                        <textarea
                            name="ingredients"
                            rows="3"
                            value={this.props.recette.ingredients}
                            placeholder="Liste des ingrédients"></textarea>
                        <textarea
                            name="instructions"
                            rows="15"
                            value={this.props.recette.instructions}
                            placeholder="Liste des instructions"></textarea>
                            <select value={this.props.recette.categorie}>
                                <option value="preparation">Préparation</option>
                                <option value="patisserie">Patisserie</option>
                                <option value="plat">Plat</option>
                                <option value="dessert">Dessert</option>
                                <option value="entree">Entrée</option>
                            </select>
                    </form>
                </div>
            </div>
        )
    }
}