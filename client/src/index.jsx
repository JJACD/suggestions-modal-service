import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import SuggSlider from './components/SuggSlider.jsx';
import Navheader from './components/header.jsx';
import Searchbarmodal from './components/Searchbarmodal.jsx'

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

      show: false,

      target: "",

      cartItemCount: "1",
    };

    this.getData = this.getData.bind(this);
    this.handlesearchchange = this.handlesearchchange.bind(this);
    this.handleModal =this.handleModal.bind(this)
    this.handlesearchpost = this.handlesearchpost.bind(this);
  }

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
      searchinput: e.target.value,
      target: e.target
    })
    if (e.target.value.length >= 3){
      this.setState({
        show: true
      })
      this.handlesearchpost()
    } else if (e.target.value.length < 3){
      this.setState({
        show:false
      })
    }
  }

  handlesearchpost(){
    axios
      .post(`http://localhost:3005/api/search`,
      {productname: this.state.searchinput}
      )
      .then((data) => {
        this.setState({
          searchedproducts: data.data
        })
      })
      .catch();
  }

  handleModal() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div>
        <Navheader products={this.state.products} handlesearchchange={this.handlesearchchange} searchinput={this.searchinput} cartItemCount={this.state.cartItemCount}/>
        <div className="search-container">
          <Searchbarmodal show={this.state.show} onHide={this.handleModal} products={this.state.searchedproducts} target = {this.state.target}/>
        </div>
        <div className="suggestion-container">
          <div className="carousel-main"><SuggSlider products={this.state.products} /></div>
        </div>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('similar'));
