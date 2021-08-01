import * as ActionTypes from "../constant/ActionTypes";
import { ApiKey } from "../constant/common";
import * as URLs from "../constant/urls";

export const fetchBookLists = () => (dispatch: any) => {
  dispatch(bookListLoading());

  return fetch(URLs.baseUrl + "categories")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((booklist) => dispatch(addBookList(booklist)))
    .catch((error) => dispatch(bookListFailed(error.message)));
};

export const addBookList = (booklist: any) => ({
  type: ActionTypes.ADD_BOOK_LIST,
  payload: booklist,
});

export const bookListLoading = () => ({
  type: ActionTypes.BOOK_LIST_LOADING,
});

export const bookListFailed = (error: any) => ({
  type: ActionTypes.BOOK_LIST_FAILED,
  paylaod: error,
});

export const fetchBooks = (name: any) => (dispatch: any) => {
  dispatch(booksLoading());

  return fetch(URLs.baseUrl + "books?category=" + name)
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((books) => dispatch(addBooks(books)))
    .catch((error) => dispatch(booksFailed(error.message)));
};

export const addBooks = (books: any) => ({
  type: ActionTypes.ADD_BOOKS,
  payload: books,
});

export const booksLoading = () => ({
  type: ActionTypes.BOOKS_LOADING,
});

export const booksFailed = (error: any) => ({
  type: ActionTypes.BOOKS_FAILED,
  paylaod: error,
});

export const fetchTopBooks = () => (dispatch: any) => {
  dispatch(topBooksLoading());

  return fetch(URLs.topbooksUrl + ApiKey)
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((topbooks) => dispatch(addTopBooks(topbooks.results)))
    .catch((error) => dispatch(topBookFailed(error.message)));
};

export const addTopBooks = (topbooks: any) => ({
  type: ActionTypes.ADD_TOP_BOOKS,
  payload: topbooks,
});

export const topBooksLoading = () => ({
  type: ActionTypes.TOP_BOOKS_LOADING,
});

export const topBookFailed = (error: any) => ({
  type: ActionTypes.TOP_BOOKS_FAILED,
  paylaod: error,
});

export const fetchReviws = (isbn: any) => (dispatch: any) => {
  dispatch(reviewsLoading());

  return fetch(URLs.reviewsUrl + isbn + "&" + ApiKey)
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((reviews) => dispatch(addReviws(reviews.results)))
    .catch((error) => dispatch(reviewsFailed(error.message)));
};

export const addReviws = (reviews: any) => ({
  type: ActionTypes.ADD_REVIEWS,
  payload: reviews,
});

export const reviewsLoading = () => ({
  type: ActionTypes.REVIEWS_LOADING,
});

export const reviewsFailed = (error: any) => ({
  type: ActionTypes.REVIEWS_FAILED,
  paylaod: error,
});

export const requestLogin = (creds: any) => {
  return {
    type: ActionTypes.LOGIN_REQUEST,
    creds,
  };
};

export const receiveLogin = (response: any) => {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    token: response.token,
  };
};

export const loginError = (message: any) => {
  return {
    type: ActionTypes.LOGIN_FAILURE,
    message,
  };
};

export const loginUser = (creds: any) => (dispatch: any) => {
  // We dispatch requestLogin to kickoff the call to the API
  dispatch(requestLogin(creds));

  return fetch(URLs.baseUrl + "users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(creds),
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => {
      if (response.success) {
        // If login was successful, set the token in local storage
        localStorage.setItem("token", response.token);
        localStorage.setItem("creds", JSON.stringify(creds));
        // Dispatch the success action
        dispatch(receiveLogin(response));
      } else {
        var error = new Error("Error " + response.status);
        throw error;
      }
    })
    .catch((error) => dispatch(loginError(error.message)));
};

export const requestLogout = () => {
  return {
    type: ActionTypes.LOGOUT_REQUEST,
  };
};

export const receiveLogout = () => {
  return {
    type: ActionTypes.LOGOUT_SUCCESS,
  };
};

// Logs the user out
export const logoutUser = () => (dispatch: any) => {
  dispatch(requestLogout());
  localStorage.removeItem("token");
  localStorage.removeItem("creds");
  dispatch(receiveLogout());
};
