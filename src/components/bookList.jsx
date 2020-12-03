import React, { Component } from 'react';
import axios from 'axios';

class BookList extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            isLoaded: false,
        }
    }

    componentDidMount(){

        axios.get('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=OPZ9CT7rKrV6lGmEJxs9bAymoBiyAIsI')
        .then(response => {
            this.setState({ 
            isLoaded: true,
            data: response.data.results
          });
          console.log(this.state.data);
        })
        .catch((err)=> {
            console.log(err);
        })  
    }

    render() { 
        var {isLoaded, data } = this.state;

        if(!isLoaded){
            return <div>Loading..</div>
        }else{
            const child = data.map((booklist) => {
                return <div key={ booklist.list_name_encoded }>
                    <a href={'/lists/' + booklist.list_name_encoded} className="card text-center">
                        <div className="card-body">
                            <p>{ booklist.display_name }</p>
                        </div>
                    </a>
                </div>
            });
          
              return (<div>
                    <div className="col-12 col-sm-8 offset-sm-2 offset-0 mt-3" >{ child }</div>
              </div>);
        }
    }
}
 
export default BookList;