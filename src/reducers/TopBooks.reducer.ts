import * as ActionTypes from "../constant/ActionTypes";

export const TopBooks = (
  state = {
    isLoading: true,
    error: null,
    topbooks: [],
  },
  action: any
) => {
  switch (action.type) {
    case ActionTypes.ADD_TOP_BOOKS:
      return {
        ...state,
        isLoading: false,
        error: null,
        topbooks: action.payload,
      };
    case ActionTypes.TOP_BOOKS_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
        topbooks: [],
      };
    case ActionTypes.TOP_BOOKS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        topbooks: [],
      };

    default:
      return state;
  }
};
