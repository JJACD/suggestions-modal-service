import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import SuggSlider from './components/SuggSlider.jsx'
import Navigationheader from './components/navigationheader.jsx'
import Navheader from './components/header.jsx'

//import router from '../../routes/products.js'

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
        productid: "",
        productimgurl: "",
        productname: "",
        productprice: "",
        producttype: {
          collection: "",
          category: "",
          gender: "",
          subcategory: ""
        },
        activitytype: "",
        bestseller: ""
      }
      ]
    }
    this.getData = this.getData.bind(this)
  };

//-------make this more dyanamic, temperat literal male/femal/ into the endpoints. Pulls only the data needed.
  getData() {
    axios
      .get('/api/products')
      .then((data) =>{
        this.setState ({
          products: data.data
        })
      })
      .catch()
  }
  componentDidMount(){
    this.getData()
  }
  render() {
    return (
      <div>
        <div className ="navbar-container">
        <Navheader />
        </div>
        <div className ="suggestion-container">
          <div className ="carousel-main"><SuggSlider products = {this.state.products}/></div>
          <div className ="carousel-main"><SuggSlider products = {this.state.products}/></div>
          <div className ="carousel-main"><SuggSlider products = {this.state.products}/></div>
        </div>
      </div>
    );
  };
};

ReactDom.render(<App />, document.getElementById('root'));



