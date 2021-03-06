import React from "react";
import { Link } from "react-router-dom";

const TopBooks = ({ topbooks }: { topbooks: any }) => {
  if (topbooks.isLoading) {
    return (
      <div className="text-center mt-100">
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
    return (
      <div className="TopBooks">
        {topbooks.topbooks.lists.map((list: any) => (
          <div>
            <div className="list_name mt-2 mr-2 ml-2 mb-2">
              <div className="card">
                <div className="card-body">
                  <h3>{list.display_name}</h3>
                </div>
              </div>
            </div>
            <div className="row">
              {list.books.map((book: any) => (
                <div className="col-sm-4">
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
                            <strong>Publisher:</strong> {book.publisher}
                          </h6>
                          <p>{book.description}</p>
                          <a
                            href={book.amazon_product_url}
                            className="btn btn-primary btn-xl"
                          >
                            {" "}
                            Buy on Amazon.com{" "}
                          </a>
                          <br />
                          <Link
                            to={`/${list.list_name_encoded}/${book.primary_isbn10}`}
                          >
                            <div className="btn btn-warning btn-xl mt-2">
                              {" "}
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
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default TopBooks;
