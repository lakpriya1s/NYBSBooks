import * as ActionTypes from "../constant/ActionTypes";

export const Booklists = (
  state = {
    isLoading: true,
    error: null,
    booklists: [],
  },
  action: any
) => {
  switch (action.type) {
    case ActionTypes.ADD_BOOK_LIST:
      return {
        ...state,
        isLoading: false,
        error: null,
        booklists: action.payload,
      };
    case ActionTypes.BOOK_LIST_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
        booklists: [],
      };
    case ActionTypes.BOOK_LIST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        booklists: [],
      };
    default:
      return state;
  }
};
