import React from 'react';
import NavBar from './components/navbar'
import BookList from './components/bookList';
import Books from './components/books';
import BookReviews from './components/reviews'
import './App.css';
import {useRoutes} from 'hookrouter';
import TopBooks from './components/top';
import NotFound from './components/notfound'

const routes = {
    '/': () => <BookList/>,
    '/lists/:name': ({name}) => <Books name={name}/>,
    '/topbooks': () => <TopBooks/>,
    '/reviews/:isbn': ({isbn}) => <BookReviews isbn={isbn}/>,
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