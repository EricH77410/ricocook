import db from '../firebase/firebase';

export const addRecipe = (recipe)=>{
  return {
    type: 'ADD_RECIPE',
    recipe
  }
}
// ASYNC ADD RECIPE
export const startAddRecipe = (recipeData = {}) => {
  return (dispatch) => {
    const {
      nom='',
      description='',
      ingredients='',
      instructions='',
      tempsCuisson='',
      tempsPreparation='',
      image='',
      video='',
      difficulte='facile',
      categorie=''
    } = recipeData
    const recipe = {nom,description,ingredients,instructions,tempsCuisson,tempsPreparation,image,video,difficulte,categorie}
    return db.ref('recettes').push(recipe).then((snap)=>{
      dispatch(addRecipe({
        id: snap.key,
        ...recipe
      }))
    })
  }
}

export const editRecipe = (id, update)=>{
  return {
    type: 'EDIT_RECIPE',
    id,
    update
  }
}

// ASYNC EDIT

export const removeRecipe = (id)=>{
  return {
    type: 'REMOVE_RECIPE',
    id
  }
}

// ASYNC REMOVE
export const startRemoveRecipe = (id) => {
  return (dispatch) => {
    return db.ref(`recettes/${id}`).remove().then(()=>{
      dispatch(removeRecipe(id));
    })
  }
}

export const loadRecipes = (recipes)=>{
  return {
    type: 'LOAD_RECIPES',
    recipes
  }
}
// ASYNC REDUX
export const startLoadRecipes= () => {
  return (dispatch)=>{
    const recipes = [];
    return db.ref('recettes').once('value')
      .then((snap)=>{
        snap.forEach((snp)=>{
          recipes.push({
            id:snp.key,
            ...snp.val()
          })
        })
      }).then(()=>dispatch(loadRecipes(recipes)))
  }
}


