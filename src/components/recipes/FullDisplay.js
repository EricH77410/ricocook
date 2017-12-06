import React from 'react'
import { connect } from 'react-redux';
import Video from './Video';

const FullDisplay = (props) => {
    const ingredients = props.recette.ingredients.split(',').map((item, key) => <li key={key}>{item}</li>);
    const instructions = props.recette.instructions.split('\n').map((item, key) => <li key={key}>{item}</li>);
    const video = props.recette.video ? <Video url={props.recette.video}/>: ''
    return (
        <div className="content-container">
                <div className="card">
            <div className="image">
                <img src={props.recette.image} alt="" />
            </div>
            {video}
            <div className="recette">
                <h2>{props.recette.nom}</h2>
                <h4>{props.recette.description}</h4>
                <p>
                    <span className="glyphicon glyphicon-time time"></span> {props.recette.tempsPreparation}
                    <span className="glyphicon glyphicon-fire cuisson"></span> {props.recette.tempsCuisson}
                    <span className="glyphicon glyphicon-education dificulty"></span> {props.recette.difficulte}
                </p>
                <ul className="liste-ingredients">
                    {ingredients}
                </ul>
                <ol className="liste-instruction">
                   {instructions}
                </ol>
                
            </div>
        </div>
        </div>

    )
}

const mapStateToProps = (state,props) => {
     return {
         recette: state.recipes.find((r)=>r.id === props.match.params.id)
     }
 }

export default connect(mapStateToProps)(FullDisplay);