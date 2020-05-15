import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import SuggSlider from './components/SuggSlider.jsx';
import Navheader from './components/header.jsx';

// import router from '../../routes/products.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          productid: '',
          productimgurl: '',
          productname: 'Loading....',
          productprice: '',
          producttype: {
            collection: '',
            category: '',
            gender: '',
            subcategory: '',
          },
          activitytype: '',
          bestseller: '',
        },
      ],
      searchedproducts: [
        {
          productid: '',
          productimgurl: '',
          productname: 'Loading....',
          productprice: '',
          producttype: {
            collection: '',
            category: '',
            gender: '',
            subcategory: '',
          },
          activitytype: '',
          bestseller: '',
        },
      ],
      searchinput: '',
    };
    this.getData = this.getData.bind(this);
    this.handlesearchchange = this.handlesearchchange.bind(this);
    //this.handlesearch = this.handlesearch.bind(this);
  }

  // -------make this more dyanamic, temperat literal male/femal/ into the endpoints. Pulls only the data needed.
  getData() {
    axios
      .get('http://localhost:3005/api/products', {headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }})
      .then((data) => {
        this.setState({
          products: data.data,
        });
      })
      .catch();
  }

  componentDidMount() {
    this.getData();
  }

  handlesearchchange(e){
    this.setState({
      searchinput: e.target.value
    })
    if (e.target.value.length >= 3){
      //this.handlesearch(e.target.value)
      axios
      .post(`http://localhost:3005/api/search`,
      {productname: e.target.value}
      )
      .then((data) => {
        console.log("return from axios", data);
        this.setState({
          searchedproducts: data.data
        })
      })
      .catch();
    }
  }

  // handlesearch(input){
  //   console.log("axios searching for", input)
  //   axios
  //   .get(`http://localhost:3005/api/search`, {this.searchinput},
  //   {headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     'Content-Type': 'application/json'
  //   }})
  //   .then((data) => {
  //     console.log("return from axios", data);
  //   })
  //   .catch();
  // }



  render() {
    return (
      <div>
            <Navheader products={this.state.products} handlesearchchange={this.handlesearchchange} searchinput={this.searchinput} searchresults ={this.state.searchedproducts}/>

        <div className="suggestion-container">
          <div className="carousel-main"><SuggSlider products={this.state.products} /></div>
        </div>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('similar'));
