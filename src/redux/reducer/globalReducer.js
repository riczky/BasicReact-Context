import actionType from "./globalActionType";

const globalState = {
    totalOrder: 0
  }
  
  // const createStore = redux.createStore;
  
  // reducer
  const rootReducer = (state = globalState, action) => {
    if(action.type === actionType.PLUS_ORDER){
      return {
        ...state,
        totalOrder: state.totalOrder + 1
      }
    }
    if(action.type === actionType.MINUS_ORDER){
      if(state.totalOrder > 0) {
        return{
          ...state,
          totalOrder:state.totalOrder - 1
        }
  
      }
    }
    return state;
  }

  
export default rootReducer;