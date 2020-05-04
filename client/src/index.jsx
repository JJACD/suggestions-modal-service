import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import SuggSlider from './components/SuggSlider.jsx'
import navigationheader from './components/navigationheader.jsx'
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
        <h1></h1>

        <div><SuggSlider products = {this.state.products} /></div>

      </div>
    )
  };
};

ReactDom.render(<App />, document.getElementById('root'));
