import React, { useEffect } from "react";

import TopBooks from "./top";
import Book from "./book";
import BookList from "./bookList";
import AboutUs from "./aboutus";
import Books from "./books";
import BookReviews from "./reviews";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchBookLists,
  fetchTopBooks,
  loginUser,
  logoutUser,
} from "../redux/ActionCreators";
import Header from "../components/header";
import Footer from "../components/footer";

const Main = ({
  booklists,
  topbooks,
  fetchBookLists,
  fetchTopBooks,
  loginUser,
  logoutUser,
  auth,
}: {
  booklists: any;
  topbooks: any;
  auth: any;
  fetchBookLists: Function;
  fetchTopBooks: Function;
  loginUser: Function;
  logoutUser: Function;
}) => {
  useEffect(() => {
    fetchBookLists();
    fetchTopBooks();
  }, [fetchBookLists, fetchTopBooks]);

  const SingleBookList = ({ match }: { match: any }) => {
    return <Books name={match.params.name} />;
  };

  const BookWithReviews = ({ match }: { match: any }) => {
    return <BookReviews isbn={match.params.isbn} />;
  };

  const SingleBook = ({ match }: { match: any }) => {
    return <Book isbn={match.params.isbn} list={match.params.list} />;
  };

  return (
    <>
      <Header auth={auth} loginUser={loginUser} logoutUser={logoutUser} />
      <main style={{ paddingTop: "60px" }} className="container">
        <Switch>
          <Route
            exact
            path="/home"
            component={() => <BookList booklists={booklists} />}
          />
          <Route
            exact
            path="/topbooks"
            component={() => <TopBooks topbooks={topbooks} />}
          />
          <Route exact path="/aboutus" component={() => <AboutUs />} />
          <Route path="/reviews/:isbn" component={BookWithReviews} />
          <Route path="/:list/:isbn" component={SingleBook} />
          <Route path="/:name" component={SingleBookList} />
          <Redirect to="/home" />
        </Switch>
      </main>
      <Footer />
    </>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  fetchBookLists: () => {
    dispatch(fetchBookLists());
  },
  fetchTopBooks: () => {
    dispatch(fetchTopBooks());
  },
  loginUser: (creds: any) => {
    dispatch(loginUser(creds));
  },
  logoutUser: () => {
    dispatch(logoutUser());
  },
});

const mapStatetoProps = (state: any) => {
  return {
    booklists: state.booklists,
    topbooks: state.topbooks,
    auth: state.auth,
  };
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Main));
