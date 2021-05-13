import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footcont">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/topbooks">Top 5</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-5">
            <h5>Our Address</h5>
            <address>
              Billewatta,
              <br />
              Wahava
              <br />
              Rambukkana
              <br />
              Sri Lanka
              <br />
              <i className="fa fa-phone fa-lg"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax fa-lg"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope fa-lg"></i>:{" "}
              <a href="mailto:confusion@food.net">lakpriya@nybs.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-google"
                href="http://google.com/+"
              >
                <i className="fa fa-google-plus"></i>
              </a>
              <a
                className="btn btn-social-icon btn-facebook"
                href="https://www.facebook.com/lakpriya.senevirathna/"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin"
                href="https://www.linkedin.com/in/lakpriyasenevirathna/"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/lakrpiya1s"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                className="btn btn-social-icon btn-google"
                href="http://youtube.com/c/lakpriya"
              >
                <i className="fa fa-youtube"></i>
              </a>
              <a
                className="btn btn-social-icon"
                href="mailto:lakpriya1024@gmail.com"
              >
                <i className="fa fa-envelope-o"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2021 Lakpriya Senevirathna</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
