import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import SuggSlider from './components/SuggSlider.jsx';
import Navheader from './components/header.jsx';
import Searchbarmodal from './components/Searchbarmodal.jsx'

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
      show: false,
    };
    this.getData = this.getData.bind(this);
    this.handlesearchchange = this.handlesearchchange.bind(this);
    this.handleModal =this.handleModal.bind(this)
    this.handlesearchpost = this.handlesearchpost.bind(this);

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
      this.setState({
        show: true
      })
      this.handlesearchpost()

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
        <Navheader products={this.state.products} handlesearchchange={this.handlesearchchange} searchinput={this.searchinput} />
        <div className="search-container">
          <Searchbarmodal show={this.state.show} onHide={this.handleModal} products={this.state.searchedproducts}/>
        </div>
        <div className="suggestion-container">
          <div className="carousel-main"><SuggSlider products={this.state.products} /></div>
        </div>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('similar'));
