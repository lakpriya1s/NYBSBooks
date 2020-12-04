import React from 'react';
import NavBar from './components/navbar'
import BookList from './components/bookList';
import Books from './components/books';
import './App.css';
import {useRoutes} from 'hookrouter';
import TopBooks from './components/top';

const routes = {
    '/': () => <BookList/>,
    '/lists/:name': ({name}) => <Books name={name}/>,
    '/topbooks': () => <TopBooks/>
}

function App() {
    const match = useRoutes(routes)
    return (
        <React.Fragment>
            <NavBar/>
            <main style= {{ paddingTop: '60px' }} className="container">
                {match}
            </main>
        </React.Fragment>
    );
}
 
export default App;