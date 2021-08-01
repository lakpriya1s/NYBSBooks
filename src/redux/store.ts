import { applyMiddleware, combineReducers, createStore } from "redux";
import { Booklists } from "../reducers/Booklist.reducer";
import { Reviews } from "../reducers/Reviews.reducer";
import { TopBooks } from "../reducers/TopBooks.reducer";
import { Auth } from "../reducers/Auth.reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Books } from "../reducers/Books.reducer";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      books: Books,
      booklists: Booklists,
      topbooks: TopBooks,
      reviews: Reviews,
      auth: Auth,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
