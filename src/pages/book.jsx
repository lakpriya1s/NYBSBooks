import React from "react";
import { useLocation } from "@reach/router";

const Book = () => {
  const { state } = useLocation();
  console.log(state);
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
            src={state.book.book_image}
            alt="bookcover"
          />
        </div>
      </div>
      <div style={{ padding: 20 }} className="col-12 col-sm-8 col-lg-8">
        <div style={{ padding: 20 }} className="card">
          <h1>Rank: {state.book.rank}</h1>
          <h2>{state.book.title}</h2>
          <h4>Author: {state.book.author}</h4>
          <h5>Publisher: {state.book.publisher}</h5>
          <h5>Contributor: {state.book.contributor}</h5>
          <h5>Created Date: {state.book.created_date}</h5>
          <h5>ISBN: {state.book.primary_isbn10}</h5>
          <h5>Last Week Rank: {state.book.rank_last_week} </h5>
          <p>{state.book.description}</p>
          <a
            href={state.book.amazon_product_url}
            className="btn btn-primary btn-xl"
          >
            {" "}
            Buy on Amazon.com{" "}
          </a>
          <a
            href={"/reviews/" + state.book.primary_isbn10}
            className="btn btn-warning btn-xl mt-2"
          >
            {" "}
            Reviews{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Book;
