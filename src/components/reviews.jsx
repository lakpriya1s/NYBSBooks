import React, { Component } from 'react';
import axios from 'axios';

class BookReviews extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            isLoaded: false,
            revCount: 0
        }
    }

    componentDidMount(){

        axios.get('https://api.nytimes.com/svc/books/v3/reviews.json?isbn='+this.props.isbn+'&api-key=OPZ9CT7rKrV6lGmEJxs9bAymoBiyAIsI')
        .then(response => {
            this.setState({ 
            isLoaded: true,
            data: response.data.results,
            revCount: response.data.num_results
          });
          console.log(this.state.data);
        })
        .catch((err)=> {
            console.log(err);
        })  
    }

    render() { 

        var {isLoaded, data, revCount} = this.state;

        if(!isLoaded){
            return <div className="text-center mt-100">
            <div className="spinner-grow" style={{width:100,height: 100}} role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        }else{
            if(revCount===0){
                return <h2>No reviews found!</h2>
            }

            const child = data.map((review) => {
                return <div>
                   <div className="card mb-2">
                    <div className="card-body">
                        <h5 className="card-title">{review.byline}</h5>
                        <p className="card-text">Summary: {review.summary}</p>
                        <a href={review.url} className="btn btn-primary">Visit full review</a>
                    </div>
                    </div>
                </div>
            });
          
            return (<div>
                <div className="mt-4">
                    { child }
                </div>
            </div>
            );
        }
    }
}
 
export default BookReviews;