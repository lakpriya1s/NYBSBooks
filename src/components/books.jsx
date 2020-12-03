import React, { Component } from 'react';
import axios from 'axios';

class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            isLoaded: false,
        }
    }

    componentDidMount(){

        axios.get('https://api.nytimes.com/svc/books/v3/lists/current/'+this.props.name+'.json?api-key=OPZ9CT7rKrV6lGmEJxs9bAymoBiyAIsI')
        .then(response => {
            this.setState({ 
            isLoaded: true,
            data: response.data.results.books
          });
          console.log(this.state.data);
        })
        .catch((err)=> {
            console.log(err);
        })  
    }

    render() { 

        var {isLoaded, data} = this.state;

        if(!isLoaded){
            return <div>Loading..</div>
        }else{
            const child = data.map((book) => {
                return <div className='col-sm-4'>
                   <div className='card card-product'>
                        <div className='img-wrap'>
                            <img src={book.book_image} className="card-img-top" alt="Image"/>

                        </div>
                        <figcaption className="info-wrap">
                            <h6 className='title'>
                                {book.author}
                            </h6>
                            <div className="action-wrap">
                                <a href={book.amazon_product_url} className="btn btn-primary btn-sm float-right"> Order </a>
                                <div className="h5">
                                    <span>Rank: {book.rank}</span>
                                </div>
			                </div>
                        </figcaption>
                    </div>
                </div>
            });
          
            return (<div className="row">
                { child }
            </div>
            );
            
        }
    }
}
 
export default Books;