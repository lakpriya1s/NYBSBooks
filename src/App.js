import React from "react";
import Books from "./pages/books";
import BookReviews from "./pages/reviews";
import "./App.css";
import TopBooks from "./pages/top";
import Book from "./pages/book";
import { Router } from "@reach/router";
import BookList from "./pages/bookList";
import NavBar from "./components/navbar";
import AboutUs from "./pages/aboutus";

function App() {
  return (
    <div>
      <NavBar />
      <main style={{ paddingTop: "60px" }} className="container">
        <Router>
          <BookList path="/" />
          <Books path="/:name" />
          <AboutUs path="/aboutus" />
          <TopBooks path="/topbooks" />
          <BookReviews path="/reviews/:isbn" />
          <Book path="/:name/:isbn" />
        </Router>
      </main>
    </div>
  );
}

export default App;
