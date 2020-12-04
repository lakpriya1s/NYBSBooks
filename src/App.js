import React from 'react';
import NavBar from './components/navbar'
import BookList from './pages/bookList';
import Books from './pages/books';
import BookReviews from './pages/reviews'
import './App.css';
import {useRoutes} from 'hookrouter';
import TopBooks from './pages/top';
import NotFound from './pages/notfound'
import AboutUs from './pages/aboutus';

const routes = {
    '/': () => <BookList/>,
    '/lists/:name': ({name}) => <Books name={name}/>,
    '/topbooks': () => <TopBooks/>,
    '/reviews/:isbn': ({isbn}) => <BookReviews isbn={isbn}/>,
    '/aboutus': () => <AboutUs/>
}

function App() {
    const match = useRoutes(routes)
    return (
        <React.Fragment>
            <NavBar/>
            <main style= {{ paddingTop: '60px' }} className="container">
                {match || <NotFound/>}
            </main>
        </React.Fragment>
    );
}
 
export default App;