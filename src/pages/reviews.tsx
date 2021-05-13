import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviws } from "../redux/ActionCreators";

const BookReviews = ({ isbn }: { isbn: any }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviws(isbn));
  }, [dispatch, isbn]);

  const reviews = useSelector((state: any) => state.reviews);

  if (reviews.isLoading) {
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
    if (reviews.reviews.length === 0) {
      return <h2>No reviews found!</h2>;
    }

    const child = reviews.reviews.map((review: any) => {
      return (
        <div>
          <div className="card mb-2">
            <div className="card-body">
              <h5 className="card-title">{review.byline}</h5>
              <p className="card-text">Summary: {review.summary}</p>
              <a href={review.url} className="btn btn-primary">
                Visit full review
              </a>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div className="mt-4">{child}</div>
      </div>
    );
  }
};

export default BookReviews;
