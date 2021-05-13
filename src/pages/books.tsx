import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/ActionCreators";
import { Link } from "react-router-dom";

const Books = ({ name }: { name: any }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks(name));
  }, [dispatch, name]);

  const books = useSelector((state: any) => state.books);

  if (books.isLoading) {
    return (
      <div className="text-center">
        <div
          className="spinner-grow"
          style={{ width: 100, height: 100 }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  } else {
    const child = books.books.books.map((book: any) => {
      return (
        <div className="col-sm-6 col-lg-4">
          <div className="card card-product">
            <div className="img-wrap">
              <img
                src={book.book_image}
                className="card-img-top"
                alt={book.title}
              />
              <div className="info-wrap d-flex justify-content-center">
                <div className="mr-3 ml-3">
                  <h6 className="title">
                    <strong>Title:</strong> {book.title} <br />
                    <br />
                    <strong>Author:</strong> {book.author} <br />
                    <strong>Publisher:</strong> {book.publisher} <br />
                  </h6>
                  <p>{book.description}</p>
                  <a
                    href={book.amazon_product_url}
                    className="btn btn-primary btn-xl"
                  >
                    {" "}
                    Buy on Amazon.com{" "}
                  </a>{" "}
                  <br />
                  <Link
                    to={`/${books.books.list_name_encoded}/${book.primary_isbn10}`}
                  >
                    <div className="btn btn-warning btn-xl mt-2">
                      View More{" "}
                    </div>
                  </Link>
                </div>
              </div>
              <div className="action-wrap">
                <div className="h5">
                  <span>Rank: {book.rank}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div className="list_name">
          <div className="card">
            <div className="card-body">
              <h3>{books.books.list_name}</h3>
            </div>
          </div>
        </div>
        <div className="row mt-4">{child}</div>
      </div>
    );
  }
};

export default Books;
