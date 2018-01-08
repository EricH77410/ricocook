
const defaultState = {
  text:'',
  type:''
}

const filterReducer = (state = defaultState, action) => {
  switch(action.type){
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SET_TYPE_FILTER':
      return {
        ...state,
        type: action.text
      }
      default:
        return state;
  }
}

export default filterReducer;
