import * as actionTypes from '../actionTypes';
const initialState = {
  isLoading: true,
  errMess: null,
  dishes: [],
};
export const dishesReducer = (state = initialState, action) => {
  //reducers: {}
  switch (action.type) {
    case actionTypes.ADD_DISHES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        dishes: action.payload,
      };
    case actionTypes.DISHES_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        dishes: [], //! empty
      };
    case actionTypes.DISHES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        dishes: [],
      };

    default:
      return state;
  }
};
