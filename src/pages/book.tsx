import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBooks } from "../redux/ActionCreators";

const Book = ({
  isbn,
  list,
  fetchBooks,
  books,
}: {
  isbn: any;
  list: any;
  fetchBooks: Function;
  books: any;
}) => {
  useEffect(() => {
    fetchBooks(list);
  }, [fetchBooks, list]);

  console.log(books);

  if (books.isLoading) {
    return (
      <div className="text-center">
        <div
          className="spinner-grow mt-100"
          style={{ width: 100, height: 100 }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  } else {
    const book = books.books.books.filter(
      (book: any) => book.primary_isbn10 === isbn
    )[0];
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return (
      <div className="row">
        <div style={{ padding: 20 }} className="col-12 col-sm-4 col-lg-4">
          <div style={{ padding: 10 }} className="card">
            <img
              className="img-fluid card-img-top"
              src={book.book_image}
              alt="bookcover"
            />
          </div>
        </div>
        <div style={{ padding: 20 }} className="col-12 col-sm-8 col-lg-8">
          <div style={{ padding: 20 }} className="card">
            <h1>Rank: {book.rank}</h1>
            <h2>{book.title}</h2>
            <h4>Author: {book.author}</h4>
            <h5>Publisher: {book.publisher}</h5>
            <h5>Contributor: {book.contributor}</h5>
            <h5>Created Date: {book.created_date}</h5>
            <h5>ISBN: {book.primary_isbn10}</h5>
            <h5>Last Week Rank: {book.rank_last_week} </h5>
            <p>{book.description}</p>
            <a
              href={book.amazon_product_url}
              className="btn btn-primary btn-xl"
            >
              {" "}
              Buy on Amazon.com{" "}
            </a>
            <Link to={"/reviews/" + book.primary_isbn10}>
              <div className="btn btn-warning btn-xl mt-2 rev">Reviews </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch: any) => ({
  fetchBooks: (list: any) => {
    dispatch(fetchBooks(list));
  },
});

const mapStatetoProps = (state: any) => {
  return {
    books: state.books,
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Book);
