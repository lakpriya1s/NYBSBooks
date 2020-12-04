import React from 'react';

const AboutUs = () => {
    return ( <div>
        <h2>NYBS BOOKS</h2>

        <p>This is a react based-web application to show the New York Times best-selling books list.</p>

        <img src="https://github.com/lakpriya1s/NYBSBooks/blob/master/src/logo.svg?raw=true" alt="logo" width="150"></img>

        <p> Go to [NYBS Books web app](https://nybsbooks.netlify.app)</p>

        <h3> Books API </h3>

        <p> Used the web api of New York Times Books API [https://developer.nytimes.com/](https://developer.nytimes.com/) </p>

        <h3> How this app works </h3>

        <p> In the home page, we will see the best sellers list names in New York. Then we can select one of them to see books on that list.<br/>

        In the top 5 books section, we can see the top 5 books for all the Best Sellers lists.<br/>

        By mouse hovering on a book, We can see more details about the selected book, and clicking on the buy button we can order the book from amazon.com. By clicking on the review button on a book, we can see book reviews that selected book got.</p>

        <h2>Screenshots</h2>

        <h3>Desktop</h3> 

        <img src="https://github.com/lakpriya1s/NYBSBooks/blob/master/screenshots/image-d-books.png?raw=true" alt="desktop" width="500"></img><br/>

        <img src="https://github.com/lakpriya1s/NYBSBooks/blob/master/screenshots/image-d.png?raw=true?raw=true" alt="desktop" width="500"></img><br/>

        <img src="https://github.com/lakpriya1s/NYBSBooks/blob/master/screenshots/image-d-revs.png?raw=true" alt="desktop" width="500"></img>

        <h3>Mobile</h3>

        <img src="/screenshots/mobile1.jpg" alt='mobile' width="200"></img>
        <img src="/screenshots/mobile2.jpg" alt='mobile' width="200"></img>

        <h3>Credits</h3> 

        <p>Thanks to <a href="https://www.netlify.com/">Netlify</a> for hosting.</p>

        <h3>Developer</h3>

        <p>I am Lakpriya Senevirathana, an undergraduate student from University of Peradeniya. And I am a freelance android application developer with full application development life cycle experience including designing, development and implementing over 2+ years of the application development field. I also have rich experience in telco application development and web site design.

        <a href="https://www.linkedin.com/in/lakpriyasenevirathna/">linkedIn</a>
        <a href="lakpriya1@yahoo.com">gmail</a>

      </p> 

    </div>
     );
}
 
export default AboutUs;