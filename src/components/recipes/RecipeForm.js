import React from 'react'

export default class RecipeForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nom: this.props.recette ? this.props.recette.nom : '',
            description: this.props.recette ? this.props.recette.description : '',
            ingredients: this.props.recette ? this.props.recette.ingredients : '',
            image: this.props.recette ? this.props.recette.image : '',
            video: this.props.recette ? this.props.recette.video : '',
            tempsPreparation :this.props.recette ? this.props.recette.tempsPreparation : '',
            tempsCuisson: this.props.recette ? this.props.recette.tempsCuisson : '',
            instructions: this.props.recette ? this.props.recette.instructions : '',
            categorie: this.props.recette ? this.props.recette.categorie : ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const recipe = {...this.state}
        this.props.onSubmit(recipe);
    }

    onChangeElement = (e) => {
        const val = e.target.value;
        const name = e.target.name;
        this.setState(()=>({[name]: val}))
    }

    render(){
        return(
            <div className="content-container">
                <div className="card">
                    <form className="admin-form" onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            name="nom"
                            placeholder="Nom de la recette"
                            value={this.state.nom}
                            onChange={this.onChangeElement}/>
                        <textarea
                            name="description"
                            rows="3"
                            value={this.state.description}
                            placeholder="Description de la recette"
                            onChange={this.onChangeElement}>
                        </textarea>
                        <input
                            type="text"
                            name="image"
                            placeholder="URL de l'image"
                            value={this.state.image}
                            onChange={this.onChangeElement}/>
                        <input
                            type="text"
                            name="video"
                            placeholder="URL de la video"
                            value={this.state.video}
                            onChange={this.onChangeElement}/>
                        <input
                            type="text"
                            name="tempsPreparation"
                            placeholder="Temps de préparation"
                            value={this.state.tempsPreparation}
                            onChange={this.onChangeElement}/>
                        <input
                            type="text"
                            name="tempsCuisson"
                            placeholder="Temps de cuisson"
                            value={this.state.tempsCuisson}
                            onChange={this.onChangeElement}/>
                        <textarea
                            name="ingredients"
                            rows="3"
                            value={this.state.ingredients}
                            placeholder="Liste des ingrédients"
                            onChange={this.onChangeElement}></textarea>
                        <textarea
                            name="instructions"
                            rows="15"
                            value={this.state.instructions}
                            placeholder="Liste des instructions"
                            onChange={this.onChangeElement}></textarea>
                        <select value={this.state.categorie}
                            onChange={this.onChangeElement} name="categorie">
                                <option value="preparation">Préparation</option>
                                <option value="patisserie">Patisserie</option>
                                <option value="plat">Plat</option>
                                <option value="dessert">Dessert</option>
                                <option value="entree">Entrée</option>
                        </select>
                            <button className="button">Save</button>
                    </form>                    
                </div>
            </div>
        )
    }
}