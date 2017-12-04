// Selection des recettes en fonction fu filtre

const getVisibleRecipes = (recipes, {text}) => {
    return recipes.filter((recipe) => {
        return recipe.nom.toLowerCase().includes(text.toLowerCase());
    })
}

export default getVisibleRecipes;