import * as ActionTypes from "../constant/ActionTypes";

export const Books = (
  state = {
    isLoading: true,
    error: null,
    books: [],
  },
  action: any
) => {
  switch (action.type) {
    case ActionTypes.ADD_BOOKS:
      return {
        ...state,
        isLoading: false,
        error: null,
        books: action.payload,
      };
    case ActionTypes.BOOKS_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
        books: [],
      };
    case ActionTypes.BOOKS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        books: [],
      };

    default:
      return state;
  }
};
