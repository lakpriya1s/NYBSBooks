import * as ActionTypes from "../constant/ActionTypes";

export const Reviews = (
  state = {
    isLoading: true,
    error: null,
    reviews: [],
  },
  action: any
) => {
  switch (action.type) {
    case ActionTypes.ADD_REVIEWS:
      return {
        ...state,
        isLoading: false,
        error: null,
        reviews: action.payload,
      };
    case ActionTypes.REVIEWS_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
        reviews: [],
      };
    case ActionTypes.REVIEWS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        reviews: [],
      };

    default:
      return state;
  }
};
