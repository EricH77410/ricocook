// Selection des recettes en fonction du filtre

const getVisibleRecipes = (recipes, {text, type}) => {
    console.log('txt : ' + text, 'type : '+type)
    if (type) {
        return recipes.filter((recipe) => {
            if (text) {
                return recipe.categorie.toLowerCase() === type.toLowerCase() && recipe.nom.toLowerCase().includes(text.toLowerCase());
            } else {
                return recipe.categorie.toLowerCase() === type.toLowerCase()
            }          
        })
    }

    return recipes.filter((recipe) => {
        return recipe.nom.toLowerCase().includes(text.toLowerCase());
    })
}

export default getVisibleRecipes;