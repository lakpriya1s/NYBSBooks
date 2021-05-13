import React from "react";
import { Link } from "react-router-dom";

const BookList = ({ booklists }: { booklists: any }) => {
  if (booklists.isLoading) {
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
    const child = booklists.booklists.map((booklist: any) => {
      return (
        <div key={booklist.list_name_encoded}>
          <Link to={booklist.list_name_encoded}>
            <div className="card text-center">
              <div className="card-body">
                <h3>{booklist.display_name}</h3>
              </div>
            </div>
          </Link>
        </div>
      );
    });

    return (
      <div>
        <div className="col-12 col-sm-10 offset-sm-1 offset-0 mt-3">
          {child}
        </div>
      </div>
    );
  }
};

export default BookList;
