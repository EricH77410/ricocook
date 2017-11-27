const defaultState = [];

const recipeReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_RECIPE':
      return [...state, action.recipe]
    case 'REMOVE_RECIPE':
      return state.filter((r)=>r.id !== action.id)
    case 'EDIT_RECIPE':
      return state.map((r)=>{
        if (r.id === action.id){
          return {...r,
          ...action.update}
        } else {
          return r
        }
      })
    case 'LOAD_RECIPES':
      return action.recipes;
    default:
      return state;
  }
}

export default recipeReducer;
