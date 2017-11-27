
const defaultState = {
  text:''
}

const filterReducer = (state = defaultState, action) => {
  switch(action.type){
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
      default:
        return state;
  }

}

export default filterReducer;
