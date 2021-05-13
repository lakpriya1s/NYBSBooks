import * as ActionTypes from "../constant/ActionTypes";
import { ApiKey } from "../constant/common";
import * as URLs from "../constant/urls";

export const fetchBookLists = () => (dispatch: any) => {
  dispatch(bookListLoading());

  return fetch(URLs.booklistUrl + ApiKey)
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
    .then((booklist) => dispatch(addBookList(booklist.results)))
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

  return fetch(URLs.booksUrl + name + ".json?" + ApiKey)
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
    .then((books) => dispatch(addBooks(books.results)))
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
