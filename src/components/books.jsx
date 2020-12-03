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
                return <div>
                  <p>Title - { book.author }</p>
                </div>
            });
          
              return <div>
                <div>{ child }</div>
              </div>;
        }
    }
}
 
export default Books;