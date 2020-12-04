import React, { Component } from 'react';
import axios from 'axios';

class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            isLoaded: false,
            list_name: ""
        }
    }

    componentDidMount(){

        axios.get('https://api.nytimes.com/svc/books/v3/lists/current/'+this.props.name+'.json?api-key=OPZ9CT7rKrV6lGmEJxs9bAymoBiyAIsI')
        .then(response => {
            this.setState({ 
            isLoaded: true,
            data: response.data.results.books,
            list_name: response.data.results.list_name
          });
          console.log(this.state.data);
        })
        .catch((err)=> {
            console.log(err);
        })  
    }

    render() { 

        var {isLoaded, data, list_name} = this.state;

        if(!isLoaded){
            return <div className="text-center mt-100">
            <div className="spinner-grow" style={{width:100,height: 100}} role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        }else{
            const child = data.map((book) => {
                return <div className='col-sm-4'>
                   <div className='card card-product'>
                        <div className='img-wrap'>
                            <img src={book.book_image} className="card-img-top" alt={book.title}/>
                            <div className="info-wrap d-flex justify-content-center">
                                <div className="mr-3 ml-3">
                                    <h6 className='title'>
                                        <strong>Title:</strong> {book.title} <br/><br/>
                                        <strong>Author:</strong> {book.author} <br/>
                                        <strong>Publisher:</strong> {book.publisher} <br/>
                                    </h6>
                                    <p>{book.description}</p>
                                    <a href={book.amazon_product_url} className="btn btn-primary btn-xl"> Buy on Amazon.com </a> <br/>
                                    <a href={'/reviews/' + book.primary_isbn10} className="btn btn-warning btn-xl mt-2"> Reviews </a>
                                </div>
                        </div>
                        <div className="action-wrap">
                                <div className="h5">
                                    <span>Rank: {book.rank}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            });
          
            return (<div>
                <div className="list_name">
                    <div className="card">
                    <div className="card-body">
                        <h3>{ list_name }</h3>
                    </div>
                </div>
                </div>
                <div className="row mt-4">
                    { child }
                </div>
            </div>
            );
            
        }
    }
}
 
export default Books;