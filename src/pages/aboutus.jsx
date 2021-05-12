import React from "react";

const AboutUs = () => {
  return (
    <div>
      <h2>NYBS BOOKS</h2>
      <p>
        This is a react based-web application to show the New York Times
        best-selling books list.
      </p>
      <img
        src="https://github.com/lakpriya1s/NYBSBooks/blob/master/src/logo.svg?raw=true"
        className="img-fluid"
        alt="logo"
        width="50"
      ></img>{" "}
      <br /> <br />
      <h3>🛠️ GitHub repo</h3>
      <p>
        Go to{" "}
        <a href="https://github.com/lakpriya1s/NYBSBooks">
          https://github.com/lakpriya1s/NYBSBooks
        </a>
      </p>
      <h3> Books API </h3>
      <p>
        {" "}
        New York Times Books API:{" "}
        <a href="https://developer.nytimes.com/">
          https://developer.nytimes.com/
        </a>{" "}
      </p>
      <h3> How this app works </h3>
      <ul>
        <li>
          In the home page, we can see a list of book categories. Among those we
          can select a category that we want. When entering to a book category
          we have acess to best selling books under that category in New York.
        </li>
        <li>
          In the top 5 books section, we can see the top 5 books for all the
          Best Sellers lists.
        </li>
        <li>
          By mouse hovering on a book, We can see more details about the
          selected book, and clicking on the view more button, We can see more
          information about book and book can be purchased from amazon.com.
        </li>
        <li>
          By clicking on the review button, We can see book reviews for selected
          book.
        </li>
      </ul>
      <h2>Screenshots</h2>
      <h3>Desktop</h3>
      <img
        src="https://github.com/lakpriya1s/NYBSBooks/blob/master/screenshots/image-d-books.png?raw=true"
        className="img-fluid"
        alt="desktop"
        width="500"
      ></img>
      <br />
      <br />
      <img
        src="https://github.com/lakpriya1s/NYBSBooks/blob/master/screenshots/image-d.png?raw=true?raw=true"
        className="img-fluid"
        alt="desktop"
        width="500"
      ></img>
      <br />
      <br />
      <img
        src="https://github.com/lakpriya1s/NYBSBooks/blob/master/screenshots/image-d-revs.png?raw=true"
        className="img-fluid"
        alt="desktop"
        width="500"
      ></img>
      <br />
      <br />
      <h3>Mobile</h3>
      <img
        src="https://github.com/lakpriya1s/NYBSBooks/blob/master/screenshots/mobile1.jpg?raw=true"
        className="img-fluid"
        alt="mobile"
        width="200"
      ></img>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <img
        src="https://github.com/lakpriya1s/NYBSBooks/blob/master/screenshots/mobile2.jpg?raw=truw"
        className="img-fluid"
        alt="mobile"
        width="200"
      ></img>
      <h3>Credits</h3>
      <p>
        Thanks to <a href="https://www.netlify.com/">Netlify</a> for hosting.
      </p>
      <h3>Developer</h3>
      <p>
        I am Lakpriya Senevirathana, an undergraduate student from University of
        Peradeniya. And I am a freelance android application developer with full
        application development life cycle experience including designing,
        development and implementing over 2+ years of the application
        development field. I also have rich experience in telco application
        development and web site design.
        <br />
        <br />
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/lakpriyasenevirathna/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="lakpriya1@yahoo.com">Gmail</a>
          </li>
        </ul>
      </p>
    </div>
  );
};

export default AboutUs;
